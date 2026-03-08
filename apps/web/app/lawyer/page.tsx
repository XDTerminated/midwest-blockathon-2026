import { AppLayout } from "@/components/layout/AppLayout";
import { LawyerRequestContent } from "@/components/LawyerRequestContent";

export const metadata = {
  title: "Request a Lawyer — Lumina",
};

export default function LawyerPage() {
  return (
    <AppLayout>
      <div className="h-full flex flex-col px-8 py-8 max-w-4xl mx-auto w-full overflow-auto">
        <LawyerRequestContent />
      </div>
    </AppLayout>
  );
}
