import Button from '@/components/button';
import EventHeroImage from '@/components/eventHeroImage';
import { StarIcon } from '@/components/star';
import AppLayout from '@/layouts/app-layout';
import { cn, formatDate } from '@/lib/utils';
import { type Event } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

function formatGoogleCalendarDate(dateString: string): string {
    const date = new Date(dateString);
    return date
        .toISOString()
        .replace(/[-:]/g, '')
        .replace(/\.\d{3}/, '');
}

interface Props {
    event: Event;
}

export default function EventShow({ event }: Props) {
    const [isFavorited, setIsFavorited] = useState(event.is_favorited ?? false);

    const handleFavoriteClick = () => {
        setIsFavorited(!isFavorited);
        
        router.post(
            `/events/${event.slug}/favorite`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onError: () => {
                    setIsFavorited(isFavorited);
                },
            },
        );
    };

    return (
        <AppLayout>
            <Head title={event.title} />

            <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
                {/* Hero */}
                {event.hero_image_url && (
                        <EventHeroImage hero_image_url={event.hero_image_url} title={event.title} />
                )}

                {/* Content */}
                <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    <div>
                        <Link
                            href="/events"
                            className="mb-6 inline-flex items-center text-sm text-text-muted hover:text-text-dark dark:text-text-light/70 dark:hover:text-text-light"
                        >
                            ← Back to events
                        </Link>

                        <div className="flex items-start justify-between gap-4">
                            <h1 className="text-4xl font-bold text-text-dark dark:text-text-light">
                                {event.title}
                            </h1>

                            <Button
                                variant="ghost"
                                onClick={handleFavoriteClick}
                                className={cn(
                                    'shrink-0 rounded-full',
                                    isFavorited && 'bg-accent/20 text-accent hover:bg-accent/30 dark:bg-accent/30 dark:hover:bg-accent/40',
                                )}
                                aria-label={isFavorited ? 'Verwijderen uit favorieten' : 'Toevoegen aan favorieten'}
                            >
                                <StarIcon
                                    filled={isFavorited}
                                    className={cn(
                                        'h-5 w-5 transition-colors',
                                        isFavorited ? 'text-accent' : 'text-current',
                                    )}
                                />
                                <span className="hidden sm:inline">
                                    Favoriet
                                </span>
                            </Button>
                        </div>

                        {event.subtitle && (
                            <p className="mt-2 text-xl text-text-muted dark:text-text-light/70">
                                {event.subtitle}
                            </p>
                        )}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted dark:text-text-light/70">
                        {event.location && (
                            <>
                                <div className="flex items-center gap-1">
                                    <span>{event.location}</span>
                                </div>
                                <span>•</span>
                            </>
                        )}
                        <div className="flex items-center gap-1">
                            <span>
                                {event.start_date && formatDate(event.start_date, 'long')}
                            </span>
                        </div>
                    </div>

                    {event.description && (
                        <div className="prose prose-lg dark:prose-invert mt-8 max-w-none">
                            <p className="whitespace-pre-line text-text-dark dark:text-text-light/90">
                                {event.description}
                            </p>
                        </div>
                    )}

                    <div className="mt-10">
                        <Button
                            variant="primary"
                            as="a"
                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${formatGoogleCalendarDate(event.start_date || '')}/${formatGoogleCalendarDate(event.end_date || event.start_date || '')}&location=${encodeURIComponent(event.location || '')}&details=${encodeURIComponent(event.description || '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Toevoegen aan Google Calendar
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
