import { NavLink, useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { themeActions } from "../../store/theme-slice";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../firebase";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

import Drawer from "../Drawer/Drawer";
import Navbar from "./Navbar";

import styles from "./Navigation.module.scss";
import logo from "../../assets/logoCompleto.png";
import { Fragment } from "react";

const Navigation = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [showDrawer, setShowDrawer] = useState(false);

  const fetchUserName = async () => {
    console.log("feching");
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      console.log("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/login");
    fetchUserName();
  }, [user, loading]);

  const themeIsLight = useSelector((state) => state.theme.theme) === "LIGHT";
  const isAuth = useSelector((state) => state.auth.isLoggedIn);

  const toggleThemeHandler = () => dispatch(themeActions.toggleTheme());

  const addHandler = () => history.push("/add");

  const toggleshowDrawer = () => setShowDrawer((prevState) => !prevState);

  // Definicion de clases para tema

  const navClases = `${styles.nav} ${!themeIsLight ? styles["nav-dark"] : ""}`;

  return (
    <Fragment>
      <div className={navClases}>
        <div className={styles["nav-left"]}>
          <img alt="logo" src={logo} className={styles.logo} />

          {isAuth && (
            <nav className={styles.actions}>
              <ul>
                <NavLink
                  to="/grados"
                  activeClassName={styles["action-selected"]}
                  className={styles.action}
                >
                  Grados
                </NavLink>
                <NavLink
                  to="/contacto"
                  activeClassName={styles["action-selected"]}
                  className={styles.action}
                >
                  Contacto
                </NavLink>
                <NavLink
                  to="/preguntas-frecuentes"
                  activeClassName={styles["action-selected"]}
                  className={styles.action}
                >
                  Preguntas frecuentes
                </NavLink>
                <NavLink
                  to="/about-us"
                  activeClassName={styles["action-selected"]}
                  className={styles.action}
                >
                  Acerca de Nosotros
                </NavLink>
                <div className={styles.action} onClick={toggleThemeHandler}>
                  {themeIsLight ? (
                    <FontAwesomeIcon icon={faMoon} />
                  ) : (
                    <FontAwesomeIcon icon={faSun} />
                  )}
                </div>
                <button className={styles.add} onClick={addHandler}>
                  Agregar tema
                </button>
              </ul>
            </nav>
          )}
        </div>

        {isAuth && (
          <div className={styles["nav-right"]}>
            <Navbar />

            {/* <div>{name}</div>
            <div onClick={() => history.push("/perfil")}>{user?.email}</div>

            {
              <button className={styles.logout} onClick={logout}>
                Cerrar sesion
              </button>
            } */}
          </div>
        )}

        {isAuth && (
          <div className={styles.drawerIcon} onClick={toggleshowDrawer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      {showDrawer && isAuth && <Drawer toggleDrawer={toggleshowDrawer} />}
    </Fragment>
  );
};

export default Navigation;
