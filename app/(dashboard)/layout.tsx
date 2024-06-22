import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";
import { QueryProviders } from "@/providers/query-providers";
import { SheetProvider } from "@/providers/sheet-provider";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        <QueryProviders>
          <SheetProvider />
          <Toaster />
          {children}
        </QueryProviders>
      </main>
    </>
  );
};

export default DashboardLayout;
