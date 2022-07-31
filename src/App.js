
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        {/* <ItemListContainer calzado="Tienda Nike"/> */}
        <ItemDetailContainer title="Detalle de producto"/>
       
      </div>  
    </div>
  );
}

export default App;
