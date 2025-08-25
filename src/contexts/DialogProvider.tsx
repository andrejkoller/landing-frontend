import { useContext, ReactNode, useState } from "react";
import { DialogContext } from "./DialogContext";

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isUpdateEmailDialogOpen, setIsUpdateEmailDialogOpen] = useState(false);
  const [isUpdateNameDialogOpen, setIsUpdateNameDialogOpen] = useState(false);
  const [isUpdatePhoneNumberDialogOpen, setIsUpdatePhoneNumberDialogOpen] =
    useState(false);
  const [isUpdateAddressDialogOpen, setIsUpdateAddressDialogOpen] =
    useState(false);

  return (
    <DialogContext.Provider
      value={{
        isUpdateEmailDialogOpen,
        openUpdateEmailDialog: () => setIsUpdateEmailDialogOpen(true),
        closeUpdateEmailDialog: () => setIsUpdateEmailDialogOpen(false),

        isUpdateNameDialogOpen,
        openUpdateNameDialog: () => setIsUpdateNameDialogOpen(true),
        closeUpdateNameDialog: () => setIsUpdateNameDialogOpen(false),

        isUpdatePhoneNumberDialogOpen,
        openUpdatePhoneNumberDialog: () =>
          setIsUpdatePhoneNumberDialogOpen(true),
        closeUpdatePhoneNumberDialog: () =>
          setIsUpdatePhoneNumberDialogOpen(false),

        isUpdateAddressDialogOpen,
        openUpdateAddressDialog: () => setIsUpdateAddressDialogOpen(true),
        closeUpdateAddressDialog: () => setIsUpdateAddressDialogOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
