export async function fetchProducts() {
  const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API;
  if (!apiUrl) throw new Error('Products API URL not defined');

  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error('Failed to fetch products');

  return res.json();
}