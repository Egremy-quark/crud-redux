import Header from './Components/Header'
import Productos from './Components/Productos'
import NuevoProducto from './Components/NuevoProducto'
import EditarProducto from './Components/EditarProducto'


import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux';
import store from './store'

function App() {
 
  return (
    <Router>
      <Provider store = {store}>
      <Header />

      <div className='container mt-5'> 
          <Switch>
             <Route exact path="/" element={<Productos/>} />
             <Route exact path= "/productos/nuevo" element={<NuevoProducto/>} />
             <Route exact path= "/productos/editar/:id" element={<EditarProducto/>} />
          </Switch> 
      </div>
      </Provider>
    </Router>
  );
}

export default App;