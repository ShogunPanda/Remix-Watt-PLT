import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { postgresDbGetProductById } from "../remix-client/remix-client.mjs";

export async function loader({ params }: LoaderFunctionArgs) {
  try {
    const product = await postgresDbGetProductById({
      id: params.id ?? "0", 
    });

    if (!product) {
      throw new Response("Not Found", { status: 404 });
    }

    return json(product);
  } catch (error) {
    if (error instanceof Response) throw error;
    console.error("Failed to fetch product:", error);
    throw new Response("Failed to fetch product", { status: 500 });
  }
}

export default function Product() {
  const product = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name ?? "Product"}
                className="w-full rounded-lg shadow-lg"
              />
            )}
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">
              {product.name ?? "Unnamed Product"}
            </h1>
            <p className="text-gray-600 mb-6">
              {product.description ?? "No description available"}
            </p>
            <p className="text-3xl font-bold text-blue-600 mb-6">
              ${Number(product.price ?? 0).toFixed(2)}
            </p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => {
                alert("Add to cart functionality not implemented yet");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
