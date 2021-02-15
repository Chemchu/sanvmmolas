import logo from '../../svg/heartsplosion.svg';
import '../css/App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './Home';
import About from './About';
import Photo from '../../svg/1.png';
import Photo2 from '../../svg/2.png';
import Photo3 from '../../svg/3.png';
import Photo4 from '../../svg/4.png';

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
                <img src={Photo} width="200px" height="200px" marginLeft="30px"/>
                <img src={Photo2} width="200px" height="200px" marginLeft="30px"/>
                <img src={Photo3} width="200px" height="200px" marginLeft="30px"/>
                <img src={Photo4} width="200px" height="200px" marginLeft="30px"/>
            </div>
          </div>
          
        </div>
      </body>
    </div>
  );
}

export default App;
