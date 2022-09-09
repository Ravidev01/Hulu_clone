import {React,useState }from "react";
import Header from "./components/Header/Header";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import requests from "./helpers/requests";
import Resultes from "./components/Results/Resultes";
import Footer from "./components/Footer/Footer";


function App() {

    const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);
    console.log(selectedOption);

  return (
    <div className="App">
      <Header/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Resultes selectedOption={selectedOption}/>
      <Footer/>
    </div>
  );
}

export default App;
