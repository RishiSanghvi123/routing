import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getCharacters } from "./API";
import Main from "./Main";
import OneChar from "./OneChar";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    getCharacters().then((char) => {
      char.results.forEach((item)=>{
        item.show=false;
      })
      setData(char);

    });
  }, []);

  console.log(data.results);
  if (data === 0) {
    return <div></div>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element = {<Main data={data.results} />} />
          <Route exact path="/OneChar/:id" element = {<OneChar data={data.results} />} />
        </Routes>
      </Router>
      {/* <Main data={data.results} /> */}
    </div>
  );
}

export default App;
