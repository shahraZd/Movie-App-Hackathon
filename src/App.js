import React, { Component } from 'react'
import NavBar from './components/Navbar'
import { BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AddMovie from './components/AddMovie'
import './App.css';


class App extends Component {
  
  render(){
    return(
    <BrowserRouter>
        <div className="App">
        <NavBar/>
        <Route exact path="/" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/addmovie" component={AddMovie} ></Route>
        </div>    
    </BrowserRouter>)
  };
}


export default App;





