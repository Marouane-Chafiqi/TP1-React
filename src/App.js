import './App.css';
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses';
import BoutonAlerte from './BoutonAlerte';

function App() {
  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Application Principale</h1>
      <HelloWorld />
      <hr />
      <Greeting prenom="Amine" />
      <Greeting prenom="Marouane" />
      <Greeting prenom="Said" />
      <hr />
      <Profil nom="Amine" age={25} estActif={true} />
      <Profil nom="Marouane" age={22} estActif={false} />
      <hr />
      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Renault" modele="Clio" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleu" />
      <hr />
      <ListeCourses items={['Pain', 'Lait', 'Oeufs', 'Fromage']} />
      <hr />
      <BoutonAlerte message="Bienvenue dans le TP React !" />
    </div>
  );
}

export default App;
