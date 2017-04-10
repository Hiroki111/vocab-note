<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Word extends Model
{
    protected $table = 'words';
    use SoftDeletes;

    protected $fillable = [
        'word', 'pronunciation', 'type', 'meaning', 'example',
    ];
    protected $dates = ['deleted_at'];
}
