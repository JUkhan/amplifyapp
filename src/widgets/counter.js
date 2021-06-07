import React from "react";
import { Get } from "ajwah-store";
import { useStream } from "./hooks";
import { CounterState } from "../states/counterState";

export const Counter = () => {
  const csCtrl = Get(CounterState);

  const data = useStream(csCtrl.count$, "");

  return (
    <p>
      <button className="btn" onClick={() => csCtrl.inc()}>
        +
      </button>
      <button className="btn" onClick={() => csCtrl.dec()}>
        -
      </button>
      <button className="btn" onClick={() => csCtrl.dispatch("asyncInc")}>
        async(+)
      </button>
      {data}
    </p>
  );
};
