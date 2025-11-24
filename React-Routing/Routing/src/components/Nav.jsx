import { Link, NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav className="w-full p-1 bg-zinc-500 pl-4 flex items-center gap-4 text-2xl font-serif text-green-200 rounded-full ">
      <NavLink
        to="/"
        className="hover:text-black hover:font-extrabold is"
        style={(e) => {
          return { color: e.isActive ? "red" : "" };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/users"
        className="hover:text-black hover:font-extrabold"
        
        >
        Users
      </NavLink>
      <NavLink
        to="/about"
        className="hover:text-black hover:font-extrabold"
        style={(e) => {
          return {
            color: e.isActive ? "red" : "",
            fontSize: e.isActive ? "28px" : " ",
          };
        }}
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
