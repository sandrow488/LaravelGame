<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Game;
use App\Models\GameSession;
use Carbon\Carbon;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Usamos auth:sanctum, la cual gestiona automáticamente la detección de sesión
// para clientes SPA/Inertia alojados en el mismo dominio o tokens si es externo.
Route::middleware('auth:sanctum')->group(function () {

    Route::post('/games/start', function (Request $request) {
        $validator = validator($request->all(), [
            'game_id' => 'required|exists:games,id'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'ID de juego no válido.'], 400);
        }

        $game = Game::find($request->game_id);
        $user = auth()->user();

        // Verificar si el juego está publicado o si el usuario tiene rol de gestor/administrador para probarlo
        $userRoles = $user->roles->pluck('name')->toArray();
        $canPreview = in_array('administrador', $userRoles) || in_array('gestor', $userRoles);

        if (!$game->is_published && !$canPreview) {
            return response()->json(['error' => 'No tienes permiso para jugar a este juego o no está publicado.'], 403);
        }

        // Crear la sesión de juego en la base de datos
        $session = GameSession::create([
            'user_id' => $user->id,
            'game_id' => $game->id,
            'started_at' => now(),
        ]);

        return response()->json([
            'message' => 'Sesión iniciada correctamente',
            'session_id' => $session->id,
            'started_at' => $session->started_at,
        ], 200);
    });

    Route::post('/games/result', function (Request $request) {
        $validator = validator($request->all(), [
            'session_id' => 'required|exists:game_sessions,id',
            'score' => 'required|numeric'
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => 'Datos inválidos.'], 400);
        }

        $session = GameSession::find($request->session_id);

        // Seguridad: Verificar que la sesión pertenece al usuario autenticado
        if ($session->user_id !== auth()->id()) {
            return response()->json(['error' => 'No autorizado para modificar esta sesión.'], 403);
        }

        // Si ya había terminado, no permitimos guardar de nuevo (evitar trampas básicas)
        if ($session->ended_at) {
            return response()->json(['error' => 'La sesión ya había finalizado.'], 400);
        }

        $endedAt = now();
        $startedAt = Carbon::parse($session->started_at);
        $durationSeconds = $startedAt->diffInSeconds($endedAt);

        // Guardar resultado final, fecha y duración
        $session->update([
            'ended_at' => $endedAt,
            'duration_seconds' => $durationSeconds,
            'score' => $request->score
        ]);

        return response()->json([
            'message' => 'Resultados guardados con éxito',
            'duration_seconds' => $durationSeconds,
            'score' => $session->score
        ], 200);
    });
});
