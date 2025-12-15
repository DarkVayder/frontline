import Link from "next/link";
import { FiCheckSquare, FiShoppingBag } from "react-icons/fi";
import { SlSocialSkype } from "react-icons/sl";

export default function Home() {
  return (
    <section className="min-h-screen bg-gray-950 flex flex-col justify-center items-center px-4 py-12 space-y-12 text-white">
      {/* Hero */}
      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-5xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
          Frontline
        </h1>
        <p className="text-gray-300 text-lg">
          A frontend Multi-Tenant application showcasing UI precision, interactive
          state management, and real-world API integration.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <Link
          href="/social"
          className="flex flex-col items-start gap-3 rounded-xl border border-white/20 bg-white/5 p-6 hover:scale-105 hover:shadow-lg hover:bg-cyan-500 transition-all duration-300 cursor-pointer"
        >
          <SlSocialSkype className="text-3xl text-white" />
          <h3 className="font-semibold text-lg">Social</h3>
          <p className="text-sm text-gray-300">
            Get in touch with the World
          </p>
        </Link>

        <Link
          href="/todos"
          className="flex flex-col items-start gap-3 rounded-xl border border-white/20 bg-white/5 p-6 hover:scale-105 hover:shadow-lg hover:bg-green-500 transition-all duration-300 cursor-pointer"
        >
          <FiCheckSquare className="text-3xl text-white" />
          <h3 className="font-semibold text-lg">Interactive Todo App</h3>
          <p className="text-sm text-gray-300">
            Demonstrates state management, persistence, and user interactions.
          </p>
        </Link>

        <Link
          href="/products"
          className="flex flex-col items-start gap-3 rounded-xl border border-white/20 bg-white/5 p-6 hover:scale-105 hover:shadow-lg hover:bg-blue-500 transition-all duration-300 cursor-pointer"
        >
          <FiShoppingBag className="text-3xl text-white" />
          <h3 className="font-semibold text-lg">Product Listing</h3>
          <p className="text-sm text-gray-300">
            Come, let's Shop.
          </p>
        </Link>
      </div>
    </section>
  );
}