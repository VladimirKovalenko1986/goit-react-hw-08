import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const buildLinkClass = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <div className={css.conteiner}>
      <NavLink className={buildLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={buildLinkClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
}
