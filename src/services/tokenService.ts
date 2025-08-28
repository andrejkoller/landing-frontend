export const setAuthToken = (token: string): void => {
  if (!token) {
    console.warn("Attempting to set an empty token.");
    return;
  }
  localStorage.setItem("token", token);
};

export const getAuthToken = (): string | null => {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
};

export const removeAuthToken = (): void => {
  if (typeof window === "undefined") return;
  localStorage.removeItem("token");
};

export const isTokenValid = (): boolean => {
  const token = getAuthToken();
  if (!token) {
    return false;
  }

  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return false;
    }

    const payload = JSON.parse(atob(parts[1]));
    const exp = payload.exp;
    
    if (!exp) {
      return false;
    }
    
    const now = Date.now();
    const expTime = exp * 1000;
    
    return now < expTime;
  } catch (error) {
    console.error("TokenService: Error validating token:", error);
    return false;
  }
};
