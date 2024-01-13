import Logo from "./Logo.svg";
import Nav from "./Nav";

function Header() {
  return (
    <header>
      <div className="container">
        <img src={Logo} alt="Little lemon logo"></img>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
