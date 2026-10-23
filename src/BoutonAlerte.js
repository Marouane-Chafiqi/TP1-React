function BoutonAlerte({ message }) {
  const handleClick = () => {
    alert(`Message : ${message}`);
  };

  return (
    <button onClick={handleClick} style={{ padding: '8px 16px', cursor: 'pointer' }}>
      Cliquez-moi
    </button>
  );
}

export default BoutonAlerte;
