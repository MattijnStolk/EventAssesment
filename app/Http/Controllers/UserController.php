<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    public function show(Request $request): Response
    {
        return Inertia::render('profile/show', [
            'user' => $request->user(),
        ]);
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('profile/edit', [
            'user' => $request->user(),
        ]);
    }

    public function update(UpdateProfileRequest $request): RedirectResponse
    {
        $request->user()->update($request->validated());

        return redirect()->route('profile.show');
    }
}
