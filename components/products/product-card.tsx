'use client';

import { cn } from '@/lib/css';

const ProductCard = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-lg bg-white shadow-lg',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
ProductCard.displayName = 'ProductCard';

const ProductCardImage = ({
  src,
  alt,
  className,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <img
      alt={alt}
      className={cn('h-full w-full object-cover', className)}
      src={src}
      {...props}
    />
  );
};
ProductCardImage.displayName = 'ProductCardImage';

const ProductCardTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3
      className={cn('text-foreground text-lg font-medium', className)}
      {...props}
    >
      {children}
    </h3>
  );
};
ProductCardTitle.displayName = 'ProductCardTitle';

const ProductCardPrice = ({
  className,
  currency,
  price,
  locale,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement> & {
  currency?: 'USD' | 'EUR';
  locale?: 'en-US' | 'de-DE';
  price: number;
}) => {
  return (
    <p
      className={cn('text-foreground text-xl font-medium', className)}
      {...props}
    >
      {Intl.NumberFormat(locale, {
        currency: currency,
        style: 'currency',
      }).format(price)}
    </p>
  );
};
ProductCardPrice.displayName = 'ProductCardPrice';

const ProductCardDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => {
  return (
    <p className={cn('mt-2 text-slate-500', className)} {...props}>
      {children}
    </p>
  );
};
ProductCardDescription.displayName = 'ProductCardDescription';

const ProductCardOutOfStock = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center bg-indigo-500',
        className,
      )}
      {...props}
    >
      <span className="text-2xl font-bold text-white">Sold Out</span>
    </div>
  );
};
ProductCardOutOfStock.displayName = 'ProductCardOutOfStock';

export {
  ProductCard,
  ProductCardDescription,
  ProductCardImage,
  ProductCardOutOfStock,
  ProductCardPrice,
  ProductCardTitle,
};
