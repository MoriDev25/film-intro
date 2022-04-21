import './App.css';
import Header from "./container/Header"
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Footer from './container/components/Footer';
import RedirectMovie from './container/Header/redirectMovie';
import RedirectTv from './container/Header/redirectTv';
import SearchMenu from './container/MenuDetail/SearchMenu';
import RedirectPeople from './container/Header/redirectPeople';
import RedirectWatchListMenu  from './container/Header/redirectWatchList';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:id" component={RedirectMovie}/>
        <Route exact path="/tv/:id" component={RedirectTv}/>
        <Route exact path="/people/:id" component={RedirectPeople} />
        <Route exact path="/watch-list/:id" component={RedirectWatchListMenu} />
        <Route exact path="/search/:searchResult" component={SearchMenu}/>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
