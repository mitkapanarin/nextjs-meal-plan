import Link from "next/link";

const NavBar = () => {
  return (
    <div className="display-flex space-x-3">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>about</Link>
      <Link href={"/contact"}>contact</Link>
    </div>
  );
};

export default NavBar;
