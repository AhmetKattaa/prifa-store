import { StoreGetProductsParams } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";

import { getProductsList, getRegion } from "@lib/data";

import ProductPreview from "../product-preview";

type RelatedProductsProps = {
  product: PricedProduct;
  countryCode: string;
};

export default async function RelatedProducts({
  product,
  countryCode,
}: RelatedProductsProps) {
  const region = await getRegion(countryCode);

  if (!region) {
    console.error("Region not found for countryCode:", countryCode);
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No region found for this product.</p>
      </div>
    );
  }

  // Koleksiyon ID'sine dayalı sorgu parametreleri
  const queryParams: StoreGetProductsParams = {
    collection_id: product.collection_id ? [product.collection_id] : [],
    is_giftcard: false,
  };

  console.log("Query Params:", queryParams);

  // API çağrısı yapılıyor ve ilgili ürünler getiriliyor
  const productPreviews = await getProductsList({
    queryParams,
    countryCode,
  }).then(({ response }) => {
    console.log("Related Products Response:", response.products); // API yanıtını kontrol
    return response.products.filter(
      (productPreview) => productPreview.id !== product.id
    );
  });

  // Eğer sonuç boşsa mesaj göster
  if (!productPreviews.length) {
    console.warn("No related products found for query params:", queryParams);
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No related products found.</p>
      </div>
    );
  }

  // İlgili ürünleri render etme
  return (
    <div className="product-page-constraint">
      <div className="flex flex-col items-center text-center mb-16">
        <span className="text-base-regular text-gray-600 mb-6">
          Related products
        </span>
        <p className="text-2xl-regular text-ui-fg-base max-w-lg">
          You might also want to check out these products.
        </p>
      </div>

      <ul className="grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-6 gap-y-8">
        {productPreviews.map((productPreview) => (
          <li key={productPreview.id}>
            <ProductPreview region={region} productPreview={productPreview} />
          </li>
        ))}
      </ul>
    </div>
  );
}
