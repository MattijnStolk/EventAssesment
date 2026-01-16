import Button from '@/components/button';
import FormCheckbox from '@/components/form-checkbox';
import FormInput from '@/components/form-input';
import StatusMessage from '@/components/status-message';
import AuthLayout from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head, Link } from '@inertiajs/react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
    canRegister: boolean;
}

export default function Login({
    status,
    canResetPassword,
    canRegister,
}: LoginProps) {
    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        >
            <Head title="Log in" />

            <StatusMessage message={status} />

            <Form
                method="POST"
                action={store.url()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <FormInput
                                id="email"
                                label="Email address"
                                type="email"
                                name="email"
                                required
                                autoFocus
                                tabIndex={1}
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
                                tabIndex={2}
                                autoComplete="current-password"
                                placeholder="Password"
                                error={errors.password}
                                labelExtra={
                                    canResetPassword && (
                                        <Link
                                            href={request()}
                                            className="text-sm text-primary hover:text-primary-hover dark:text-accent"
                                            tabIndex={5}
                                        >
                                            Forgot password?
                                        </Link>
                                    )
                                }
                            />

                            <FormCheckbox
                                id="remember"
                                name="remember"
                                label="Remember me"
                                tabIndex={3}
                            />

                            <Button
                                type="submit"
                                className="mt-4 w-full"
                                tabIndex={4}
                                disabled={processing}
                                data-test="login-button"
                            >
                                {processing ? 'Logging in...' : 'Log in'}
                            </Button>
                        </div>

                        {canRegister && (
                            <div className="text-center text-sm text-text-muted dark:text-text-light/70">
                                Don't have an account?{' '}
                                <Link
                                    href={register()}
                                    className="text-primary hover:text-primary-hover dark:text-accent"
                                    tabIndex={5}
                                >
                                    Sign up
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
