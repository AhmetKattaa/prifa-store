import { Region } from "@medusajs/medusa";
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing";
import React, { Suspense } from "react";
import { Heading, Text } from "@medusajs/ui"

import ImageGallery from "@modules/products/components/image-gallery";
import ProductActions from "@modules/products/components/product-actions";
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta";
import RelatedProducts from "@modules/products/components/related-products";
import FlavorProducts from "@modules/products/components/flavor-products";
import ProductInfo from "@modules/products/templates/product-info";
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products";
import { notFound } from "next/navigation";
import ProductActionsWrapper from "./product-actions-wrapper";
import IntensityRatings from "@modules/products/components/product-tags";
import { getProductsList } from "@lib/data";

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
    handle: p.handle,
    thumbnail: p.thumbnail,
  }));

  const { collection, title, description } = product

  return (
    <>
      <div
        className="content-container flex flex-col lg:flex-row gap-8 py-6 relative"
        data-testid="product-container"
      >
        {/* Sol sütun: Küçük görseller (masaüstünde daha geniş) */}
        <div
          className="hidden lg:flex lg:w-36 flex-col gap-4 max-h-[600px] sticky top-24 overflow-y-auto"
        >
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-28 h-28 lg:w-36 lg:h-36 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>

        {/* Orta sütun: Ana görsel galerisi (daha dar) */}
        <div className="flex-1 lg:w-[30%] hidden lg:block">
          <ImageGallery images={product?.images || []} />
        </div>

        {/* Sağ sütun: Ürün bilgisi ve aksiyonlar (daha geniş) */}
        <div
          className="w-full lg:w-[35%] flex flex-col gap-y-8 sticky top-24 overflow-y-auto max-h-[600px]"
        >
          <ProductInfo product={product} />

          {/* Mobil görünümde galeri fotoğrafları */}
          <div className="block lg:hidden w-full mt-4">
            <h3 className="text-lg font-bold mb-4">Gallery</h3>
            <div className="flex gap-4 overflow-x-auto py-4">
              {product.images?.map((image, index) => (
                <img
                  key={index}
                  src={image.url}
                  alt={`Gallery Image ${index + 1}`}
                  className="w-[80%] h-auto object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition"
                />
              ))}
            </div>
          </div>

          {/* Flavor bölümü */}
          <div className="flavor-section mt-0">
            <h3 className="text-lg font-bold mb-2">Other Flavors</h3>
            <FlavorProducts flavors={flavors} currentProductId={product.id} />
          </div>

          

          {/* Seçenekler ve "Add to Cart" Butonu */}
          <div className="mt-0 w-full lg:relative">
            <ProductOnboardingCta />
            <Suspense
              fallback={
                <ProductActions disabled={true} product={product} region={region} />
              }
            >
              <ProductActionsWrapper id={product.id} region={region} />
            </Suspense>
          </div>

          {/* Intensity Ratings Bölümü */}
          <div className="intensity-section mt-8">
            <h3 className="text-lg font-bold mb-2">Intensity Metrics</h3>
            <IntensityRatings product={product} countryCode={countryCode} />
          </div>

          {/* Ürün açıklaması, stilize edilmiş metin */}
          <h1 className="text-lg font-bold mb-0">Desctiption :</h1>
          <Text
            className="text-medium text-ui-fg-subtle"
            data-testid="product-description" // Test için veri kimliği.
          >
            {description} {/* Ürün açıklaması */}
          </Text>

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
