import Link from "next/link";
import styles from "./link.module.css";

const NavLink = ({ item }) => {
  // console.log("first>>>>", item);
  return (
    <>
      <Link href={item.path} className={styles.links}>
        {item.title}
      </Link>
    </>
  );
};

export default NavLink;
