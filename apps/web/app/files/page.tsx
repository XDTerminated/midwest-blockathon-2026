import { AppLayout } from "@/components/layout/AppLayout";
import { FilesContent } from "@/components/FilesContent";

export const metadata = {
  title: "Files — ImmiVault",
};

export default function FilesPage() {
  return (
    <AppLayout>
      <div className="h-full flex flex-col px-8 py-8 max-w-4xl mx-auto w-full">
        <FilesContent />
      </div>
    </AppLayout>
  );
}
