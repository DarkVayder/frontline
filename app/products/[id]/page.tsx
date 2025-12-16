"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/fetcher";
import Skeleton from "@/components/ui/Skeleton";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import { RiArrowGoBackFill } from "react-icons/ri";
import { toast } from "react-toastify";
import { FiShoppingCart, FiHeart, FiCreditCard } from "react-icons/fi";

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

  const handleAddToCart = () => {
  toast.success("Added to cart");
  };

  const handleBuyNow = () => {
    toast.info("Proceeding to checkout");
  };

  const handleWishlist = () => {
    toast("Added to wishlist ❤️");
  };

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
        <RiArrowGoBackFill size={18} /> Back
      </button>

      {/* Main Product */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative h-80 w-full flex justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-xl shadow-lg"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-xl font-semibold">${product.price}</p>
          <p className="text-sm italic text-gray-300">{product.category}</p>
          <p className="text-gray-200">
            Experience the best in quality and performance with our {product.title}. Designed with attention to detail and built to last, this product offers exceptional value for your everyday needs. Perfect for enhancing your lifestyle or as a thoughtful gift.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 px-5 py-3 font-semibold transition cursor-pointer"
            >
              <FiShoppingCart size={18} />
              Add to Cart
            </button>

            {/* Buy Now */}
            <button
              onClick={handleBuyNow}
              className="flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 px-5 py-3 font-semibold transition cursor-pointer"
            >
              <FiCreditCard size={18} />
              Buy Now
            </button>

            {/* Wishlist */}
            <button
              onClick={handleWishlist}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:bg-white/10 px-5 py-3 font-semibold transition cursor-pointer"
            >
              <FiHeart size={18} />
              Wishlist
            </button>
          </div>
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
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{ objectFit: "contain" }}
                        className="transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
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