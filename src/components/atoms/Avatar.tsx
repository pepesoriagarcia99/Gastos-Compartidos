import './avatar.css';

import User from "../../interfaces/User.interface";

type Props = {
  user: User;
};

export default function Avatar({ user }: Props) {
  
  return (
    <img className="Avatar"
      src={user.avatar}
      alt={user.name}
    />
  );
}