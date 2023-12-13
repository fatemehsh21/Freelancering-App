import React, { useState } from "react";
import TextField from "../../ui/TextField";
import Loader from "../../ui/Loader";

function SendOTPForm({ isSendOtp, onSubmit, phoneNumber, onChange }) {
  return (
    <div>
      <form className="space-y-10" onSubmit={onSubmit}>
        <div>
          <TextField
            label="شماره موبایل"
            name="phonenumber"
            value={phoneNumber}
            onChange={onChange}
          />
        </div>
        <div>
          {isPending ? (
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
