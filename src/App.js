import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        
        <nav>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src="/assets/images/bloc_jams_logo.png"/>
              </div>
                  <div className="col-md-6">
                    <Link to='/'>Landing</Link>   |
                    <Link to='/library'>Library</Link>
                </div>
              </div>
            </div>
          
        </nav>
    </header>
    <main>
    <Route exact path="/" component={Landing} />
    <Route path="/library" component={Library} />
    <Route path="/album/:slug" component={Album} />
    </main>
      </div>
    );
  }
}

export default App;
