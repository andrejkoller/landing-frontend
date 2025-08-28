import { createContext } from "react";

interface DialogContextType {
  isUpdateEmailDialogOpen: boolean;
  openUpdateEmailDialog: () => void;
  closeUpdateEmailDialog: () => void;

  isUpdateNameDialogOpen: boolean;
  openUpdateNameDialog: () => void;
  closeUpdateNameDialog: () => void;
}

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined
);
