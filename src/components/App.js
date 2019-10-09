import React from 'react';
import Navbar from "./Navbar/Navbar";
import Jumbo from "./Jumbo/Jumbo";
import Title from "./Title/Title";
import SubTitle from "./SubTitle/SubTitle";
import ThreeItemRow from "./ThreeItemRow/ThreeItemRow";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbo title={"Aaron Macken"} subTitle={"Web Developer Portfolio"} btnText={"Click here to see projects"}/>
      <main>
        <Title text={"About Me"}></Title>
      </main>
    </div>
  );
}

export default App;
