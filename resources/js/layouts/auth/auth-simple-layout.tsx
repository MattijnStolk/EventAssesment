import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

interface AuthLayoutProps {
    name?: string;
    title?: string;
    description?: string;
}

export default function AuthSimpleLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg-light p-6 dark:bg-bg-dark">
            <div className="w-full max-w-md">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="text-2xl font-bold text-text-dark dark:text-text-light"
                        >
                            Assessment App
                        </Link>
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-semibold text-text-dark dark:text-text-light">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-sm text-text-muted dark:text-text-light/70">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="rounded-lg border border-secondary/20 bg-white p-8 shadow-sm dark:border-secondary/30 dark:bg-bg-dark/50">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
