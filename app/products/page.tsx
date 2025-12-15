"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchProducts } from "@/lib/fetcher";
import Skeleton from "@/components/ui/Skeleton";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Filters
  const [maxPrice, setMaxPrice] = useState<number | "">("");
  const [category, setCategory] = useState<string>("all");
  const [sort, setSort] = useState<string>("none");

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(new Set(products.map(p => p.category)));

  const filtered = products
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    .filter(p => (maxPrice === "" ? true : p.price <= maxPrice))
    .filter(p => (category === "all" ? true : p.category === category))
    .sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "name") return a.title.localeCompare(b.title);
      return 0;
    });

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-center text-red-400">
        Failed to load products. Please try again.
      </p>
    );
  }

  return (
    <section className="space-y-6 text-white">
      {/* Header + Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left text */}
        <h2 className="text-lg font-semibold text-cyan-500">
          Be Bold
        </h2>

        {/* Filters + Search */}
        <div className="flex flex-col sm:flex-row gap-3 md:items-center">
          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full sm:w-auto bg-gray-950 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none"
          >
            <option value="all">All categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-auto bg-gray-950 border border-white/20 rounded-xl px-4 py-2 text-white focus:outline-none"
          >
            <option value="none">Sort</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="name">Name</option>
          </select>

          {/* Max price */}
          <Input
            type="number"
            placeholder="Max price"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(e.currentTarget.value === "" ? "" : Number(e.currentTarget.value))
            }
            className="w-full sm:w-32 bg-gray-950 border border-white/20 text-white focus:outline-none"
          />

          {/* Search */}
          <Input
            placeholder="Search products"
            value={query}
            onChange={(e) => setQuery(e.currentTarget.value)}
            className="w-full sm:w-64 bg-gray-950 border border-white/20 text-white focus:outline-none"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No products found.
          </p>
        )}

        {filtered.map(p => (
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

                <p className="mt-1 text-sm font-medium text-white">
                  ${p.price}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}