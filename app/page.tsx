import { Product } from '@/types/product';
import {
  ProductCard,
  ProductCardDescription,
  ProductCardImage,
  ProductCardPrice,
  ProductCardTitle,
} from '../components/products/product-card';
import { AddToCartButton } from '../components/products/add-to-cart-button';

const products: Array<Product> = [
  {
    description: 'Subset hm inasmuch whether geez.',
    id: 'be0dce8',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Knife_Chef_8in_HarborBlue_1x1_Hero_640x640.jpg',
    isSoldOut: false,
    price: 62,
    title: 'Rustic Rubber Bike',
  },
  {
    description: 'Nor disestablish attain instead vivaciously.',
    id: 'eeaa732',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/files/CookingUtensils-2913_1_1_640x640.jpg',
    isSoldOut: false,
    price: 772,
    title: 'Gorgeous Frozen Chair',
  },
  {
    description: 'Lunch prop theft suspiciously yippee.',
    id: 'fadfeac',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Carbon_Set_SheathlessCarbonSteelGriddlewithSheathGrillPress_1x1_Hero_640x640.jpg',
    isSoldOut: false,
    price: 708,
    title: 'Practical Frozen Salad',
  },
  {
    description: 'Failing that keenly somber why.',
    id: '6fd0e0d',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Stainless_Saucier_3QT_1x1_Hero_640x640.jpg',
    isSoldOut: false,
    price: 452,
    title: 'Unbranded Wooden Car',
  },
  {
    description: 'Geez oof whose hm shyly.',
    id: '5acffba',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_MiseenPlace_Set_Blue_4sizes_1x1_Hero_Angle_640x640.jpg',
    isSoldOut: false,
    price: 929,
    title: 'Generic Rubber Bike',
  },
  {
    description: 'Amused slight copper aside foreground.',
    id: '18a2152',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/WhitewithRedRim_TableTopSet_PDP_Angle2_40c40ae5-f076-4950-859e-cb6657da855e_640x640.jpg',
    isSoldOut: true,
    price: 724,
    title: 'Bespoke Metal Bacon',
  },
  {
    description: 'Which helpful redirect reappraise zowie.',
    id: 'b1cac6c',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Sets_6PieceSet_1x1_hero_640x640.jpg',
    isSoldOut: false,
    price: 606,
    title: 'Generic Concrete Pants',
  },
  {
    description: 'Crazy hug yuck beyond afore.',
    id: '5035fcd',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Carbon_Wok_1x1_Hero_640x640.jpg',
    isSoldOut: false,
    price: 213,
    title: 'Practical Frozen Car',
  },
  {
    description: 'Atop midst discomfort loot nervous.',
    id: '6c95388',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Stainless_Saucepan_4QT_1x1_Hero_640x640.jpg',
    isSoldOut: false,
    price: 912,
    title: 'Incredible Wooden Computer',
  },
  {
    description: 'Highly helpless compose mixed lower.',
    id: 'defca5d',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Knife_Block_Black_1x1_Hero_640x640.jpg',
    isSoldOut: true,
    price: 86,
    title: 'Awesome Steel Pizza',
  },
  {
    description: 'Chafe wholly woot selfish mmm.',
    id: '109a477',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Non_Stick_Fry_10in_1x1_Hero_91a11232-28fc-4a6b-9ba3-c8b21bc4269f_640x640.jpg',
    isSoldOut: false,
    price: 248,
    title: 'Recycled Steel Chair',
  },
  {
    description: 'Enormously harpsichord offensive wearily over.',
    id: 'dadae05',
    imageUrl:
      'https://cdn.shopify.com/s/files/1/2131/5111/products/Web_P1_Sets_StainlessFryingPanSet_1x1_hero_640x640.jpg',
    isSoldOut: false,
    price: 81,
    title: 'Refined Metal Bike',
  },
];

export default function Page() {
  return (
    <div className="flex flex-col px-6 py-12 sm:mx-auto sm:w-full md:max-w-screen-md md:px-12 md:py-24 lg:max-w-screen-lg xl:max-w-screen-xl">
      <h1 className="mb-4 text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl md:mb-12 md:text-5xl">
        Products
      </h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products
          .sort((a, b) => {
            return b.price - a.price;
          })
          .map(product => {
            return (
              <ProductCard key={product.id}>
                <div className="flex grow-0">
                  <ProductCardImage
                    alt={product.title}
                    src={product.imageUrl}
                  />
                </div>

                <div className="flex grow flex-col p-4">
                  <ProductCardTitle>{product.title}</ProductCardTitle>

                  <ProductCardDescription className="flex min-h-20 grow">
                    {product.description}
                  </ProductCardDescription>

                  <ProductCardPrice
                    currency="USD"
                    locale="en-US"
                    price={product.price}
                  />
                </div>

                <div className="p-4">
                  {product.isSoldOut ? (
                    <AddToCartButton
                      className="w-full cursor-not-allowed bg-slate-300/50 text-slate-800/50 shadow-none hover:shadow-none"
                      disabled={true}
                      productId={product.id}
                    >
                      Sold out
                    </AddToCartButton>
                  ) : (
                    <AddToCartButton className="w-full" productId={product.id}>
                      Add to cart
                    </AddToCartButton>
                  )}
                </div>

                {/* {product.isSoldOut && (
                <div className="absolute inset-0 flex items-center justify-center  bg-indigo-500">
                  <span className="text-2xl font-bold text-white">
                    Sold Out
                  </span>
                </div>
              )} */}
              </ProductCard>
            );
          })}
      </div>
    </div>
  );
}
