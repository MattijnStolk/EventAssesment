<?php

namespace Database\Seeders;

use App\Models\Event;
use Illuminate\Database\Seeder;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Event::create([
            'title' => 'Amsterdam City Swim 2025',
            'subtitle' => 'Een dag vol energie, saamhorigheid en impact',
            'description' => 'Een dag vol energie, saamhorigheid en impact. Tijdens de Amsterdam City Swim 2025 sprongen duizenden zwemmers de Amsterdamse grachten in om aandacht te vragen én geld op te halen voor onderzoek naar ALS. En om een onvergetelijke dag te beleven, een dag die raakte. Hoe we dit hebben gedaan? Dat lees je in de case!',
            'start_date' => '2025-06-07 09:00:00',
            'end_date' => '2025-06-07 18:00:00',
            'location' => 'Amsterdamse grachten',
            'hero_image' => 'https://cdn.kentaa.nl/sites/5q2rvb3LjCES/flexplate/images/zbAiVXESgkYy/width_2000_e034d058193f114dcc5b9fdbc7cb931667b9097b.webp',
        ]);

        Event::create([
            'title' => 'DPG Media, Opening Mediavaert',
            'subtitle' => 'Opening Mediavaert',
            'description' => 'Hoe open je het grootste mediamerkenhuis van Nederland op een manier die past bij zijn bewoners? Met een projection mapping show die niet alleen het pand, maar ook de trots van 2.000 mediamakers laat schitteren. Van typemachine tot toekomstvisie — wij brachten DPG’s verhaal tot leven op een 20 meter hoge spiraaltrap, live ingeleid door niemand minder dan koning Willem-Alexander.',
            'start_date' => '2026-07-10 12:00:00',
            'end_date' => '2026-07-12 23:00:00',
            'location' => 'Amsterdam',
            'hero_image' => 'https://images.ctfassets.net/765y2hpj99ul/6n233HGKKsIgKyu8V2tyIx/ace65fe7ac149d7e99d2c2c73399ffa4/2024_04_18_Z8N4160.jpg?w=1080&q=75&fm=webp',
        ]);

        Event::create([
            'title' => 'Google Cloud Summit 2024',
            'subtitle' => 'Cloud Innovation Made Personal',
            'description' => 'Hoe profileer je een techgigant als dé strategische partner van de toekomst? Door een ijzersterk format te combineren met interactieve storytelling en slimme technologie. Tijdens de Google Cloud Summit ’24 in Theater Amsterdam lieten wij zien hoe je cloud-innovatie tastbaar én persoonlijk maakt voor duizenden bezoekers. Het resultaat? Een summit waar beleving, interactie en impact naadloos samensmolten.',
            'start_date' => '2024-11-12 09:00:00',
            'end_date' => '2024-11-12 18:00:00',
            'location' => 'Theater Amsterdam',
            'hero_image' => 'https://www.gstatic.com/cgc/events/next_banner_26_1280x320.png',
        ]);
    }
}
