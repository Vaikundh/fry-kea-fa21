import './img/frykea-logo.png'
import './App.css';
import Home from './Pages/Home/Home.jsx'
import ListingView from './Pages/Listing View/ListingView';
import {listings} from './Data.json'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  var arr = [];
        Object.keys(listings).forEach(function(key) {
        arr.push(listings[key]);
        });
  return (
    <div className="App">
      <Home>

      </Home>
      <div className="listings">
      <Router>      
        <Switch>
            <Route exact path='/1' exact component={Home} />
            <Route exact path='/2' exact component={Home} />
            <Route exact path='/3' exact component={Home} />             
        </Switch>
      </Router>
      <ListingView>
          
      </ListingView>
      </div>
    </div>
  );
}

export default App;
