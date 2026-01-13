import Button from '@/components/button';
import FormInput from '@/components/form-input';
import PageHeading from '@/components/page-heading';
import AppLayout from '@/layouts/app-layout';
import { show } from '@/routes/profile';
import { Form, Head, Link } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    user: User;
}

export default function ProfileEdit({ user }: Props) {
    return (
        <AppLayout>
            <Head title="Edit Profile" />

            <div className="max-w-2xl p-6">
                <PageHeading>Edit Profile</PageHeading>

                <Form
                    method="PUT"
                    action="/profile"
                    className="mt-6 space-y-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <FormInput
                                id="name"
                                label="Name"
                                type="text"
                                name="name"
                                defaultValue={user.name}
                                required
                                autoFocus
                                error={errors.name}
                            />

                            <FormInput
                                id="email"
                                label="Email address"
                                type="email"
                                name="email"
                                defaultValue={user.email}
                                required
                                error={errors.email}
                            />

                            <div className="flex items-center gap-4">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Saving...' : 'Save Changes'}
                                </Button>

                                <Link
                                    href={show.url()}
                                    className="text-sm text-text-muted hover:text-text-dark dark:text-cream/70 dark:hover:text-cream"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </>
                    )}
                </Form>
            </div>
        </AppLayout>
    );
}
