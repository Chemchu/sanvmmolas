import logo from '../../svg/heartsplosion.svg';
import '../css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Home';
import About from './About';
import CurrentTimeApi from './CurrentTimeApi';

function App() {
  var mensajeBienvenida = 'Si estás leyendo esto, significa que eres María Molas (hola maria jaja)'

  var esHora = CurrentTimeApi


  var mensajePeticion = 'Si no eres María, cierra la página anda. Si eres María, dale al botón de abajo para seguir jeje'

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
          </div>
          <BrowserRouter>
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
          </BrowserRouter>
          {/*<CurrentTimeApi/>*/}
        </div>
      </body>
    </div>
  );
}

export default App;
