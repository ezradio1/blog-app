import PageLayout from "@/components/PageLayout";
import DashboardComponent from "@/routes/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LuminaLife Blog",
  description:
    "Discover inspiration and insights for personal growth and holistic well-being at LuminaLife Dashboard. Explore mental health, self-development, balanced lifestyles, and more. Join us on the journey to a radiant life.",
  icons: "/src/app/favicon.ico",
};

const Dashboard = () => {
  return (
    <PageLayout>
      <DashboardComponent />
    </PageLayout>
  );
};

export default Dashboard;
