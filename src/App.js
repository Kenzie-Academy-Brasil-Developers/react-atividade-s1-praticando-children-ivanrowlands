//import logo from './logo.svg';
import "./App.css";
import "./components/CenteredCard";
import CenteredCard from "./components/CenteredCard";
function App() {
  const factOne =
    "Meu nome é Ivan, tenho 30 anos, nasci em são caetano do sul e continuo morando por aqui";
  const factTwo = "Já fui dono de um time de E-Sporte";
  const factThree =
    "sou viciado em jogos digitais, por conta deles que me apaixonei por programação";
  return (
    <div className="avo">
      <CenteredCard>{factOne}</CenteredCard>
      <CenteredCard>{factTwo}</CenteredCard>
      <CenteredCard>{factThree}</CenteredCard>
    </div>
  );
}

export default App;
