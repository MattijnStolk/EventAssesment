<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    /**
     * Toggle the favorite status of an event for the authenticated user.
     */
    public function toggle(Request $request, Event $event): RedirectResponse
    {
        $user = $request->user();

        // Toggle returns an array with 'attached' and 'detached' keys
        $user->favoriteEvents()->toggle($event->id);

        return back();
    }
}
