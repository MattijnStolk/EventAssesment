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

        $events = Event::all()->map(function ($event) use ($favoriteIds) {
            $event->is_favorited = in_array($event->id, $favoriteIds);
            return $event;
        });

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
        $event->is_favorited = $user ? $user->favoriteEvents()->where('event_id', $event->id)->exists() : false;

        return Inertia::render('events/show', [
            'event' => $event,
        ]);
    }
}
