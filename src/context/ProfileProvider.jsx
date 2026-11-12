import { useMemo, useState } from "react";
import { ProfileContext } from "./ProfileContext.jsx";

const demoUsers = [
  {
    id: "aarav",
    fullName: "Abhishek Singh",
    title: "Full Stack Developer",
    avatarUrl: "/avatars/aarav.svg",
  },
  {
    id: "maya",
    fullName: "Maya Patel",
    title: "Product Designer",
    avatarUrl: "/avatars/maya.svg",
  },
  {
    id: "kabir",
    fullName: "Kabir Verma",
    title: "Full Stack Engineer",
    avatarUrl: "/avatars/kabir.svg",
  },
];

function ProfileProvider({ children }) {
  const [currentUserId, setCurrentUserId] = useState(demoUsers[0].id);
  const currentUser = demoUsers.find((user) => user.id === currentUserId);
  const usersById = useMemo(
    () => Object.fromEntries(demoUsers.map((user) => [user.id, user])),
    [],
  );
  const contextValue = useMemo(
    () => ({
      currentUser,
      users: demoUsers,
      usersById,
      setCurrentUserId,
    }),
    [currentUser, usersById],
  );

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileProvider };
