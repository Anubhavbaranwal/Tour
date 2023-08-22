import React, { useEffect, useState } from "react";
import "./App.css";
import Tour from "./Tour";
import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [load, setLoad] = useState(true);
  const fetchtours = async () => {
    setLoad(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      console.log(data);
      setLoad(false);
      setTours(data);
    } catch (error) {
      setLoad(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchtours();
  }, []);
  const removeTour = (id) => {
    const newTours = tours.filter((tours) => tours.id != id);
    setTours(newTours);
  };
  if (tours.length === 0) {
    return (
      <div>
        <h1>No Tours left...Please Refresh</h1>
        <button onClick={() => fetchtours()}>Refresh</button>
      </div>
    );
  }

  if (load) {
    return <Loading />;
  }
  return (
    <div>
      <Tour tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
