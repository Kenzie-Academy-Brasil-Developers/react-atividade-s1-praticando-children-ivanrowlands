//import logo from './logo.svg';
import './App.css';
import './components/CenteredCard'
import CenteredCard from './components/CenteredCard';
function App() {
  const factOne = 'Meu nome é Ivan, tenho 30 anos, nasci em são caetano do sul e continuo morando por aqui'
  const factTwo = 'Já fui dono de um time de E-Sporte'
  const factThree = 'sou viciado em jogos digitais, por conta deles que me apaixonei por programação'
  return (
    <div className="App">
      <div className = 'contentCard'>
        <CenteredCard children = {factOne} />
        <CenteredCard children = {factTwo} />
        <CenteredCard children = {factThree} />
      </div>
    </div>
  );
}

export default App;
