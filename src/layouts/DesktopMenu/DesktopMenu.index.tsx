import { styled } from "@mui/material";

interface DesktopMenuProps {
  className?: string;
}

const styles = ({ theme }: any) => ({
  marginTop: "auto",
  marginBottom: "auto",
  fontFamily: theme.custom.typography.mono,
  "& .menu": {
    display: "flex",
    justifyContent: "center",
  },
  "& .link": {
    padding: "8px",
    margin: "0 5px",
    color: theme.custom.color.lightestSlate,
    counterIncrement: "section",
    textDecoration: "none",
    fontSize: "13px",
    transition: theme.custom.common.transition,

    "&:focus": {
      color: theme.custom.color.green,
      outline: `2px dashed ${theme.custom.color.green}`,
      outlineOffset: "3px",
    },

    "&::before": {
      content: "'0'counter(section)'.'",
      marginRight: "5px",
      color: theme.custom.color.green,
    },
  },

  "& .resume": {
    padding: "8px 16px",
    border: `1px solid ${theme.custom.color.green}`,
    borderRadius: theme.custom.common.borderRadius,
    marginLeft: "15px",
    color: theme.custom.color.green,
    textDecoration: "none",
    fontSize: "13px",
    transition: theme.custom.common.transition,

    "&:hover": {
      backgroundColor: theme.custom.color.greenTint,
      outline: "none",
    },
  },
});

function DesktopMenu(props: DesktopMenuProps) {
  const { className } = props;

  return (
    <div className={className}>
      <div className="menu">
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
    </div>
  );
}

DesktopMenu.defaultProps = {
  className: "",
};

export default styled(DesktopMenu)(styles);
