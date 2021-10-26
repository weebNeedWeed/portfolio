import { Container, styled } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopMenu from "../DesktopMenu/DesktopMenu.index";
import MobileMenu from "../MobileMenu/MobileMenu.index";

interface NavDumbProps {
  className?: string;
}

const styles = ({ theme }: any) => ({
  "& .logo": {
    marginTop: "auto",
    marginBottom: "auto",
    fontFamily: theme.custom.typography.mono,
    fontSize: "24px",
    color: theme.custom.color.green,
    width: "75px",
    textAlign: "center",
    textDecoration: "none",
    "&::before": {
      fontSize: "27px",
      content: "'<'",
      transition: "all 0.3s",
    },
    "&::after": {
      fontSize: "27px",
      content: "'>'",
      transition: "all 0.3s",
    },

    "&:hover::before": { fontWeight: "600", marginRight: "5px" },
    "&:hover::after": { fontWeight: "600", marginLeft: "5px" },
  },
});

function NavDumb(props: NavDumbProps) {
  const { className } = props;
  const match770MinWidth = useMediaQuery("(min-width:770px)");

  const renderMenu = match770MinWidth ? <DesktopMenu /> : <MobileMenu />;

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        px: {
          tablet: "25px",
          desktop: "50px",
        },
        position: "fixed",
        height: "100px",
        top: 0,
        left: 0,
        backgroundColor: "rgba(10, 25, 47, 0.85)",
        backdropFilter: "blur(10px)",
        display: "flex",
        justifyContent: "space-between",
      }}
      className={className}
    >
      <a href="#about" className="logo">
        G/
      </a>

      {renderMenu}
    </Container>
  );
}

NavDumb.defaultProps = {
  className: "",
};

export default styled(NavDumb)(styles);
