import { AppLayout } from "@/components/layout/AppLayout";
import { DashboardContent } from "@/components/DashboardContent";

export const metadata = {
  title: "Dashboard — ImmiVault",
};

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="h-full flex flex-col px-8 py-8 max-w-4xl mx-auto w-full">
        <DashboardContent />
      </div>
    </AppLayout>
  );
}
