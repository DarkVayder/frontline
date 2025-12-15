"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/fetcher";
import Skeleton from "@/components/ui/Skeleton";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductPage() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then((products) => {
        const p = products.find((prod: Product) => prod.id.toString() === id);
        if (p) {
          setProduct(p);
          setRelated(
            products
              .filter((prod: Product) => prod.category === p.category && prod.id !== p.id)
              .slice(0, 4)
          );
        } else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Skeleton />;
  if (error || !product)
    return <p className="text-center text-red-400">Product not found.</p>;

  return (
    <section className="space-y-8 text-white max-w-5xl mx-auto p-4">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-3 py-2 rounded-xl cursor-pointer transition"
      >
        <FiArrowLeft size={18} /> Back
      </button>

      {/* Main Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-80 object-contain rounded-xl shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold">${product.price}</p>
          <p className="text-sm italic text-gray-300">{product.category}</p>
          <p className="text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            commodo, magna vel pulvinar consectetur, arcu lorem porta metus,
            vel dictum arcu leo vel lectus.
          </p>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {related.map((p) => (
              <Link key={p.id} href={`/products/${p.id}`} className="cursor-pointer">
                <Card>
                  <div className="group flex flex-col">
                    <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-white group-hover:text-gray-200">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-white">${p.price}</p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}