import React from "react";
import useUser from "../features/authentication/useUser";

function Header() {
  const { data } = useUser();
  return (
    <div className="bg-secondary-0 py-4 px-8">
      <div className="container xl:max-w-screen-lg flex items-center justify-end gap-x-8">
        <HeaderMneu />
      </div>
    </div>
  );
}

export default Header;
