"use client";

import { Footer } from "@/components/Footer/Footer";
import { Header } from "@/components/Header/Header";
import "@/app/globals.css";
import { ThemeProvider } from "@/contexts/ThemeProvider";
import { useState } from "react";
import { Backdrop } from "@mui/material";
import { usePathname } from "next/navigation";
import { AccountSettingsHeader } from "@/components/AccountSettingsHeader/AccountSettingsHeader";
import { UpdateEmailDialog } from "@/components/dialogs/UpdateEmailDialog/UpdateEmailDialog";
import { DialogProvider, useDialog } from "@/contexts/DialogProvider";
import { UpdateAddressDialog } from "@/components/dialogs/UpdateAddressDialog/UpdateAddressDialog";
import { UpdateNameDialog } from "@/components/dialogs/UpdateNameDialog/UpdateNameDialog";
import { UpdatePhoneNumberDialog } from "@/components/dialogs/UpdatePhoneNumberDialog/UpdatePhoneNumberDialog";

const Dialogs = () => {
  const {
    isUpdateEmailDialogOpen,
    closeUpdateEmailDialog,
    isUpdateNameDialogOpen,
    closeUpdateNameDialog,
    isUpdatePhoneNumberDialogOpen,
    closeUpdatePhoneNumberDialog,
    isUpdateAddressDialogOpen,
    closeUpdateAddressDialog,
  } = useDialog();

  return (
    <>
      <UpdateEmailDialog
        open={isUpdateEmailDialogOpen}
        onClose={closeUpdateEmailDialog}
      />
      <UpdateNameDialog
        open={isUpdateNameDialogOpen}
        onClose={closeUpdateNameDialog}
      />
      <UpdatePhoneNumberDialog
        open={isUpdatePhoneNumberDialogOpen}
        onClose={closeUpdatePhoneNumberDialog}
      />
      <UpdateAddressDialog
        open={isUpdateAddressDialogOpen}
        onClose={closeUpdateAddressDialog}
      />
    </>
  );
};

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const pathname = usePathname();
  const showAccountSettingsHeader = pathname.startsWith("/account");

  return (
    <ThemeProvider>
      <DialogProvider>
        <Header
          activeDropdown={activeDropdown !== null ? activeDropdown : undefined}
          setActiveDropdown={setActiveDropdown}
        />
        {showAccountSettingsHeader && <AccountSettingsHeader />}
        <main className="mainContent">{children}</main>
        <Footer />
        <Backdrop
          sx={{
            zIndex: "var(--z-index-backdrop)",
          }}
          open={activeDropdown !== null}
          onClick={() => setActiveDropdown(null)}
        />
        <Dialogs />
      </DialogProvider>
    </ThemeProvider>
  );
}
