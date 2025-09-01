import { useAuth } from "@/hooks/useAuth";
import { FormControlLabel } from "@mui/material";
import { AnimatedCheckbox } from "../AnimatedCheckbox/AnimatedCheckbox";
import { updateUserNewsletterSubscribe } from "@/services/userService";
import { useEffect, useState } from "react";

export const AccountNewsletterSubscription = () => {
  const { publicUser, refreshUser } = useAuth();
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);

  useEffect(() => {
    setIsNewsletterSubscribed(!!publicUser?.isNewsletterSubscribed);
  }, [publicUser]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsNewsletterSubscribed(checked);

    if (!publicUser?.id) {
      console.error("No user ID available");
      return;
    }

    try {
      await updateUserNewsletterSubscribe({
        id: publicUser.id,
        isNewsletterSubscribed: checked,
      });
      await refreshUser();
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <FormControlLabel
      control={
        <AnimatedCheckbox
          checked={isNewsletterSubscribed}
          onChange={handleChange}
        />
      }
      label="Receive email updates about new versions before they are released"
    />
  );
};
