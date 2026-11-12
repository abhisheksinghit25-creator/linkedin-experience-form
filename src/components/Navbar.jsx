
import { Link, NavLink } from "react-router-dom";
import {
  FaBriefcase,
  FaCommentDots,
  FaHouse,
  FaLinkedin,
} from "react-icons/fa6";
import UserProfile from "./UserProfile.jsx";

const navigationItems = [
  { to: "/", label: "Home", icon: FaHouse },
  { to: "/experience", label: "Experience", icon: FaBriefcase },
  { to: "/comments", label: "Comments", icon: FaCommentDots },
];

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 border-b border-blue-700 bg-blue-600 px-3 text-white shadow-sm sm:px-4">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2">
        <Link
          to="/"
          aria-label="LinkedIn home"
          className="shrink-0 rounded text-4xl text-white transition hover:text-blue-100"
        >
          <FaLinkedin aria-hidden="true" />
        </Link>

        <div className="flex min-w-0 items-center gap-1 sm:gap-5">
          <div className="flex h-16 items-center gap-1 sm:gap-5">
            {navigationItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                className={({ isActive }) =>
                  `flex h-full min-w-9 flex-col items-center justify-center gap-1 border-b-2 px-1 text-[10px] transition-colors hover:text-blue-100 sm:min-w-14 sm:text-xs ${
                    isActive
                      ? "border-white text-white"
                      : "border-transparent text-blue-100"
                  }`
                }
                end={to === "/"}
                key={to}
                to={to}
              >
                <Icon aria-hidden="true" className="text-base sm:text-lg" />
                <span className="hidden sm:block">{label}</span>
              </NavLink>
            ))}
          </div>
          <UserProfile />
        </div>
      </div>
    </nav>
  );
}