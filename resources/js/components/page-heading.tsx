import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface PageHeadingProps {
    children: ReactNode;
    className?: string;
}

export default function PageHeading({ children, className }: PageHeadingProps) {
    return (
        <h1 className={cn('mb-4 text-2xl font-bold text-text-dark dark:text-text-light', className)}>
            {children}
        </h1>
    );
}
