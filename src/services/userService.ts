import { UpdateEmailRequest } from "@/models/UpdateEmailRequest";
import { getAuthToken } from "./tokenService";
import { UpdateNameRequest } from "@/models/UpdateNameRequest";
import { UpdateAddressRequest } from "@/models/UpdateAddressRequest";
import { UpdateNewsletterSubscribeRequest } from "@/models/updateNewsletterSubscribeRequest";

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

export const deactivateUser = async (userId: string) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userId}/deactivate`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Failed to deactivate user: ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
};

export const deleteUser = async (userId: string) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userId) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userId}/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Error response:", errorText);
      throw new Error(
        `Failed to delete account: ${res.status} ${res.statusText} - ${errorText}`
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Network error:", error);
    throw error;
  }
};

export const updateUserAddress = async (userData: UpdateAddressRequest) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userData.id) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userData.id}/address`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        address: userData.address,
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

export const updateUserNewsletterSubscribe = async (
  userData: UpdateNewsletterSubscribeRequest
) => {
  const token = getAuthToken();

  if (!token) {
    throw new Error("No auth token found");
  }

  if (!userData.id) {
    throw new Error("User ID is required");
  }

  try {
    const res = await fetch(`${API_BASE_URL}/user/${userData.id}/newsletter`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        isNewsletterSubscribed: userData.isNewsletterSubscribed,
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
