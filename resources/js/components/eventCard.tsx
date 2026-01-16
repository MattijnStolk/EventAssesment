import { StarIcon } from '@/components/star';
import { cn, formatDate } from '@/lib/utils';
import { show } from '@/routes/events';
import { Link, router } from '@inertiajs/react';
import { MouseEvent, useState } from 'react';

interface EventCardProps {
    title: string;
    subtitle?: string | null;
    slug?: string;
    href?: string;
    start_date?: string;
    location?: string | null;
    hero_image?: string | null;
    is_favorited?: boolean;
    showFavorite?: boolean;
}

export default function EventCard({
    title,
    subtitle,
    start_date,
    location,
    hero_image,
    is_favorited,
    slug,
    href,
    showFavorite = true,
}: EventCardProps) {
    const [isFavorited, setIsFavorited] = useState(is_favorited ?? false);
    const [isLoading, setIsLoading] = useState(false);

    const handleFavoriteClick = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        if (isLoading || !slug) return;

        setIsLoading(true);
        // Optimistic update
        setIsFavorited(!isFavorited);

        router.post(
            `/events/${slug}/favorite`,
            {},
            {
                preserveScroll: true,
                preserveState: true,
                onSuccess: () => {
                    setIsLoading(false);
                },
                onError: () => {
                    // Revert on error
                    setIsFavorited(isFavorited);
                    setIsLoading(false);
                },
            },
        );
    };

    return (
        <Link
            href={href ?? (slug ? show({ event: slug }) : '#')}
            className="group relative overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-lg dark:bg-secondary/35"
        >
            {showFavorite && (
                <button
                    type="button"
                    onClick={handleFavoriteClick}
                    className={cn(
                        'absolute top-3 right-3 z-10 rounded-full bg-white/80 p-2 transition-opacity dark:bg-bg-dark/80',
                        isFavorited
                            ? 'opacity-100'
                            : 'opacity-0 group-hover:opacity-100',
                    )}
                    aria-label={
                        isFavorited
                            ? 'Remove from favorites'
                            : 'Add to favorites'
                    }
                >
                    <StarIcon
                        filled={isFavorited}
                        className={cn(
                            'transition-colors',
                            isFavorited
                                ? 'text-accent'
                                : 'text-text-muted hover:text-accent',
                        )}
                    />
                </button>
            )}

            <div className="h-48 overflow-hidden">
                {hero_image ? (
                    <img
                        src={hero_image}
                        alt={title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                    />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/20 via-accent/20 to-primary/20 transition group-hover:scale-105 dark:from-secondary/40 dark:via-bg-dark/60 dark:to-secondary/40">
                        <span className="text-4xl text-secondary/40 dark:text-text-light/30">→</span>
                    </div>
                )}
            </div>
            <div className="p-5">
                <h2 className="text-lg font-semibold text-text-dark dark:text-text-light">
                    {title}
                </h2>
                {subtitle && (
                    <p className="mt-1 text-sm text-text-muted dark:text-text-light/70">
                        {subtitle}
                    </p>
                )}
                <div className="mt-3 flex items-center gap-2 text-xs text-text-muted dark:text-text-light/60">
                    {start_date && (
                        <span>{formatDate(start_date)}</span>
                    )}
                    {location && (
                        <>
                            <span>•</span>
                            <span>{location}</span>
                        </>
                    )}
                </div>
            </div>
        </Link>
    );
}
