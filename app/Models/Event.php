<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class Event extends Model
{
    /** @use HasFactory<\Database\Factories\EventFactory> */
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'subtitle',
        'description',
        'start_date',
        'end_date',
        'location',
        'hero_image',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
    ];

    protected $appends = ['hero_image_url'];

    /**
     * Append the full event image url to the model.
     */
    public function getHeroImageUrlAttribute(): ?string
    {
        if (empty($this->hero_image)) {
            return null;
        }

        return Storage::disk('public')->url($this->hero_image);
    }

    /**
     * Boot the model and auto-generate slug from title.
     */
    protected static function boot(): void
    {
        parent::boot();

        static::creating(function (Event $event) {
            if (empty($event->slug)) {
                $event->slug = Str::slug($event->title);
            }
        });
    }

    /**
     * Use slug for route model binding instead of id.
     */
    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    /**
     * The users who have favorited this event.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<User, $this>
     */
    public function favoritedBy(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(User::class)->withTimestamps();
    }
}
