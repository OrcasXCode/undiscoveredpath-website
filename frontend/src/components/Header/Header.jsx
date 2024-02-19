import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import "./Header.css";
import { useState } from 'react';

// export function Header() {
//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-white border-gray-200 bg-opacity-100 px-4 lg:px-6 py-2.5">
//         <div style={{fontFamily:'GraublauWeb',fontWeight:'bold'}} className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img src={Logo} className="mr-3 h-12" alt="Logo" />
//           </Link>

//           <div
//             className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//             id="mobile-menu-2"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   exact
//                   to="/"
//                   className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0"
//                   activeClassName="text-purple-600"
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/aboutus"
//                   className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0"
//                   activeClassName="text-purple-600"
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contactus"
//                   className="block py-2 pr-4 pl-3 duration-200 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-600 lg:p-0"
//                   activeClassName="text-purple-600"
//                 >
//                   Register
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }






export function Header(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{fontFamily:'GraublauWeb',fontWeight:'bold'}}>
      {/* <Link to="/" className="title">
        <img src={Logo}></img>
      </Link> */}
      <Link to="/" className="flex items-center">
       <img src={Logo} className="mr-3 h-12" alt="Logo" />
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About</NavLink>
        </li>
        <li>
          <NavLink to="/contactus">Register</NavLink>
        </li>
      </ul>
    </nav>
  );
};
