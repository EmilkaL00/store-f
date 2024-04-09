// import { NavLink } from "react-router-dom";
// import "./navbar.scss";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <div className="logo">IKONAA</div>
//         <div className="nav-elements">
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/blog">Users</NavLink>
//             </li>
//             <li>
//               <NavLink to="/projects">Sign in</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">Cart</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import {
  HomeTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [current, setCurrent] = useState<string>("h"); // current ma typ string
  const onClick = (e: { key: React.Key }) => {
    // e.key ma typ React.Key
    console.log("click ", e);
    setCurrent(e.key.toString()); // konwertuj na string
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="h" icon={<HomeTwoTone />}>
          <Link to="/home">Home</Link>
        </Menu.Item>
        <Menu.Item key="r" icon={<EditTwoTone />}>
          <Link to="/register">Register</Link>
        </Menu.Item>
        <Menu.Item key="l" icon={<CheckCircleTwoTone />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="c" icon={<CheckCircleTwoTone />}>
          <Link to="/cart">Cart</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};

export default Header;
