import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useScore } from "../context/ScoreContext";
import {
  StyleCharacter,
  StyledGame,
  StyleScore,
  StyleTimer,
  Strong,
} from "../styled/Game";

export default function Game() {
  const MAX_SECONDS = 5;
  const characters = "fdfkdsajkweuinvieippqkdnttawer";

  const [score, setScore] = useScore(0);
  const [currentChar, setCurrentChar] = useState("");
  const [ms, setMs] = useState(0);
  const [seconds, setSeconds] = useState(MAX_SECONDS);

  let navigate = useNavigate();

  useEffect(() => {
    setRandomChar();
    setScore(0);
    const currentTime = new Date();
    const interval = setInterval(() => updateTime(currentTime), 1);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds <= -1) {
      navigate("/gameOver");
    }
  }, [seconds, ms, navigate]);

  const handleKeyUp = useCallback(
    (e) => {
      console.log(e.key);
      if (e.key === currentChar) {
        setScore((prevScore) => prevScore + 1);
        setRandomChar();
      } else {
        if (score > 0) {
          setScore((prevScore) => prevScore - 1);
        }
      }
      setRandomChar();
    },
    [currentChar]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [handleKeyUp]);

  const updateTime = (startTime) => {
    const endTime = new Date();
    const msPassedStr = (endTime.getTime() - startTime.getTime()).toString();
    const formattedMSString = ("0000" + msPassedStr).slice(-5);
    const updatedSeconds =
      MAX_SECONDS - parseInt(formattedMSString.substring(0, 2));
    const updatedMs =
      1000 -
      parseInt(formattedMSString.substring(formattedMSString.length - 3));

    setSeconds(addLeadingZeros(updatedSeconds, 2));
    setMs(addLeadingZeros(updatedMs, 3));
  };

  const addLeadingZeros = (num, lenght) => {
    let zeros = "";
    for (let i = 0; i < lenght; i++) {
      zeros += "0";
    }
    return (zeros + num).slice(-lenght);
  };

  const setRandomChar = () => {
    const randomInt = Math.floor(Math.random() * characters.length);
    setCurrentChar(characters[randomInt]);
  };

  return (
    <StyledGame>
      <StyleScore>
        Score:<Strong>{score}</Strong>
      </StyleScore>
      <StyleCharacter>{currentChar}</StyleCharacter>
      <StyleTimer>
        Time:{" "}
        <Strong>
          {seconds}:{ms}
        </Strong>
      </StyleTimer>
    </StyledGame>
  );
}
