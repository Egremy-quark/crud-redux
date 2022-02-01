import Header from './Components/Header'
import Productos from './Components/Productos'
import NuevoProducto from './Components/NuevoProducto'
import EditarProducto from './Components/EditarProducto'


import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom'

function App() {
 
  return (
    <Router>
      <Header />

      <div className='container mt-5'> 
          <Switch>
             <Route exact path="/" element={<Productos/>} />
             <Route exact path= "/productos/nuevo" element={<NuevoProducto/>} />
             <Route exact path= "/productos/editar/:id" element={<EditarProducto/>} />
          </Switch> 
      </div>
    </Router>
  );
}

export default App;