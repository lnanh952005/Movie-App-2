import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed z-10 w-full bg-slate-900/50 px-[48px] py-2 text-white">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 sm:w-28">
              <NavLink to={"/"}>
                <img
                  src="/netflix.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </NavLink>
            </div>
            <NavLink
              to={"/movies"}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Movies
            </NavLink>
            <NavLink
              to={"/tv-shows"}
              className={({ isActive }) => (isActive ? "underline" : "")}
            >
              Tv Shows
            </NavLink>
          </div>
          <NavLink to={"/search"}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="cursor-pointer"
            />
          </NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Header;
