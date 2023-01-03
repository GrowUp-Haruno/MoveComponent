import React from 'react';
import { Block1 } from './components/block';
import './styles.css';

export default function App() {
  console.log('App render');
  return (
    <div className="App">
      <Block1 blockName="block1" initialStyle={{ top: 50, left: 50, zIndex: 2, background: 'gray' }} />
      <Block1 blockName="block2" initialStyle={{ top: 200, left: 200, zIndex: 1, background: 'green' }} />
      <Block1 />
    </div>
  );
}
