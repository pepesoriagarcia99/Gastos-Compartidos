import React from "react";
import type { RootState } from "../../store";
import { useSelector } from "react-redux";

import "../../css/components/header.css";
// import "../../css/vendor/flex.css";

import Avatar from "./Avatar";

export default function Header() {
  const user = useSelector((state: RootState) => state.user);
  // const dispatch = useDispatch()

  return (
    <div className="header">
      <h2 className="title">Gastos Compartidos</h2>
      <Avatar user={user}></Avatar>
    </div>
  );
}

// Component
// interface User {
//   name: string;
//   age: number;
//   address: string;
//   dob: Date;
// }

// export default class UserComponent extends React.Component<User, {}> {
//   constructor(props: User) {
//     super(props);
//   }

//   render() {
//     return (
//       <div>
//         <h1>User Component</h1>
//         Hello, <b>{this.props.name}</b>
//         <br />
//         You are <b>{this.props.age} years old</b>
//         <br />
//         You live at: <b>{this.props.address}</b>
//         <br />
//         You were born: <b>{this.props.dob.toDateString()}</b>
//       </div>
//     );
//   }
// }

// USO:
// <UserComponent name="John Doe" age={26} address="87 Summer St, Boston, MA 02110" dob={new Date()} />
