import { useDialog } from "@/hooks/useDialog";
import { ButtonBase } from "@mui/material";

export const AccountDelete = () => {
  const { openAcceptAccountDeletion } = useDialog();

  return (
    <ButtonBase
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "0.5rem",
        padding: "16.5px 32px 16.5px 14px",
        border: "1px solid var(--border-default)",
        borderRadius: "4px",
        color: "var(--color-red)",
        width: "100%",
        fontFamily: "Arial",
        fontSize: "1rem",
      }}
      onClick={openAcceptAccountDeletion}
    >
      <span>Delete Account</span>
    </ButtonBase>
  );
};
