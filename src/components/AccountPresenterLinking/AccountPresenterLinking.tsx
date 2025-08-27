import styles from "./AccountPresenterLinking.module.css";
import { AnimatedLink } from "../AnimatedLink/AnimatedLink";

export const AccountPresenterLinking = () => {
  return (
    <div className={styles.accountPresenterLinking}>
      <div className={styles.accountPresenterLinkingContainer}>
        <div className={styles.accountPresenterLinkingFieldGroup}>
          <p className={styles.accountPresenterLinkingDescription}>Presenter</p>
        </div>
        <div className={styles.accountPresenterLinkingActions}>
          <AnimatedLink
            className={styles.accountPresenterLinkingLink}
            href={
              process.env.NEXT_PUBLIC_PRESENTER_URL || "http://localhost:3002"
            }
            hoverType="color"
          >
            Visit
          </AnimatedLink>
        </div>
      </div>
    </div>
  );
};
