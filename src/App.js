import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";

function App() {
  const [duration, setDuration] = useState(0);
  const [jetlag, setJetlag] = useState(0);
  const [consistency, setConsistency] = useState(0);
  const [efficiency, setEfficiency] = useState(0);
  const [eveningType, setEveningType] = useState(0);
  const [morningType, setMorningType] = useState(0);
  const [quality, setQuality] = useState(0);

  const handleDurationChange = event => {
    setDuration(event.target.value);
  };

  const handleJetlagChange = event => {
    setJetlag(event.target.value);
  };

  const handleConsistencyChange = event => {
    setConsistency(event.target.value);
  };

  const handleEfficiencyChange = event => {
    setEfficiency(event.target.value);
  };

  const handleEveningTypeChange = event => {
    setEveningType(event.target.value);
  };

  const handleMorningTypeChange = event => {
    setMorningType(event.target.value);
  };

  const handleQualityChange = event => {
    setQuality(event.target.value);
  };

  return (
    <div className="App">
      <div className="gridContainer">
        <div class="sliderHeader"> <h2> Duration </h2></div>
        <Input
          value={duration}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleDurationChange}
        />
        <span class="valueField">{duration}</span>

        <div class="sliderHeader"> <h2> Social Jetlag </h2></div>
        <Input
          value={jetlag}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleJetlagChange}
        />
        <span class="valueField">{jetlag}</span>

        <div class="sliderHeader"> <h2> Consistency </h2></div>
        <Input
          value={consistency}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleConsistencyChange}
        />
        <span class="valueField">{consistency}</span>

        <div class="sliderHeader"> <h2> Efficiency </h2></div>
        <Input
          value={efficiency}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleEfficiencyChange}
        />
        <span class="valueField">{efficiency}</span>

        <div class="sliderHeader"> <h2> Evening Type </h2></div>
        <Input
          value={eveningType}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleEveningTypeChange}
        />
        <span class="valueField">{eveningType}</span>

        <div class="sliderHeader"> <h2> Morning Type </h2></div>
        <Input
          value={morningType}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleMorningTypeChange}
        />
        <span class="valueField">{morningType}</span>

        <div class="sliderHeader"> <h2> Sleep Quality </h2></div>
        <Input
          value={quality}
          type="range"
          min="0"
          max="100"
          class="sliderRange"
          onChange={handleQualityChange}
        />
        <span class="valueField">{quality}</span>

      </div>
    </div >
  );
}

export default App;

const Input = styled.input`
  background-color: red;
  margin: 20px;
  width: 90%;
`;
