import Button from '@/components/button';
import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-cream p-6 dark:bg-forest">
                <div className="w-full max-w-md text-center">
                    <h1 className="mb-4 text-4xl font-bold text-text-dark dark:text-cream">
                        Assessment App
                    </h1>
                    <p className="mb-8 text-text-dark dark:text-cream/70">
                        Welcome to the assessment application. This is a
                        barebones setup for your assessment.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        {auth.user ? (
                            <Button as="link" href={dashboard()} className="px-6 py-3">
                                Go to Dashboard
                            </Button>
                        ) : (
                            <>
                                <Button as="link" href={login()} className="px-6 py-3">
                                    Log in
                                </Button>
                                {canRegister && (
                                    <Button
                                        as="link"
                                        href={register()}
                                        variant="outline"
                                        className="px-6 py-3"
                                    >
                                        Register
                                    </Button>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
