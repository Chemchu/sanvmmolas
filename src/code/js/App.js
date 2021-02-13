import logo from '../../svg/heartsplosion.svg';
import '../css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Home';
import About from './About';
import CurrentTimeApi from './CurrentTimeApi';
import {ReactComponent as Photo} from '../svg/1';
import {ReactComponent as Photo2} from '../svg/2';
import {ReactComponent as Photo3} from '../svg/3';
import {ReactComponent as Photo4} from '../svg/4';

function App() {
  var mensajeBienvenida = 'Si estás leyendo esto, significa que eres María Molas (hola maria jaja)'
  var mensajePeticion = 'Solo quería desearte un feliz San Valentin. Te quiero mucho, pasa muy buen día'

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body className="App-body">
        <div>
          <h1>
            ¡Bienvenida!
          </h1>
          <div className='jumbotron'>
            <h4>
              {mensajeBienvenida}
            </h4>
            <h5>
              {mensajePeticion}
            </h5>
            <h6>
                No me ha dado tiempo a hacer más :(
            </h6>

            <div>
                <Photo/>
                <Photo2/>
                <Photo3/>
                <Photo4/>
            </div>
          </div>
          {/*<BrowserRouter>
            <Navbar />
            <div className="container mt-2" style={{ marginTop: 40 }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>*/}
          {/*<CurrentTimeApi/>*/}
        </div>
      </body>
    </div>
  );
}

export default App;
