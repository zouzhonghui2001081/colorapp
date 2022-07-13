import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ColorData from './ColorData.json';
import {ColorStructure} from './ColorStructure';
import { ColorList } from './ColorList';

function App() {
  const colorData : ColorStructure[] = ColorData;
  const [colors, setColors] = useState(colorData);

  const rateColor = (id:string, rating:number) => {
    const newColors = colors.map(color =>
      color.id === id ? Object.assign({}, color, { rating: rating }) : color
    );
    setColors(newColors);
  };

  return <ColorList colors={colors} onRateColor={rateColor} />;
}

export default App;
