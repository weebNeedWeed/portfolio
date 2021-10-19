import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(({ theme }: any) => ({
  color: theme.custom.color,
  fontFamily: theme.custom.typography.sans,
  fontWeight: 400,
  fontSize: 20,
}));
const StyledDiv2 = styled("div")(({ theme }: any) => ({
  color: theme.custom.color,
  fontFamily: theme.custom.typography.mono,
  fontWeight: 600,
  fontSize: 100,
}));

function App() {
  return (
    <div>
      <StyledDiv>
        Hello! My name is Brittany and I enjoy creating things that live on the
        internet. My interest in web development started back in 2012 when I
        decided to try editing custom Tumblr themes — turns out hacking together
        a custom reblog button taught me a lot about HTML & CSS!
      </StyledDiv>
      <StyledDiv2>sadasidias</StyledDiv2>
    </div>
  );
}

export default App;
