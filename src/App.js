
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <ItemListContainer calzado="Tienda Nike"/>
       
      </div>  
    </div>
  );
}

export default App;
