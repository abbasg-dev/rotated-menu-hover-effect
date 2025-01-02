import Header from "./components/Header";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <StyledMainWrapper>
      <Header />
    </StyledMainWrapper>
  );
}

export default App;
