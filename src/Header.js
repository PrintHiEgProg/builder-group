import "./App.css";

function Header() {
    return (
      <div className="Header">
        <div className="header-box">
          <div className="header-helper">
            <div className="lang">
              <div className="lang-text">ru</div>
            </div>
            <span className="skip">_</span>
            <div className="avatar"></div>
            <span className="skip">_</span>
          </div>
        </div>
      </div>
    );
}

export default Header;
