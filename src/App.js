import './App.css';
import Header from './components/header.js';
import Banner from './components/banner.js';
import Body from './components/body.js';
import Footer from './components/footer.js';

function App() {

  const temas=["Elemento 1",
  "Elemento 2",
  "Elemento 3",
  "Elemento 4",
  "Elemento 5",];

  return (
    <div className="App">
      <Banner texto='Top Banner'/>
      <Header/>
      <Banner texto='Middle Banner'/>
      <Body practica="Esto es un arreglo" temas={temas}/>
      <Footer>{<p>Bottom Banner</p>}</Footer>
    </div>
  );
}

export default App;
