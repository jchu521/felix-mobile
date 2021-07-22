import React from "react";

import "./Header.scss";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header__container">
        <div className="Header__content">
          <div className="Header__content--top">
            <div className="Header__content--top--body">
              <a>Welcome to the United Nations</a>
            </div>
          </div>
          <div className="Header__content--mid">
            <div className="Header__content--mid--body">
              <img
                alt="United Nations"
                src="https://sdgs.un.org/themes/custom/porto/assets/images/logo_mobile.svg"
              />
              <span className="header-title">
                Department of Economic and Social Affairs
                <span> Sustainable Development</span>
              </span>
            </div>
          </div>
          <div className="Header__content--bot">
            <div className="Header__content--bot--body">
              <ul class="clearfix nav navbar-nav mr-auto">
                {["home", "SDG Knowledge", "Intergovernmental Processes"].map(
                  (name, i) => (
                    <li class="nav-item" key={i}>
                      <a href="/" class="nav-link">
                        {name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
