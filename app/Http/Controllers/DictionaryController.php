<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;

class DictionaryController extends Controller
{

    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    public function searchWord($word)
    {
        if (!$word) {
            return [];
        }

        $client  = new Client();
        $headers = [
            'app_id'       => env('OXFORD_APP_ID'),
            'app_key'      => env('OXFORD_APP_KEY'),
            'Content-Type' => "application/json",
        ];

        $result = $client->request('GET', env('OXFORD_API_BASE_URI') . '/entries/en/' . $word, $headers);

        return $result['results'];
    }

}
