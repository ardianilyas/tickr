// src/utils/handleTrpcError.ts
import { TRPCClientError } from "@trpc/react-query";
import { toast } from "sonner";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export function handleTrpcError(error: unknown, router: AppRouterInstance) {
  if (error instanceof TRPCClientError) {
    const code = error?.data?.code;
    const message = encodeURIComponent(error.message);

    switch (code) {
      case "UNAUTHORIZED":
        toast.error("You are not signed in.");
        router.push("/sign-in"); // ⬅️ redirect tanpa reload
        break;

      case "FORBIDDEN":
        toast.error(error.message || "You do not have permission to access this resource.");
        router.push(`/403?message=${message}`);
        break;

      case "NOT_FOUND":
        toast.error(error.message || "The resource you are looking for could not be found.");
        router.push(`/404?message=${message}`);
        break;

      default:
        toast.error(error.message || "Unexpected error");
        break;
    }
  }
}