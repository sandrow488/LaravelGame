<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('setup:admin', function () {
    $user = User::firstOrCreate(
        ['email' => 'admin@admin.com'],
        ['name' => 'Admin DAW', 'password' => bcrypt('password')]
    );
    
    $role = Role::firstOrCreate(['name' => 'administrador']);
    
    $user->roles()->syncWithoutDetaching([$role->id]);
    
    $this->info("Usuario admin@admin.com creado y rol 'administrador' asignado.");
})->purpose('Crea el usuario administrador para pruebas');
