import ComingSoon from "@/components/ComingSoon";
import PageLayout from "@/components/PageLayout";
import { Metadata } from "next";
;

export const metadata: Metadata = {
  title: "LuminaLife Blog | Products",
  description:
    "Discover inspiration and insights for personal growth and holistic well-being at LuminaLife Blog. Explore mental health, self-development, balanced lifestyles, and more. Join us on the journey to a radiant life.",
};

const Products = () => {
  return (
    <PageLayout>
      <ComingSoon />
    </PageLayout>
  );
};

export default Products;
