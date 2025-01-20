/**
 * Product
 * A Product
 */
declare interface Product {
    id?: string;
    createdAt?: string | null;
    description?: string | null;
    imageUrl?: string | null;
    name: string;
    price: string;
    updatedAt?: string | null;
}
export { Product };
