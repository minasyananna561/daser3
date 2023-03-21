import React, { useEffect, useState } from "react"
import TimerWrap from "./TimerWrap";
import StyledButton from "./StyledButton";

export let Page10=()=>{
    const [isOn, setIsOn] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(
    () => {
      let interval;

      if (isOn) {
       
        interval = setInterval(() => setTimer((item) => item + 1), 1000);
      }
      return () => clearInterval(interval);
    },
    [isOn] 
  );

  const onReset = () => {
    setIsOn(false);
    setTimer(0);
  };
    return(
        <TimerWrap>
      <h1>useEffect() </h1>
      
      Timer: {timer}
      
      {!isOn && (
        <StyledButton type="button" onClick={() => setIsOn(true)}>
          Start
        </StyledButton>
      )}
      {isOn && (
        <StyledButton isOn type="button" onClick={() => setIsOn(false)}>
          Stop
        </StyledButton>
      )}
      <StyledButton
        isReset
        type="button"
        disabled={timer === 0}
        onClick={onReset}
      >
        Reset
      </StyledButton>
    </TimerWrap>
    )
}