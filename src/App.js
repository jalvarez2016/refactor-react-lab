import NavBar from './components/NavBar';
import Header from './components/Header';
import './App.css';
import CardContainer from './components/CardContainer';

function App() {
  const pageData = [{text: "About", link: "/about"}, {text: "Our Team", link: "/team"}, {text: "Pricing", link: "/pricing"}];

  return (
    <div className="App">
      <NavBar pages={pageData} />
      <Header title="Refactor Page"/>
      <CardContainer />
    </div>
  );
}

export default App;
