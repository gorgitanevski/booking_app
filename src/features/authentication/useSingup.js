import { useMutation } from "@tanstack/react-query";
import { singup as singupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSingup() {
  const { mutate: singup, isLoading } = useMutation({
    mutationFn: singupApi,
    onSuccess: (user) => {
      toast.success(
        "Account seccessfully created! Please verufy the new account from the user's email address"
      );
    },
  });

  return { singup, isLoading };
}
