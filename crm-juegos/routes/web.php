<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/dashboard', function () {
    $games = \App\Models\Game::where('is_published', true)->orderBy('created_at', 'desc')->get();
    return Inertia::render('Dashboard', [
        'games' => $games
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/play/{game}', function (\App\Models\Game $game) {
    $userRoles = auth()->user()->roles->pluck('name')->toArray();
    $canPreview = in_array('administrador', $userRoles) || in_array('gestor', $userRoles);
    
    // Si no está publicado y el usuario no tiene permisos de gestor/admin, bloqueamos el acceso
    if (!$game->is_published && !$canPreview) {
        abort(403, 'No tienes permiso para ver este juego porque no está publicado.');
    }

    return Inertia::render('Games/Play', [
        'game' => $game
    ]);
})->middleware(['auth'])->name('games.play');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

use App\Http\Controllers\GameController;

Route::middleware(['auth', 'role:administrador,gestor'])->group(function () {
    Route::resource('games', GameController::class)->except(['show']);
    Route::put('/games/{game}/toggle', [GameController::class, 'togglePublish'])->name('games.toggle');
});

require __DIR__.'/auth.php';
