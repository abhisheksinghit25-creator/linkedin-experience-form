const avatarSizes = {
  small: "h-8 w-8",
  medium: "h-10 w-10",
  large: "h-12 w-12",
};

function UserAvatar({ user, size = "medium" }) {
  return (
    <img
      alt={`${user.fullName}'s profile`}
      className={`shrink-0 rounded-full object-cover ${avatarSizes[size]}`}
      src={user.avatarUrl}
    />
  );
}

export default UserAvatar;
