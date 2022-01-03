import React from "react";
import {
  StyleCharacter,
  StyledGame,
  StyleScore,
  StyleTimer,
  Strong,
} from "../styled/Game";

export default function Game() {
  return (
    <StyledGame>
      <StyleScore>
        Score:<Strong>0</Strong>
      </StyleScore>
      <StyleCharacter>A</StyleCharacter>
      <StyleTimer>
        Time: <Strong>00:000</Strong>
      </StyleTimer>
    </StyledGame>
  );
}
