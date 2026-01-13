import Button from '@/components/button';
import PageHeading from '@/components/page-heading';
import AppLayout from '@/layouts/app-layout';
import { logout } from '@/routes';
import { edit } from '@/routes/profile';
import { SharedData } from '@/types';
import { Head, router, usePage } from '@inertiajs/react';

export default function ProfileShow() {
    const { auth } = usePage<SharedData>().props;

    return (
        <AppLayout>
            <Head title="Profile" />
            <div className="flex flex-col gap-5 p-6">
                <PageHeading className="mb-0">Hi! {auth.user.name}</PageHeading>
                <p className="text-text-dark dark:text-cream/70">
                    Welcome to your profile. This is a barebones assessment app.
                </p>
                <div className="flex gap-2">
                <Button variant="primary" as="a" href={edit().url}>
                    Edit Profile
                </Button>
                    <Button
                        variant="danger"
                        onClick={() => router.post(logout().url)}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
}
