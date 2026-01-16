import { cn } from '@/lib/utils';
import { InputHTMLAttributes, ReactNode } from 'react';
import InputError from './input-error';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
    labelClassName?: string;
    labelExtra?: ReactNode;
}

export default function FormInput({
    label,
    error,
    id,
    className,
    labelClassName,
    labelExtra,
    ...props
}: FormInputProps) {
    return (
        <div className="grid gap-2">
            <div className="flex items-center justify-between">
                <label
                    htmlFor={id}
                    className={cn(
                        'text-sm font-medium text-text-dark dark:text-text-light',
                        labelClassName
                    )}
                >
                    {label}
                </label>
                {labelExtra}
            </div>
            <input
                id={id}
                className={cn(
                    'rounded-md border px-3 py-2 border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none dark:border-secondary/30 dark:bg-bg-dark dark:text-text-light',
                    className
                )}
                {...props}
            />
            <InputError message={error} />
        </div>
    );
}
