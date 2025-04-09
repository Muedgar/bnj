import PanelLayout from "@/components/layouts/panel";

export default function ItemLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <PanelLayout>
         {children}
      </PanelLayout>
    );
  }
  