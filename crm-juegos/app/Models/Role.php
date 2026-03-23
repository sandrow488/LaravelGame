<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = ['name'];

    // Relación inversa: Un rol lo tienen muchos usuarios
    public function users()
    {
        return $this->belongsToMany(User::class);
    }
}
