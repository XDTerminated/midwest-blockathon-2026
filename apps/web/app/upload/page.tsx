import { AppLayout } from "@/components/layout/AppLayout";
import { UploadArea } from "@/components/UploadArea";

export const metadata = {
  title: "Upload a File — Lumina",
};

const UploadPage = () => {
  return (
    <AppLayout>
      <div className="h-full flex flex-col px-8 py-8 max-w-3xl mx-auto w-full">
        <UploadArea />
      </div>
    </AppLayout>
  );
};

export default UploadPage;
