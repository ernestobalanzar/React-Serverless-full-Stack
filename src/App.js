import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Game from "./pages/Game";
import HighScores from "./pages/HighScores";
import GameOver from "./pages/GameOver";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { Container } from "./styled/Container";
import { Main } from "./styled/Main";
import Global from "./styled/Global";

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <NavBar />
          <Routes>
            <Route exact path="/game" element={<Game />} />
            <Route exact path="/highScores" element={<HighScores />} />
            <Route exact path="/gameOver" element={<GameOver />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
