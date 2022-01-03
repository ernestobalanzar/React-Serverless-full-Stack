import React from "react";
import { CTA, StyledTitle } from "../styled/CTA";
import { Accent } from "../styled/NavBar";

export default function Home() {
  return (
    <div>
      <StyledTitle>Ready to Type?</StyledTitle>
      <CTA to="/game">
        Click or Type <Accent>S</Accent> to start playing!
      </CTA>
    </div>
  );
}
