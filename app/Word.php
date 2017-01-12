<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Word extends Model
{
    protected $table = 'words';

    protected $fillable = [
        'word', 'pronunciation', 'type', 'meaning', 'example',
    ];
}