//Spread operator (...followed by array name )
// koi bhi array ko concat/show krne ke liye aise kr skte hai without writing/specifying complete array  

//Case1
const fullname = ["vinod", "thapa"];
const biodata = [1, ...fullname, 26, "male"];
console.log(fullname);
console.log(biodata);

//Case2
var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
var racingGames = ['Need For Speed', 'Gran Turismo', 'Burnout'];
var games = [...shooterGames, ...racingGames];
console.log(games)

//Case3
var shooterGames = ['Call of Duty', 'Far Cry', 'Resident Evil'];
var [first, ...remaining] = shooterGames;
console.log(first); //Call of Duty
console.log(remaining);

//Case4

//yeh ek object hai 
const fullName = {
    fname: "vinod",
    lname: "thapa",
};

const Biodata = {
    id: 1,
    ...fullName, // yahan pr humne us object ko kind of call kr diya  
    age: 26,
    gender: "male",
};

console.log(Biodata);