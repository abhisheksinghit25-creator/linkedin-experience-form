import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { useProfile } from "../context/ProfileContext.jsx";
import UserAvatar from "./UserAvatar.jsx";

function UserProfile() {
  const { currentUser, users, setCurrentUserId } = useProfile();
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectUser = (userId) => {
    setCurrentUserId(userId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-lg p-1 text-left text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        onClick={() => setIsOpen((open) => !open)}
        type="button"
      >
        <UserAvatar size="small" user={currentUser} />
        <span className="min-w-0">
          <span className="block whitespace-nowrap text-[11px] font-semibold leading-4 text-white sm:text-sm">
            {currentUser.fullName}
          </span>
          <span className="block whitespace-nowrap text-[9px] leading-3 text-blue-100 sm:text-xs">
            {currentUser.title}
          </span>
        </span>
        <FaChevronDown aria-hidden="true" className="hidden text-xs sm:block" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
          <p className="px-2 py-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            Switch demo profile
          </p>
          {users.map((user) => (
            <button
              aria-current={user.id === currentUser.id ? "true" : undefined}
              className="flex w-full items-center gap-3 rounded-lg p-2 text-left hover:bg-gray-100"
              key={user.id}
              onClick={() => handleSelectUser(user.id)}
              type="button"
            >
              <UserAvatar size="small" user={user} />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-gray-900">
                  {user.fullName}
                </span>
                <span className="block truncate text-xs text-gray-500">
                  {user.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserProfile;
