import { UpdateEmailRequest } from "@/models/UpdateEmailRequest";
import { getAuthToken } from "./tokenService";
import { UpdateNameRequest } from "@/models/UpdateNameRequest";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

if (!API_BASE_URL) {
  throw new Error(
    "API_BASE_URL is not defined. Please set NEXT_PUBLIC_API_URL in your environment variables."
  );
}

export const updateUserName = async (userData: UpdateNameRequest) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userData.id) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userData.id}/name`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Failed to update user: ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
};

export const updateUserEmail = async (userData: UpdateEmailRequest) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userData.id) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userData.id}/email`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        email: userData.email,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Failed to update user: ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await res.json();
    } else {
      return { success: true };
    }
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
};
