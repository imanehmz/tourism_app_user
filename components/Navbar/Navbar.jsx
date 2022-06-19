import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  
  return (
    <>
      <div className={styles.container}>
        <div className={styles.Logo}>
            <h1>LOGO</h1>
        </div>
        <Link href="/">
          <a
            style={
              router.pathname == "/" ? { color: "#6E60EB" } : { color: "black" }
            }
          >
Map          </a>
        </Link>
        <Link href="/Mes-Annonces">
          <a
            style={
              router.pathname == "/Mes-Annonces"
                ? { color: "#6E60EB" }
                : { color: "black" }
            }
          >
            Actualités
          </a>
        </Link>
        <Link href="/Mon-Contenu">
          <a
            style={
              router.pathname == "/Mon-Contenu"
                ? { color: "#6E60EB" }
                : { color: "black" }
            }
          >
            Listes
          </a>
        </Link>
        <Link href="/Notifictions">
          <a
            style={
              router.pathname == "/Notifictions"
                ? { color: "#6E60EB" }
                : { color: "black" }
            }
          >
            Circuits
          </a>
        </Link>
        <Link href="/Statistiques">
          <a
            style={
              router.pathname == "/Statistiques"
                ? { color: "#6E60EB" }
                : { color: "black" }
            }
          >
            Notifications
          </a>
        </Link>
        <Link href="/">
          <a
            style={
              router.pathname == "/Compte"
                ? { color: "#6E60EB" }
                : { color: "black" }
            }
            onClick={()=>{
              localStorage.clear();
              router.push('/signin');
            }}
          >
            Compte
          </a>
        </Link>{" "}
      </div>
    </>
  );
};

export default Navbar;
