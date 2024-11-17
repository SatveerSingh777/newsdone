// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react'
import Navbar from './componets/Navbar'
import News from './componets/News'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress : 0
  }

  setProgress = (progress) =>{
    this.setState({
      progress : progress 
    })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar NavbarTopic={"News headlines - Top Headlines "} />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"business"} pageSize={17} country={"us"} category={"business"} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"entertainment"} pageSize={17} country={"us"} category={"entertainment"} />}></Route>
            <Route exact path="/general" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"general"} pageSize={17} country={"us"} category={"general"} />}></Route>
            <Route exact path="/health" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"health"} pageSize={17} country={"us"} category={"health"} />}></Route>
            <Route exact path="/science" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"science"} pageSize={17} country={"us"} category={"science"} />}></Route>
            <Route exact path="/sports" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"sports"} pageSize={17} country={"us"} category={"sports"} />}></Route>
            <Route exact path="/technology" element={<News setProgress = {this.setProgress} apiKey={this.apiKey} key={"technology"} pageSize={17} country={"us"} category={"technology"} />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    )
  }
}



