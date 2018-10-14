import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import AvengersList from './components/AvengersList';
import Home from './components/Home';
import AvengerPage from "./components/AvengerPage";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/avengers" component={AvengersList} />
                <Route path="/avengers/:id" component={AvengerPage} />
            </div>
        )
    }
}

export default App
