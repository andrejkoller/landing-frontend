import { ReactNode, useState } from "react";
import { DialogContext } from "./DialogContext";

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [isUpdateEmailDialogOpen, setIsUpdateEmailDialogOpen] = useState(false);
  const [isUpdateNameDialogOpen, setIsUpdateNameDialogOpen] = useState(false);
  const [isAcceptAccountDeletionOpen, setIsAcceptAccountDeletionOpen] =
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

        isAcceptAccountDeletionOpen,
        openAcceptAccountDeletion: () => setIsAcceptAccountDeletionOpen(true),
        closeAcceptAccountDeletion: () => setIsAcceptAccountDeletionOpen(false),
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
