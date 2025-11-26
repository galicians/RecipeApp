import Logo from '../assets/ChefClaudeIcon.png';

export default function Header() {
  return (
    <header className="header">
      <nav className="navBar">
        <img className="header-logo" src={Logo} alt="Logo" />
        <span>Chef Claude</span>
      </nav>
    </header>
  );
}
