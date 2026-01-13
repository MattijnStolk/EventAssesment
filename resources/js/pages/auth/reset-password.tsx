import Button from '@/components/button';
import FormInput from '@/components/form-input';
import InputError from '@/components/input-error';
import AuthLayout from '@/layouts/auth-layout';
import { update } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';

interface ResetPasswordProps {
    token: string;
    email: string;
}

export default function ResetPassword({ token, email }: ResetPasswordProps) {
    return (
        <AuthLayout
            title="Reset password"
            description="Please enter your new password below"
        >
            <Head title="Reset password" />

            <Form
                method="POST"
                action={update.url()}
                transform={(data) => ({ ...data, token, email })}
                resetOnSuccess={['password', 'password_confirmation']}
            >
                {({ processing, errors }) => (
                    <div className="grid gap-6">
                        <div className="grid gap-2">
                            <label
                                htmlFor="email"
                                className="text-sm font-medium text-text-dark dark:text-cream"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                autoComplete="email"
                                value={email}
                                readOnly
                                className="mt-1 block w-full rounded-md border border-olive/30 bg-cream px-3 py-2 dark:border-olive/30 dark:bg-forest/50 dark:text-cream/60"
                            />
                            <InputError message={errors.email} />
                        </div>

                        <FormInput
                            id="password"
                            label="Password"
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            autoFocus
                            placeholder="Password"
                            error={errors.password}
                        />

                        <FormInput
                            id="password_confirmation"
                            label="Confirm password"
                            type="password"
                            name="password_confirmation"
                            autoComplete="new-password"
                            placeholder="Confirm password"
                            error={errors.password_confirmation}
                        />

                        <Button
                            type="submit"
                            className="mt-4 w-full"
                            disabled={processing}
                            data-test="reset-password-button"
                        >
                            {processing ? 'Resetting...' : 'Reset password'}
                        </Button>
                    </div>
                )}
            </Form>
        </AuthLayout>
    );
}
