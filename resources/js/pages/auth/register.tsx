import Button from '@/components/button';
import FormInput from '@/components/form-input';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head, Link } from '@inertiajs/react';

export default function Register() {
    return (
        <AuthLayout
            title="Create an account"
            description="Enter your details below to create your account"
        >
            <Head title="Register" />
            <Form
                method="POST"
                action={store.url()}
                resetOnSuccess={['password', 'password_confirmation']}
                disableWhileProcessing
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <FormInput
                                id="name"
                                label="Name"
                                type="text"
                                name="name"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                placeholder="Full name"
                                error={errors.name}
                            />

                            <FormInput
                                id="email"
                                label="Email address"
                                type="email"
                                name="email"
                                required
                                tabIndex={2}
                                autoComplete="email"
                                placeholder="email@example.com"
                                error={errors.email}
                            />

                            <FormInput
                                id="password"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                tabIndex={3}
                                autoComplete="new-password"
                                placeholder="Password"
                                error={errors.password}
                            />

                            <FormInput
                                id="password_confirmation"
                                label="Confirm password"
                                type="password"
                                name="password_confirmation"
                                required
                                tabIndex={4}
                                autoComplete="new-password"
                                placeholder="Confirm password"
                                error={errors.password_confirmation}
                            />

                            <Button
                                type="submit"
                                className="mt-2 w-full"
                                tabIndex={5}
                                disabled={processing}
                                data-test="register-user-button"
                            >
                                {processing ? 'Creating account...' : 'Create account'}
                            </Button>
                        </div>

                        <div className="text-center text-sm text-text-muted dark:text-text-light/70">
                            Already have an account?{' '}
                            <Link
                                href={login()}
                                className="text-primary hover:text-primary-hover dark:text-accent"
                                tabIndex={6}
                            >
                                Log in
                            </Link>
                        </div>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
