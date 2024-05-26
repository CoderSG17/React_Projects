import React from "react";

let points = 0;
console.log(points);

    let icons = ["😃", "👏", "🎨"];
    let x = icons[Math.floor(Math.random() * icons.length)];
    let y = icons[Math.floor(Math.random() * icons.length)];
    let z = icons[Math.floor(Math.random() * icons.length)];
  
    const check = (x === y && y === z);
    if (check) {
      points++;
      console.log(points);
      
    }

const Score=()=>{
    return (
            <h1 className="pts">Points : {points} </h1>
    );
}

export default Score;