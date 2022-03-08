import { Link } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 800) {
      setOpen(true);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        {/* <div className='logo'>
                    < Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/.png`}
                            alt='brand' 
                            className='logo'/>
                    </Link>
                </div> */}
        <div className="list-wrapper">
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
            alt="menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
            alt="menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <li>
                <Link to="/home">
                  {" "}
                  <ion-icon name="home-outline" size="large"></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <ion-icon
                    name="information-circle-outline"
                    size="large"
                  ></ion-icon>
                </Link>
              </li>
              <li>
                <Link to="/gallery">
                  <ion-icon name="images-outline" size="large"></ion-icon>
                </Link>
              </li>
              <li>
                  <Link to='/cart'>
                  <ion-icon name="bag-handle-outline" size='large'></ion-icon>
                      </Link>
              </li>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
