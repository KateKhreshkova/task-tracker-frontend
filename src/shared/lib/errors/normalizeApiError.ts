import axios from "axios";

export interface ApiError {
    message: string;
    status?: number;
}

export const normalizeApiError = (error: unknown): ApiError => {
    if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const data = error.response?.data;
        if (typeof data === "string") {
            return { message: data, status };
        }
        if (data && typeof data === "object") {
            const messageFromData =
                "message" in data && typeof data.message === "string"
                    ? data.message
                    : "error" in data && typeof data.error === "string"
                        ? data.error
                        : undefined;
            if (messageFromData) {
                return { message: messageFromData, status };
            }
        }
        if (error.message) {
            return { message: error.message, status };
        }
        return { message: "Request failed.", status };
    }

    if (error instanceof Error) {
        return { message: error.message };
    }

    if (typeof error === "string") {
        return { message: error };
    }

    return { message: "Unexpected error occurred." };
};
