import { dashboard } from '@/routes';
import { index as eventsIndex } from '@/routes/events';
import { show as profileShow } from '@/routes/profile';
import { type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { type ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const { auth } = usePage<SharedData>().props;

    return (
        <div className="min-h-screen bg-cream dark:bg-forest">
            <nav className="border-b border-olive/20 bg-cream drop-shadow-md dark:border-olive/30 dark:bg-forest">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                href={dashboard.url()}
                                className="text-xl font-semibold text-text-dark dark:text-cream"
                            >
                                Assessment App
                            </Link>
                        </div>
                        {auth.user && (
                            <div className="flex items-center gap-4">
                                <Link href={eventsIndex.url()}>
                                    <span className="text-sm text-text-muted dark:text-cream/80 hover:text-primary dark:hover:text-accent transition-colors duration-200">
                                        Events
                                    </span>
                                </Link>
                                <Link href={profileShow.url()}>
                                    <span className="text-sm text-text-muted dark:text-cream/80 hover:text-primary dark:hover:text-accent transition-colors duration-200">
                                        Profile
                                    </span>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <main className="mx-auto max-w-7xl">{children}</main>
        </div>
    );
}
