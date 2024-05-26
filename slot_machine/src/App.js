import React from 'react';
import './App.css';
// import Score from './Score';


const Slot = () => {
  // let x = "😂";
  // let y = "😂";
  // let z = "😂";

    let points = 0;
    let icons = ["😃", "👏", "🎨"];
    let x = icons[Math.floor(Math.random() * icons.length)];
    let y = icons[Math.floor(Math.random() * icons.length)];
    let z = icons[Math.floor(Math.random() * icons.length)];
  
    const check = (x === y && y === z);
    if (check) {
      points++;
    }

    

  // points = props.points;
  
  // let y = props.y;
  // let z = props.z;

  if ((x === y) && (y === z))
    return (
      <>
        <div className="slot_inner">
          <h1>{x}{y}{z}{points}</h1>
          <h1>Matching</h1>
        </div>

      </>
    )
  else
    return (
      <>
        <div className="slot_inner">
          <h1>{x}{y}{z}{points}</h1>
          <h1>Not matching</h1>
        </div>
      </>
    )
  
}

function App() {
  return (
    <>
      <div className='heading_style'>🎰Welcome To <span className='title'>Slot Game Machine</span>🎰</div>
      <div class='slotmachine'>
        <Slot > </Slot>
        <Slot > </Slot>
        <Slot > </Slot>
        <Slot > </Slot>
        {/* <Score> </Score> */}
      </div>
    </>
  );
}

export default App;
