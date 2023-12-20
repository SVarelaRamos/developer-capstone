import Logo from "./Logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little lemon logo"></img>
      <Nav />
    </header>
  );
}

export default Header;
