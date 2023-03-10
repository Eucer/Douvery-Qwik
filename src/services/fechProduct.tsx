export const urlServerNode = 'https://server-douvery.vercel.app';
const urlServerPython = 'https://htyr.onrender.com';

export async function fetchProduct(
  dui: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
    ${urlServerNode}/api/products/${dui}`,
    {
      signal: controller?.signal,
    }
  );
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();
  return results;
}

export async function fetchProductBestInCategory(
  category: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
    ${urlServerNode}/api/best-in-category/${category}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();

  return results;
}

export async function fetchProductU(
  limit: number,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `${urlServerNode}/productsByRandom/?limit=${limit}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();
  return results;
}

export async function fetchProductCategory(
  category: string,
  dui: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
   ${urlServerNode}/api/productsByCategory/?category=${category}&limit=2&excludeDui=${dui}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();
  return results;
}

export async function fetchProductSubCategory(
  subCategory: string,
  dui: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
   ${urlServerNode}/api/productsBySubCategory/?subCategory=${subCategory}&limit=2&excludeDui=${dui}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();
  return results;
}

export async function fetchSuggestions(
  searchInput: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
   ${urlServerNode}/suggestions?q=${searchInput}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();

  return results;
}
export async function fetchCode(
  searchInput: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
 ${urlServerNode}/geocode?q=${searchInput}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();

  return results;
}

export async function fetchCodePostal(
  codepostal: string,
  controller?: AbortController
): Promise<any> {
  console.log(codepostal);
  const response = await fetch(
    `
   ${urlServerNode}/q?code=${codepostal}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch code');
  }
  const results = await response.json();
  console.log(results);
  return results;
}

export async function fetchSystemRecomendationProductU(
  dui: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
   ${urlServerPython}/recommend_products/${dui}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  const results = await response.json();
  return results;
}

export async function fetchIpInfo(): Promise<any> {
  const response = await fetch(
    `
  https://ipinfo.io/country?token=0d62ca75f9e230`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch code');
  }
  const results = await response.text();
  console.log(results);
  return results;
}

export async function fetchSearchProduct(
  category: string,
  query: string,
  orderPrice: string,
  rating: string,
  order: string,
  page: string,
  controller?: AbortController
): Promise<any> {
  const response = await fetch(
    `
   ${urlServerNode}/apisearch/products/search?page=${page}&query=${query}&category=${category}&price=${orderPrice}&rating=${rating}&order=${order}`,
    {
      signal: controller?.signal,
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch characters');
  }
  const results = await response.json();

  return results.products;
}
