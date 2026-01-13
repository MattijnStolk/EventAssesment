import Button from '@/components/button';
import EventHeroImage from '@/components/eventHeroImage';
import AppLayout from '@/layouts/app-layout';
import { formatDate } from '@/lib/utils';
import { type Event } from '@/types';
import { Head, Link } from '@inertiajs/react';

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
    return (
        <AppLayout>
            <Head title={event.title} />

            <div className="min-h-screen bg-cream dark:bg-forest">
                {/* Hero */}
                {event.hero_image && (
                        <EventHeroImage hero_image={event.hero_image} title={event.title} />
                )}

                {/* Content */}
                <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
                    <div>
                        <Link
                            href="/events"
                            className="mb-6 inline-flex items-center text-sm text-text-muted hover:text-text-dark dark:text-cream/70 dark:hover:text-cream"
                        >
                            ← Back to events
                        </Link>

                        <h1 className="text-4xl font-bold text-text-dark dark:text-cream">
                            {event.title}
                        </h1>

                        {event.subtitle && (
                            <p className="mt-2 text-xl text-text-muted dark:text-cream/70">
                                {event.subtitle}
                            </p>
                        )}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-4 text-sm text-text-muted dark:text-cream/70">
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
                            <p className="whitespace-pre-line text-text-dark dark:text-cream/90">
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
