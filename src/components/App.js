import React from 'react';
import Header from './ui/Header';
import {ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";


function App() {
  return (
    <ThemeProvider theme={theme} color="primary">
      <Router>
      <Header/>
        <Switch>
         <Route exact path="/" component={()=><div>Home</div>}/>
         <Route exact path="/service" component={()=><div>service</div>}/>
         <Route exact path="/serviceb" component={()=><div>serviceb</div>}/>
        </Switch>
      </Router>
 
    </ThemeProvider>
  );
}

export default App;
