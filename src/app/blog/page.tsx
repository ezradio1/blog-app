import PageLayout from "@/components/PageLayout";
import BlogComponent from "@/routes/Blog";
import type { SearchParamsType } from "@/types/layoutProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuminaLife Blog | Blog",
  description:
    "Discover inspiration and insights for personal growth and holistic well-being at LuminaLife Blog. Explore mental health, self-development, balanced lifestyles, and more. Join us on the journey to a radiant life.",
};

const Blog = (props: SearchParamsType) => {
  return (
    <PageLayout>
      <BlogComponent {...props} />
    </PageLayout>
  );
};

export default Blog;
