import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { Suspense } from "react";

import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import ProductTabs from "@modules/products/components/product-tabs";
import RelatedProducts from "@modules/products/components/related-products";
import FlavorProducts from "@modules/products/components/flavor-products";
import ProductInfo from "@modules/products/templates/product-info";
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import IntensityRatings from "@modules/products/components/product-tags"; // Yeni bileşeni import ettik
import { getProductsList, getRegion } from "@lib/data";

type ProductTemplateProps = {
  product: PricedProduct;
  region: Region;
  countryCode: string;
};

const ProductTemplate: React.FC<ProductTemplateProps> = async ({
  product,
  region,
  countryCode,
}) => {
  if (!product || !product.id) {
    return notFound();
  }

  // collection_id kontrolü yap
  const collectionId = product.collection_id || null;

  const relatedProducts = collectionId
    ? await getProductsList({
        queryParams: {
          collection_id: [collectionId],
          is_giftcard: false,
        },
        countryCode,
      }).then(({ response }) =>
        response.products.filter((p) => p.id !== product.id)
      )
    : [];

  const flavors = relatedProducts.map((p) => ({
    id: p.id,
    title: p.title,
    handle: p.handle, // Handle bilgisi ekleniyor
    thumbnail: p.thumbnail, 
  }));

  return (
    <>
      <div
        className="content-container flex flex-row gap-8 py-6 relative"
        data-testid="product-container"
      >
        {/* Sol sütun: Küçük görseller */}
        <div
          className="w-32 flex flex-col gap-4 max-h-[600px] sticky top-24 overflow-y-auto"
        >
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-36 h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* Orta sütun: Ana görsel galerisi */}
        <div className="flex-1">
          <ImageGallery images={product?.images || []} />
        </div>

        {/* Sağ sütun: Ürün bilgisi, aksiyonlar, Flavor ve Intensity Ratings */}
        <div
          className="w-100 flex flex-col gap-y-8 sticky top-24 overflow-y-auto max-h-[600px]"
        >
          <ProductInfo product={product} />
          
          {/* Flavor bölümü */}
          <div className="flavor-section mt-8">
            <h3 className="text-lg font-bold mb-2">Flavors</h3>
            <FlavorProducts flavors={flavors} currentProductId={product.id} />
          </div>
          
          {/* Intensity Ratings Bölümü */}
          <div className="intensity-section mt-8">
            <h3 className="text-lg font-bold mb-2">Intensity Metrics</h3>
            <IntensityRatings product={product} countryCode={countryCode} />
          </div>
          <ProductOnboardingCta />
          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >

          
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>
        </div>
      </div>

      {/* Alt bölüm: İlgili ürünler */}
      <div
        className="content-container my-12"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  );
};

export default ProductTemplate;
