// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

const apiKey = process.env.REACT_APP_NEWS_API


const [progress, setProgress] = useState(0)


    return (
      <>
        <BrowserRouter>
          <Navbar NavbarTopic={"News headlines - Top Headlines "} />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {setProgress} apiKey={apiKey} key={"business"} pageSize={17} country={"us"} category={"business"} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {setProgress} apiKey={apiKey} key={"entertainment"} pageSize={17} country={"us"} category={"entertainment"} />}></Route>
            <Route exact path="/general" element={<News setProgress = {setProgress} apiKey={apiKey} key={"general"} pageSize={17} country={"us"} category={"general"} />}></Route>
            <Route exact path="/health" element={<News setProgress = {setProgress} apiKey={apiKey} key={"health"} pageSize={17} country={"us"} category={"health"} />}></Route>
            <Route exact path="/science" element={<News setProgress = {setProgress} apiKey={apiKey} key={"science"} pageSize={17} country={"us"} category={"science"} />}></Route>
            <Route exact path="/sports" element={<News setProgress = {setProgress} apiKey={apiKey} key={"sports"} pageSize={17} country={"us"} category={"sports"} />}></Route>
            <Route exact path="/technology" element={<News setProgress = {setProgress} apiKey={apiKey} key={"technology"} pageSize={17} country={"us"} category={"technology"} />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
}


export default App

