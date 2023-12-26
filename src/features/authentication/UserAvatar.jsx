import React from "react";
import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        src="/user.jpg"
        alt="user-account"
        className="w-7 h-7 rounded-full object-center object-cover"
      />
      <span>{user?.name}</span>
    </div>
  );
}

export default UserAvatar;
