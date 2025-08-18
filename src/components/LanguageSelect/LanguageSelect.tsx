import styles from "./LanguageSelect.module.css";
import { formControlSx } from "@/utils/formControlSx";
import { selectSx } from "@/utils/selectSx";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const LanguageSelect = () => {
  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);
  const [language, setLanguage] = useState("en");

  return (
    <FormControl sx={formControlSx} fullWidth>
      <InputLabel id="language-select-label">Language</InputLabel>
      <Select
        sx={selectSx}
        MenuProps={{
          PaperProps: { elevation: 2 },
        }}
        open={isLanguageSelectOpen}
        onOpen={() => setIsLanguageSelectOpen(true)}
        onClose={() => setIsLanguageSelectOpen(false)}
        value={language}
        onChange={(event) => setLanguage(event.target.value)}
        label="Language"
        labelId="language-select-label"
        id="language-select"
        variant="outlined"
        IconComponent={() => {
          return (
            <ChevronDownIcon
              className={`${styles.chevronIcon} ${
                isLanguageSelectOpen ? styles.chevronIconOpen : ""
              }`}
            />
          );
        }}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="de">Deutsch</MenuItem>
      </Select>
    </FormControl>
  );
};
