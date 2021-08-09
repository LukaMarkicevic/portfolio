import React, { useEffect, useState } from "react";

import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import ReactGA from 'react-ga';

import "./App.css";



const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
      initReactGA();
  }, []);

  const initReactGA = () => {
    ReactGA.initialize({ trackingId: process.env.REACT_APP_GOOGLE_ANALYTICS });
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  };

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <Portfolio data={resumeData.portfolio} />
      <About data={resumeData.main} />
    </div>
  );
};

export default App;
