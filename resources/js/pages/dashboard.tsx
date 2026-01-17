import EventCard from '@/components/eventCard';
import PageHeading from '@/components/page-heading';
import AppLayout from '@/layouts/app-layout';
import { index as eventsIndex } from '@/routes/events';
import { type Event } from '@/types';
import { Head } from '@inertiajs/react';

interface Props {
    favoriteEvents: Event[];
}

export default function Dashboard({ favoriteEvents }: Props) {
    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="p-6">
                <PageHeading>Your Favorite Events</PageHeading>

                {favoriteEvents.length === 0 && (
                    <p className="mt-4 text-text-muted dark:text-text-light/60">
                        You haven't favorited any events yet. Browse events to
                        add some!
                    </p>
                )}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {favoriteEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            title={event.title}
                            subtitle={event.subtitle}
                            start_date={event.start_date}
                            location={event.location}
                            hero_image_url={event.hero_image_url}
                            is_favorited={true}
                            slug={event.slug}
                            showFavorite={true}
                        />
                    ))}

                    <EventCard
                        title="Show All Events"
                        subtitle="Browse all available events"
                        href={eventsIndex.url()}
                        showFavorite={false}
                    />
                </div>
            </div>
        </AppLayout>
    );
}
