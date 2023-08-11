import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import './App.css';
import Incio from './pages/Incio';
import Product from './pages/Product';
import Pastas from './pages/Pastas';
import Elaborados from './pages/Elaborados';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Incio} /> 
      <Route exact path="/products" component={Product} /> 
      <Route exact path="/pastas" component={Pastas} /> 
      <Route exact path="/elaborados" component={Elaborados} /> 
    </Switch>
    </BrowserRouter>
  );
}

export default App;
