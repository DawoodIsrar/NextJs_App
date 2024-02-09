"use client";
import Link from "next/link";
import styles from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Links from "./Links/Links";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: "50px",
          // paddingInline: "100px",
        }}
      >
        <div className="logo">
          <img
            style={{ width: "100px", height: "100px", borderRadius: "100%" }}
            src="https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ"
          ></img>
        </div>
        <div className="links">
          <Links className={styles.links} />
          {/* <Link href="/">Hompepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/blog">Admin</Link>
          <Link href="/blog">LogIn</Link> */}
          {/* <Links></Links> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
