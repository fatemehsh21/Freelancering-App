import React, { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
  const [step, setStep] = useState(2);
  const [phoneNumber, setPhoneNumber] = useState("09130859584");
  const { register, handleSubmit, getValues } = useForm();
  const {
    isPending: isSendOtp,
    error,
    data: otpResponse,
    mutateAsync,
  } = useMutation({
    mutationFn: getOtp,
  });

  const sendOtpHandler = async (data) => {
    try {
      const { message } = await mutateAsync({ phoneNumber });
      setStep(2);
      toast.success(message);
    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOTPForm
            isSendOtp={isSendOtp}
            // phoneNumber={phoneNumber}
            // onChange={(e) => setPhoneNumber(e.target.value)}
            onSubmit={handleSubmit(sendOtpHandler)}
            register={register}
          />
        );
      case 2:
        return (
          <CheckOTPForm
            phoneNumber={getValues("phoneNumber")}
            onBack={() => setStep(1)}
            onReSendOtp={sendOtpHandler}
            otpResponse={otpResponse}
          />
        );
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
