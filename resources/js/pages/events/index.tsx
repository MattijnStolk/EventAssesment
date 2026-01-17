import EventCard from '@/components/eventCard';
import PageHeading from '@/components/page-heading';
import AppLayout from '@/layouts/app-layout';
import { type Event } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
    events: Event[];
}

export default function EventsIndex({ events }: Props) {
    return (
        <AppLayout>
            <Head title="Events" />

            <div className="min-h-screen bg-bg-light p-6 dark:bg-bg-dark">
                <div className="mx-auto">
                    <PageHeading>Events</PageHeading>

                    {events.length === 0 ? (
                        <p className="text-center text-text-muted dark:text-text-light/70">
                            No events found.
                        </p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {events.map((event) => (
                                <EventCard
                                    key={event.id}
                                    title={event.title}
                                    subtitle={event.subtitle}
                                    start_date={event.start_date}
                                    location={event.location}
                                    hero_image_url={event.hero_image_url}
                                    is_favorited={event.is_favorited}
                                    slug={event.slug}
                                    showFavorite={true}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
