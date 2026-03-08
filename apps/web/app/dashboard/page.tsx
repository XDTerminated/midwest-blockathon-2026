import { DashboardContent } from "@/components/DashboardContent";
import { AppLayout } from "@/components/layout/AppLayout";

export const metadata = {
  title: "Dashboard — Lumina",
};

const DashboardPage = () => {
  return (
    <AppLayout>
      <div className="h-full flex flex-col px-8 py-8 max-w-4xl mx-auto w-full">
        <DashboardContent />
      </div>
    </AppLayout>
  );
};

export default DashboardPage;
