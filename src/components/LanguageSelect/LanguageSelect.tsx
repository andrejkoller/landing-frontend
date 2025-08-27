import styles from "./LanguageSelect.module.css";

export const LanguageSelect = () => {
  return (
    <div className={styles.languageSelect}>
      <label htmlFor="language">Select Language:</label>
      <select
        id="language"
        name="language"
        className={styles.languageSelectDropdown}
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};
