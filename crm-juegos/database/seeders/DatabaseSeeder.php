<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Crear Roles
        $adminRole = Role::firstOrCreate(['name' => 'administrador']);
        $gestorRole = Role::firstOrCreate(['name' => 'gestor']);
        $jugadorRole = Role::firstOrCreate(['name' => 'jugador']);

        // 2. Crear Usuarios de prueba
        $admin = User::firstOrCreate(
            ['email' => 'admin@admin.com'],
            ['name' => 'Admin User', 'password' => Hash::make('password')]
        );
        $admin->roles()->syncWithoutDetaching([$adminRole->id]);

        $gestor = User::firstOrCreate(
            ['email' => 'gestor@gestor.com'],
            ['name' => 'Gestor User', 'password' => Hash::make('password')]
        );
        $gestor->roles()->syncWithoutDetaching([$gestorRole->id]);

        $jugador = User::firstOrCreate(
            ['email' => 'jugador@jugador.com'],
            ['name' => 'Jugador User', 'password' => Hash::make('password')]
        );
        $jugador->roles()->syncWithoutDetaching([$jugadorRole->id]);

        // 3. Crear Juegos de ejemplo (Apuntando todos al mismo build de Juego3D)
        $gamePath = '/juegos/base/index.html';

        $games = [
            ['title' => 'Aventura Galáctica 3D', 'description' => 'Explora el espacio en este simulador envolvente.', 'is_published' => true],
            ['title' => 'Carrera Espacial V2', 'description' => 'Compite contra otros en la carrera espacial definitiva.', 'is_published' => true],
            ['title' => 'Misterio de los Planetas', 'description' => 'Resuelve puzzles en un entorno 3D.', 'is_published' => true],
            ['title' => 'Galactic Shooter', 'description' => 'Un shooter arcade para probar tus reflejos.', 'is_published' => false],
            ['title' => 'Viaje Estelar HD', 'description' => 'Una experiencia cinemática por las estrellas.', 'is_published' => true],
        ];

        foreach ($games as $gameData) {
            Game::firstOrCreate(
                ['title' => $gameData['title']],
                [
                    'description' => $gameData['description'],
                    'is_published' => $gameData['is_published'],
                    'url_path' => $gamePath,
                    'user_id' => $admin->id
                ]
            );
        }
        
        $this->command->info('Roles, Usuarios y Juegos (simulados) han sido creados correctamente.');
    }
}
