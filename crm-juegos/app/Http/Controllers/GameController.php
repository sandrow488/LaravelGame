<?php

namespace App\Http\Controllers;

use App\Models\Game;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    // Mostrar todos los juegos
    public function index()
    {
        // Traemos todos los juegos para el CRM, ordenados por los últimos creados
        // Incluimos al usuario que lo creó
        $games = Game::with('user:id,name')->latest()->get();
        return Inertia::render('Games/Index', [
            'games' => $games
        ]);
    }

    // Mostrar el formulario para crear un juego
    public function create()
    {
        return Inertia::render('Games/Create');
    }

    // Guardar el juego en la BD
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'url_path' => 'required|string|max:255',
            'is_published' => 'boolean',
        ]);

        // Asignar el juego al usuario autenticado (quien lo está creando)
        $validated['user_id'] = $request->user()->id;

        Game::create($validated);

        return redirect()->route('games.index')->with('success', 'Juego creado correctamente.');
    }

    // Mostrar el formulario para editar un juego
    public function edit(Game $game)
    {
        return Inertia::render('Games/Edit', [
            'game' => $game
        ]);
    }

    // Actualizar el juego en la BD
    public function update(Request $request, Game $game)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'url_path' => 'required|string|max:255',
            'is_published' => 'boolean',
        ]);

        $game->update($validated);

        return redirect()->route('games.index')->with('success', 'Juego actualizado correctamente.');
    }

    // Eliminar el juego (opcional, aunque el alumno pidió Publicar/Despublicar, 
    // pero siempre va bien tener un destroy o togglePublish)
    public function destroy(Game $game)
    {
        $game->delete();
        return redirect()->route('games.index')->with('success', 'Juego eliminado correctamente.');
    }

    // Metodo extra para facilitar Publicar / Despublicar
    public function togglePublish(Game $game)
    {
        $game->is_published = !$game->is_published;
        $game->save();
        
        $estado = $game->is_published ? 'publicado' : 'oculto';
        return redirect()->route('games.index')->with('success', "El juego ahora está $estado.");
    }
}
