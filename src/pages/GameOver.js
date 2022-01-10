import React from "react";
import { useScore } from "../context/ScoreContext";
import { useNavigate } from "react-router-dom";
import { StyleLinkButton } from "../styled/NavBar";

export default function GameOver() {
  const [score] = useScore();
  let navigate = useNavigate();

  if (score === -1) {
    navigate("/");
  }
  return (
    <div>
      <h1>Game Over</h1>
      <p>{score}</p>
      <StyleLinkButton to="/">Home</StyleLinkButton>
      <StyleLinkButton to="/game">Play Again</StyleLinkButton>
    </div>
  );
}
