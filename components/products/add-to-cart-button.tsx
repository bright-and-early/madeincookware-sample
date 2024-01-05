'use client';

import { toast } from 'sonner';
import { cn } from '@/lib/css';

const AddToCartButton = ({
  className,
  productId,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  productId: string;
}) => {
  return (
    <button
      className={cn(
        'rounded-md bg-orange-500 py-2 text-lg text-white shadow-md shadow-orange-100 transition-colors hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/40 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:bg-orange-700',
        className,
      )}
      onClick={() => {
        toast.success(`${productId} was added to your cart`);
      }}
      {...props}
    />
  );
};
AddToCartButton.displayName = 'AddToCartButton';

export { AddToCartButton };
