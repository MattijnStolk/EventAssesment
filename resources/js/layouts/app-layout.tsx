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
        <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
            <nav className="border-b border-secondary/20 bg-bg-light drop-shadow-md dark:border-secondary/30 dark:bg-bg-dark">
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center">
                            <Link
                                href={dashboard.url()}
                                className="text-2xl font-semibold text-text-dark dark:text-text-light"
                            >
                                Dashboard
                            </Link>
                        </div>
                        {auth.user && (
                            <div className="flex items-center gap-4">
                                <Link href={eventsIndex.url()}>
                                    <span className="text-sm text-text-muted hover:text-primary dark:text-text-light/80 dark:hover:text-accent transition-colors duration-200">
                                        Events
                                    </span>
                                </Link>
                                <Link href={profileShow.url()}>
                                    <span className="text-sm text-text-muted hover:text-primary dark:text-text-light/80 dark:hover:text-accent transition-colors duration-200">
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
