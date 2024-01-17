"use client";
import Countdown from "react-countdown";
import React from "react";
export function CountDown() {
  return (
    <div className="coutdown__container">
      <Countdown
        className="coutdown__container__num"
        date={Date.now() + 80000000}
      />
    </div>
  );
}
