import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";
import { postgresDbGetProducts } from "../remix-client/remix-client.mjs";

export async function loader() {
  try {
    const products = await postgresDbGetProducts({
      "orderby.createdAt": "desc", 
    });
    return json(products);
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw new Response("Failed to fetch products", { status: 500 });
  }
}

export default function Index() {
  const products = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name ?? "Product"}
                className="w-full h-48 object-cover rounded mb-4"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">
              {product.name ?? "Unnamed Product"}
            </h2>
            <p className="text-gray-600 mb-2">
              {product.description ?? "No description available"}
            </p>
            <p className="text-xl font-bold text-blue-600">
              ${Number(product.price ?? 0).toFixed(2)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
