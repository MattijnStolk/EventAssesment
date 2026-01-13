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
        <div className="flex min-h-screen flex-col items-center justify-center bg-cream p-6 dark:bg-forest">
            <div className="w-full max-w-md">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-4">
                        <Link
                            href={home()}
                            className="text-2xl font-bold text-text-dark dark:text-cream"
                        >
                            Assessment App
                        </Link>
                        <div className="space-y-2 text-center">
                            <h1 className="text-2xl font-semibold text-text-dark dark:text-cream">
                                {title}
                            </h1>
                            {description && (
                                <p className="text-sm text-text-muted dark:text-cream/70">
                                    {description}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="rounded-lg border border-olive/20 bg-white p-8 shadow-sm dark:border-olive/30 dark:bg-forest/50">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
