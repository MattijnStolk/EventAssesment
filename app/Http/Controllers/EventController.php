<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request): Response
    {
        $user = $request->user();
        $favoriteIds = $user ? $user->favoriteEvents()->pluck('events.id')->toArray() : [];

        // Only return fields needed for the event cards, as per intertia docs
        $events = Event::all()->map(fn (Event $event) => [
            'id' => $event->id,
            'title' => $event->title,
            'slug' => $event->slug,
            'subtitle' => $event->subtitle,
            'start_date' => $event->start_date,
            'location' => $event->location,
            'hero_image_url' => $event->hero_image_url,
            'is_favorited' => in_array($event->id, $favoriteIds),
        ]);

        return Inertia::render('events/index', [
            'events' => $events,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, Event $event): Response
    {
        $user = $request->user();

        // Only return fields needed for the event detail page, as per intertia docs
        return Inertia::render('events/show', [
            'event' => [
                'title' => $event->title,
                'slug' => $event->slug,
                'subtitle' => $event->subtitle,
                'description' => $event->description,
                'start_date' => $event->start_date,
                'end_date' => $event->end_date,
                'location' => $event->location,
                'hero_image_url' => $event->hero_image_url,
                'is_favorited' => $user ? $user->favoriteEvents()->where('event_id', $event->id)->exists() : false,
            ],
        ]);
    }
}
