import { createContext, useContext } from "react";

const ProfileContext = createContext(null);

function useProfile() {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider.");
  }

  return context;
}

export { ProfileContext, useProfile };
