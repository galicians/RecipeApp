import Logo from '../assets/ChefClaudeIcon.png';

export default function Header() {
  return (
    <header className="header">
        <img className="header-logo-img" src={Logo} alt="Logo" />
        <span className='text-logo'>Chef Claude</span>
    </header>
  );
}
