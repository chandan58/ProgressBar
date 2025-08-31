import './App.css';
import React, { useState, useEffect } from 'react';

const ProgressBar = ({ progress }) => {
  const [animationProgressTime, setAnimationProgressTime] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationProgressTime(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animationProgressTime - 100}%)`,
          color: progress < 5 ? 'black' : 'white',
        }}
        role="progressbar"
        area-valuenow={progress}
        area-valuemax="100"
        area-valuemin="0"
      >
        {animationProgressTime}%
      </div>
    </div>
  );
};

function App() {
  const percentage = [10, 40, 60, 80];
  return (
    <div>
      <div>Progress Bar</div>
      {percentage.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}

export default App;
