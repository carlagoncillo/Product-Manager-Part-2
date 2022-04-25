import './App.css';
import Form from './components/Form';
import List from './components/List';
import Product from './components/Product';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/products">
          <Form />
          <List />
        </Route>
        <Route exact path="/products/:id">
          <Product/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
