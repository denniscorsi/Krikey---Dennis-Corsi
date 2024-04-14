const NavBar = () => {
  return (
    <div id="nav-bar">
      <ul>
        <li>
          <img src="/Krikey-AI-Logo.png" />
        </li>
        <li className="menu-option">
          How to Animate <img src="/expand.png" />
        </li>
        <li className="menu-option">
          Business <img src="/expand.png" />
        </li>
        <li className="menu-option">
          Education <img src="/expand.png" />
        </li>
        <li className="menu-option">
          Social Media <img src="/expand.png" />
        </li>
        <li className="menu-option">Pricing</li>
        <li className="menu-option">About Us</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};

export default NavBar;
