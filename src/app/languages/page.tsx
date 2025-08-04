import Flag from "react-world-flags";
import styles from "./page.module.css";
import { TextField } from "@mui/material";

const topLanguages = [
  {
    code: "DE",
    name: "Deutschland",
  },
  {
    code: "US",
    name: "United States",
  },
  {
    code: "GB",
    name: "United Kingdom",
  },
  {
    code: "AU",
    name: "Australia",
  },
  {
    code: "FR",
    name: "France",
  },
  {
    code: "ES",
    name: "España",
  },
  {
    code: "IT",
    name: "Italia",
  },
];

const otherLanguages = [
  {
    code: "CN",
    name: "中国",
  },
  {
    code: "JP",
    name: "日本",
  },
  {
    code: "KR",
    name: "한국",
  },
  {
    code: "RU",
    name: "Россия",
  },
];

export default function Page() {
  return (
    <section className={styles.languagesSection}>
      <div className={styles.languagesContainer}>
        <div className={styles.languagesContent}>
          <div className={styles.languagesHeader}>
            <div className={styles.searchbar}>
              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "var(--border-default)",
                      borderRadius: "999px",
                    },
                    "&:hover fieldset": {
                      borderColor: "var(--border-default)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "var(--border-default)",
                    },
                    "& .MuiInputBase-input": {
                      color: "var(--text-default)",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "var(--text-muted)",
                      opacity: 1,
                    },
                  },
                  "& .MuiFormLabel-root": {
                    color: "var(--text-default)",
                  },
                  "& .MuiFormLabel-root.Mui-focused": {
                    color: "var(--text-default)",
                  },
                }}
                label="Search languages"
                type="text"
                variant="outlined"
                fullWidth
                margin="normal"
              />
            </div>
          </div>
          <ul className={styles.topLanguagesList}>
            {topLanguages.map((language) => (
              <li key={language.code} className={styles.languageItem}>
                <Flag code={language.code} className={styles.languageFlag} />
                <span className={styles.languageName}>{language.name}</span>
              </li>
            ))}
          </ul>
          <ul className={styles.otherLanguagesList}>
            {otherLanguages.map((language) => (
              <li key={language.code} className={styles.languageItem}>
                <Flag code={language.code} className={styles.languageFlag} />
                <span className={styles.languageName}>{language.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
