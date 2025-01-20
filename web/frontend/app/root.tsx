import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";

import tailwindStyles from "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
];

export const meta: MetaFunction = () => {
  return [
    { title: "Product Catalog" },
    { name: "description", content: "Browse our product catalog" },
    { viewport: "width=device-width,initial-scale=1" },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="bg-blue-600 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="/" className="text-2xl font-bold">
              Product Store
            </a>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-blue-200">
                  Products
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-blue-200">
                  Cart
                </a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="bg-gray-100 p-4 mt-8">
          <div className="container mx-auto text-center text-gray-600">
            © 2025 Product Store. All rights reserved.
          </div>
        </footer>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(...arguments);
  return (
    <html lang="en">
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-red-600 mb-4">
            Application Error
          </h1>
          <pre className="bg-gray-100 p-4 rounded overflow-auto">
            
          </pre>
        </div>
        <Scripts />
      </body>
    </html>
  );
}
