import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome" />
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-6 dark:bg-gray-900">
                <div className="w-full max-w-md text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
                        Assessment App
                    </h1>
                    <p className="mb-8 text-gray-600 dark:text-gray-400">
                        Welcome to the assessment application. This is a
                        barebones setup for your assessment.
                    </p>
                    <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="custom-button rounded-md px-6 py-3 font-medium text-white"
                            >
                                Go to Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="custom-button rounded-md px-6 py-3 font-medium text-white"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                                    >
                                        Register
                                    </Link>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
