import { useState } from "react";
import { styled } from "@mui/material";
import { CSSTransition } from "react-transition-group";

interface MobileMenuProps {
  className?: string;
}

const styles = ({ theme }: any) => ({
  marginTop: "auto",
  marginBottom: "auto",

  "& .button": {
    padding: "15px",
    border: "none",
    outline: "none",
    display: "block",
    backgroundColor: "inherit",
    transition: theme.custom.common.transition,
    zIndex: "11",
    position: "absolute",
    top: "25%",
    right: "3%",
    cursor: "pointer",

    "&:focus": {
      outline: `2px dashed ${theme.custom.color.green}`,
      outlineOffset: "3px",
    },
  },

  "& .box": {
    width: "30px",
    height: "24px",
    position: "relative",
  },

  "& .icon": {
    width: "100%",
    height: "2px",
    top: "50%",
    right: 0,
    position: "absolute",
    margin: 0,
    backgroundColor: theme.custom.color.green,
    transition: theme.custom.common.transition,

    "&::before": {
      position: "absolute",
      width: "100%",
      height: "2px",
      right: 0,
      top: "-10px",
      content: "''",
      margin: 0,
      backgroundColor: theme.custom.color.green,
      transition: theme.custom.common.transition,
    },
    "&::after": {
      position: "absolute",
      width: "100%",
      height: "2px",
      right: 0,
      top: "10px",
      content: "''",
      margin: 0,
      backgroundColor: theme.custom.color.green,
      transition: theme.custom.common.transition,
    },
  },

  "& .menu-wrapper": {
    position: "fixed",
    top: 0,
    right: 0,
    width: "min(75vw, 400px)",
    height: "100vh",
    backgroundColor: theme.custom.color.lightNavy,
    zIndex: "10",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontFamily: theme.custom.typography.mono,
    margin: 0,
    padding: 0,
  },

  ".menu-enter": {
    transform: "translateX(100%)",
  },
  ".menu-enter-active": {
    transform: "translateX(0)",
    transition: theme.custom.common.transition,
  },
  ".menu-exit": {
    transform: "translateX(0)",
  },
  ".menu-exit-active": {
    transform: "translateX(100%)",
    transition: theme.custom.common.transition,
  },

  "& .link": {
    textDecoration: "none",
    padding: "3px 20px 20px",
    counterIncrement: "section",
    fontSize: "18px",
    color: theme.custom.color.lightestSlate,
    marginBottom: "20px",
    transition: theme.custom.common.transition,

    "&::before": {
      display: "block",
      content: "'0'counter(section)'.'",
      color: theme.custom.color.green,
      marginBottom: "5px",
      fontSize: "14px",
    },

    "&:hover": {
      color: theme.custom.color.green,
    },
  },

  "& .resume": {
    border: `1px solid ${theme.custom.color.green}`,
    borderRadius: theme.custom.common.borderRadius,
    color: theme.custom.color.green,
    textDecoration: "none",
    fontSize: "13px",
    transition: theme.custom.common.transition,
    padding: "18px 50px",
    margin: "10% auto 0px",

    "&:hover": {
      backgroundColor: theme.custom.color.greenTint,
      outline: "none",
    },
  },

  "& .iconclick": {
    transition: theme.custom.common.transition,
    transform: "rotate(225deg)",
    top: "50%",

    "&::before": {
      top: 0,
      transition: theme.custom.common.transition,
    },

    "&::after": {
      top: 0,
      transform: "rotate(-90deg)",
      transition: theme.custom.common.transition,
    },
  },
});

function MobileMenu(props: MobileMenuProps) {
  const { className } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setShowMenu((prev: boolean) => !prev);
  };

  const renderBlurDiv = showMenu ? (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 8,
        backgroundColor: "#000",
        opacity: 0.5,
      }}
    ></div>
  ) : null;

  return (
    <div className={className}>
      <button className="button" type="button" onClick={handleToggleMenu}>
        <div className="box">
          <div className={`icon ${showMenu ? "iconclick" : ""}`}></div>
        </div>
      </button>

      {renderBlurDiv}

      <CSSTransition
        in={showMenu}
        timeout={400}
        unmountOnExit
        mountOnEnter
        classNames="menu"
      >
        <div className="menu-wrapper">
          <a href="#about" className="link">
            About
          </a>

          <a href="#jobs" className="link">
            Experience
          </a>

          <a href="#projects" className="link">
            Work
          </a>

          <a href="#contact" className="link">
            Contact
          </a>

          <a href="#asdas" className="resume">
            Resume
          </a>
        </div>
      </CSSTransition>
    </div>
  );
}

MobileMenu.defaultProps = {
  className: "",
};

export default styled(MobileMenu)(styles);
