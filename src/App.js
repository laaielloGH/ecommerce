
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div>
        <ItemListContainer calzado="Calzado"/>
       
      </div>  
    </div>
  );
}

export default App;
