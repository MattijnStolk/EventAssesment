import { cn } from '@/lib/utils';

interface StatusMessageProps {
    message?: string;
    variant?: 'success' | 'error' | 'info';
    className?: string;
}

const variantStyles = {
    success: 'bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-200',
    error: 'bg-red-50 text-red-800 dark:bg-red-900/20 dark:text-red-200',
    info: 'bg-blue-50 text-blue-800 dark:bg-blue-900/20 dark:text-blue-200',
};

export default function StatusMessage({ message, variant = 'success', className }: StatusMessageProps) {
    if (!message) return null;

    return (
        <div
            className={cn(
                'mb-4 rounded-md p-3 text-center text-sm font-medium',
                variantStyles[variant],
                className
            )}
        >
            {message}
        </div>
    );
}
