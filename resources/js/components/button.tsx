import { cn } from '@/lib/utils';
import { Link, type InertiaLinkProps } from '@inertiajs/react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';

const variantStyles: Record<Variant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-secondary text-white hover:bg-secondary-hover',
    outline: 'border border-secondary/30 bg-bg-light text-text-dark hover:bg-secondary/10 dark:border-secondary/30 dark:bg-bg-dark/50 dark:text-text-light/70 dark:hover:bg-secondary/20',
    ghost: 'bg-secondary/10 text-text-muted hover:bg-secondary/20 dark:bg-secondary/20 dark:text-text-light/70 dark:hover:bg-secondary/30 active:scale-95',
    danger: 'bg-danger text-white hover:bg-danger-hover',
};

const baseStyles =
    'inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    as?: 'button';
};

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant;
    as: 'a';
};

type LinkProps = Omit<InertiaLinkProps, 'className'> & {
    variant?: Variant;
    as: 'link';
    className?: string;
};

type Props = ButtonProps | AnchorProps | LinkProps;

export default function Button({
    variant = 'primary',
    className,
    as,
    ...props
}: Props) {
    const combinedClassName = cn(baseStyles, variantStyles[variant], className);

    if (as === 'a') {
        return <a className={combinedClassName} {...props as AnchorHTMLAttributes<HTMLAnchorElement>} />;
    }

    if (as === 'link') {
        return <Link className={combinedClassName} {...props as Omit<InertiaLinkProps, 'className'>} />;
    }

    return <button className={combinedClassName} {...props as ButtonHTMLAttributes<HTMLButtonElement>} />;
}
