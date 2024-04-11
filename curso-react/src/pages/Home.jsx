import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <Link to="/contacto">
          <button style={styles.button}>Contacto</button>
        </Link>
        <Link to="/">
          <button style={styles.button}>Inicio</button>
        </Link>
      </div>
      <div style={styles.content}>
        <h1>Welcome to Our E-Commerce Store</h1>
        <p>Explore our latest products and find great deals.</p>
        <Link to="/products">
          <button style={styles.button}>View Products</button>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
  },
  header: {
    backgroundColor: '#f2f2f2',
    padding: '10px 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1,
  },
  content: {
    paddingTop: '50px', // Ajuste para evitar que el contenido se solape con el header
    textAlign: 'center',
  },
  button: {
    margin: '0 10px',
    padding: '5px 10px',
    fontSize: '0.8em',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;



