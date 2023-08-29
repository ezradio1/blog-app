import PageLayout from "@/components/PageLayout";
import BlogDetailComponent from "@/routes/BlogDetail";
import type { BlogDetailProps } from "@/types/layoutProps";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuminaLife Blog | Blog Detail",
  description:
    "Discover inspiration and insights for personal growth and holistic well-being at LuminaLife Blog. Explore mental health, self-development, balanced lifestyles, and more. Join us on the journey to a radiant life.",
  icons: "/src/app/favicon.ico",
};

const BlogDetail = (props: BlogDetailProps) => {
  return (
    <PageLayout>
      <BlogDetailComponent {...props} />
    </PageLayout>
  );
};

export default BlogDetail;
