
export async function fetchProductData() {
  try {
    const response = await fetch("https://fakestoreapi.com/products?limit=");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}