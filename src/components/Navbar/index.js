import Link from "next/link";
import { NavContainer } from "./styles";

function Navbar() {
  return (
    <NavContainer>
      <Link href="/">
        <a>Note App</a>
      </Link>
      <Link href="/new">
        <a>Create note</a>
      </Link>
    </NavContainer>
  );
}

export default Navbar;
