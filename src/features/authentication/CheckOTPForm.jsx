import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import Loader from "../../ui/Loader";
const RESEND_TIME = 90;

function CheckOTPForm({
  phoneNumber = "09130859584",
  onBack,
  onReSendOtp,
  otpResponse,
}) {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [time, setTime] = useState(RESEND_TIME);
  const { isPending, mutateAsync } = useMutation({
    mutationFn: checkOtp,
  });

  useEffect(() => {
    const timer =
      time > 0 &&
      setInterval(() => {
        setTime((t) => t - 1);
      }, 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [time]);

  const checkOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const { message, user } = await mutateAsync({ phoneNumber, otp });
      console.log(message, user);
      toast.success(message);
      if (!user.isActive) return navigate("/complete-profile");
      if (user.status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", {
          icon: "👏",
        });
        return;
      }
      if (user.role === "OWNER") return navigate("/owner");
      if (user.role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div>
      <button onClick={onBack}>
        <HiArrowRight className="w-6 h-6 text-secondary-500" />
      </button>
      {otpResponse && (
        <p className="flex items-center gap-x-2 my-4">
          <span>{otpResponse.message}</span>
          <button onClick={onBack}>
            <CiEdit className="w-6 h-6 text-primary-900" />
          </button>
        </p>
      )}
      <div className="mb-4 text-secondary-500">
        {time > 0 ? (
          <p>{time} ثانیه تا ارسال مجدد کد</p>
        ) : (
          <button onClick={onReSendOtp}>ارسال مجدد کد تایید</button>
        )}
      </div>
      <form className="space-y-10" onSubmit={checkOtpHandler}>
        <p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2 justify-center"
          inputStyle={{
            border: "1px solid rgb(var(--color-primary-400))",
            padding: "0.5rem 0.2rem",
            width: "2.5rem",
            borderRadius: "0.5rem",
          }}
        />
        <div>
          {isPending ? (
            <Loader />
          ) : (
            <button className="btn btn--primary w-full" type="submit">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CheckOTPForm;
