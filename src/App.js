import './App.css';
// import NavBar from './components/Navbar/NavBar';
// import Sidebar from './components/Sidebar/Sidebar';
import { HashRouter, Route, Switch } from "react-router-dom"

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import Home from './pages/Home';



function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;
