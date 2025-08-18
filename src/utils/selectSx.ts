export const inputLabelSx = {
  "& .MuiInputLabel-root": {
    color: "var(--text-default)",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "var(--text-default)",
  },
};

export const selectSx = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--border-default) !important",
  },
  ...inputLabelSx,
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--border-default) !important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "var(--border-default) !important",
  },
};
