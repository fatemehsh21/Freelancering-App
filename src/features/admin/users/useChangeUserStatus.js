import { useMutation } from "@tanstack/react-query";
import { changeUserStatusApi } from "../../../services/authService";
import toast from "react-hot-toast";

export default function useChangeUserStatus() {
  const { isPending: isUpdating, mutate: changeStatusUser } = useMutation({
    mutationFn: changeUserStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, changeStatusUser };
}
