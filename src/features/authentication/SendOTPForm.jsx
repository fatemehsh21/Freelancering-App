import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ isSendOtp, onSubmit, register }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <div>
          <TextField
            label="شماره موبایل"
            name="phonenumber"
            required
            // value={phoneNumber}
            // onChange={onChange}
            {...register("phonenumber")}
          />
        </div>
        <div>
          {isSendOtp ? (
            <Loader />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              ارسال کد تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SendOTPForm;
