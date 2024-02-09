export interface GetCartsResponse {
  cartsInfo: {
    carts: Cart[];
    total: number;
    skip: number;
    limit: number;
  } | null;
  error: string | null;
}

export interface GetCartResponse {
  cart: Cart | null;
  error: string | null;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice: number;
  thumbnail: string;
}
