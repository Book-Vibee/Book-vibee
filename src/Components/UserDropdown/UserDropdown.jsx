import React from "react";
import useAuth from "../../Hooks/useAuth";


const UserDropdown = () => {
  const { user, logoutUser } = useAuth();
  const handleLogout = () => {
    logoutUser();
     
  };
  
  return (
    <div className="dropdown dropdown-center">
      <div tabIndex={0}>
        <div className="avatar avatar-online cursor-pointer">
          <div className="w-10 rounded-full">
            <img  src={user?.photoURL ? user.photoURL : "/public/usesricon.png"} />
          </div>
        </div>
      </div>

      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-1 shadow-md bg-base-100 rounded-box w-36 space-y-1"
      >
        <li>
          <button className="w-full px-2 py-1 text-sm font-medium rounded-md hover:bg-base-200 transition-colors">
            Profile
          </button>
        </li>
        <li>
          <button onClick={handleLogout} className="w-full px-2 py-1 text-sm font-medium text-error rounded-md hover:bg-error hover:text-white transition-colors">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
