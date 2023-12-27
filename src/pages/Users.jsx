import React from "react";
import UsersTable from "../features/admin/users/UsersTable";

function Users() {
  return (
    <div>
      <h1 className="text0bold text-secondary-700 text-xl mb-8">کاربران</h1>
      <UsersTable />
    </div>
  );
}

export default Users;
