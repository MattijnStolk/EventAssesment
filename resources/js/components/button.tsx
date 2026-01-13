import { cn } from '@/lib/utils';
import { Link, type InertiaLinkProps } from '@inertiajs/react';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'danger';

const variantStyles: Record<Variant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-hover',
    secondary: 'bg-secondary text-white hover:bg-secondary-hover',
    outline: 'border border-olive/30 bg-cream text-text-dark hover:bg-olive/10 dark:border-olive/30 dark:bg-forest/50 dark:text-cream/70 dark:hover:bg-olive/20',
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
