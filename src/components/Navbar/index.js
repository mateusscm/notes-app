import Link from 'next/link';
import { NavContainer } from './styles';

function Navbar() {
  return (
      <NavContainer>
          <Link href="/">
              <a className="navbar-brand">Note App</a>
          </Link>
          <Link href="/new">
              <a className="create">Create note</a>
          </Link>
      </NavContainer>
  );
}

export default Navbar;