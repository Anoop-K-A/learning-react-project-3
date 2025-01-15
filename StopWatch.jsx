import React, { useState, useRef, useEffect } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);
  function start() {}
  function stop() {}
  function reset() {}
  function formatTime() {}
  useEffect(() => {}, [isRunning]);
  return (
    <>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button onClick={start} className="start-button">
            Start
          </button>
          <button onClick={stop} className="start-button">
            Stop
          </button>
          <button onClick={reset} className="start-button">
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default StopWatch;
