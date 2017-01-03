<?php

use Illuminate\Database\Seeder;

class WordsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('words')->insert([
            'word'          => 'pronunciation',
            'pronunciation' => 'prəˌnʌnsɪˈeɪʃ(ə)n',
            'type'          => 'noun - C/U',
            'meaning'       => 'the way in which a word is pronounced.',
            'example'       => "I haven't learned proper pronunciation of French words.",
        ]);
    }
}
