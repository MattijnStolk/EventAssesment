import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';

interface FormCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label: string;
    labelClassName?: string;
}

export default function FormCheckbox({
    label,
    id,
    className,
    labelClassName,
    ...props
}: FormCheckboxProps) {
    return (
        <div className="flex items-center space-x-3">
            <input
                id={id}
                type="checkbox"
                className={cn(
                    'h-4 w-4 rounded border-olive text-primary accent-primary',
                    className
                )}
                {...props}
            />
            <label
                htmlFor={id}
                className={cn(
                    'text-sm text-text-dark dark:text-cream',
                    labelClassName
                )}
            >
                {label}
            </label>
        </div>
    );
}
