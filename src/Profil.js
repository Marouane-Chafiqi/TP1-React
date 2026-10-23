import PropTypes from 'prop-types';

function Profil({ nom, age, estActif }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h4>Nom : {nom}</h4>
      <p>Âge : {age} ans</p>
      <p>Statut : {estActif ? 'Actif 🟢' : 'Inactif 🔴'}</p>
    </div>
  );
}

Profil.propTypes = {
  nom: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  estActif: PropTypes.bool,
};

export default Profil;
