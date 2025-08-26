import { ButtonBase } from "@mui/material";
import { LogOutIcon } from "lucide-react";

export const AccountLogout = () => {
  return (
    <ButtonBase
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        gap: "0.5rem",
        padding: "16.5px 32px 16.5px 14px",
        border: "1px solid var(--border-default)",
        borderRadius: "4px",
        width: "100%",
        fontFamily: "Arial",
        fontSize: "1rem",
      }}
    >
      <LogOutIcon />
      <span>Logout</span>
    </ButtonBase>
  );
};
