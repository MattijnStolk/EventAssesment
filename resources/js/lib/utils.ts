import { InertiaLinkProps } from '@inertiajs/react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function isSameUrl(
    url1: NonNullable<InertiaLinkProps['href']>,
    url2: NonNullable<InertiaLinkProps['href']>,
) {
    return resolveUrl(url1) === resolveUrl(url2);
}

export function resolveUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function formatDate(date: string, format: 'short' | 'long' = 'short'): string {
    return new Date(date).toLocaleDateString('nl-NL', 
        format === 'short' 
            ? { year: 'numeric', month: 'short', day: 'numeric' }
            : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    );
}
