import Button from '@/components/button';
import FormInput from '@/components/form-input';
import StatusMessage from '@/components/status-message';
import AuthLayout from '@/layouts/auth-layout';
import { login } from '@/routes';
import { email } from '@/routes/password';
import { Form, Head, Link } from '@inertiajs/react';

export default function ForgotPassword({ status }: { status?: string }) {
    return (
        <AuthLayout
            title="Forgot password"
            description="Enter your email to receive a password reset link"
        >
            <Head title="Forgot password" />

            <StatusMessage message={status} />

            <div className="space-y-6">
                <Form method="POST" action={email.url()}>
                    {({ processing, errors }) => (
                        <>
                            <FormInput
                                id="email"
                                label="Email address"
                                type="email"
                                name="email"
                                autoComplete="off"
                                autoFocus
                                placeholder="email@example.com"
                                error={errors.email}
                            />

                            <div className="my-6">
                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={processing}
                                    data-test="email-password-reset-link-button"
                                >
                                    {processing
                                        ? 'Sending...'
                                        : 'Email password reset link'}
                                </Button>
                            </div>
                        </>
                    )}
                </Form>

                <div className="space-x-1 text-center text-sm text-text-muted dark:text-cream/70">
                    <span>Or, return to</span>
                    <Link
                        href={login()}
                        className="text-primary hover:text-primary-hover dark:text-accent"
                    >
                        log in
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
}
