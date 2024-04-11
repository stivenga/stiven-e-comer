import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data.slice(0, 3)); // Obtenemos los primeros tres productos
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (productId) => {
    // Lógica para agregar el producto al carrito
    // Puedes implementar tu lógica para manejar el carrito aquí
    // Por ejemplo, podrías utilizar el contexto del carrito para agregar el producto
  };

  return (
    <div style={styles.container}>
      <div style={styles.nav}>
        <Link to="/contacto">
          <button style={styles.button}>Contacto</button>
        </Link>
        <Link to="/">
          <button style={styles.button}>Inicio</button>
        </Link>
        <Link to="/cart">
          <button style={styles.button}>Carrito</button>
        </Link>
      </div>
      <h1>Our Products</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.product}>
            <img src={product.image} alt={product.title} style={styles.productImage} />
            <div style={styles.productInfo}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              <Link to="/cart"> {/* Utiliza Link para redirigir a la página del carrito */}
                <button style={{...styles.addToCartButton, backgroundColor: '#007bff'}} onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    textAlign: 'center',
  },
  nav: {
    backgroundColor: '#f2f2f2',
    padding: '10px 0',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1,
  },
  productList: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  product: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
  },
  productImage: {
    width: '100px', // Reducir el tamaño de la imagen
    height: '100px', // Reducir el tamaño de la imagen
    objectFit: 'cover',
    marginRight: '20px',
    borderRadius: '5px',
  },
  productInfo: {
    flex: 1,
    textAlign: 'left',
  },
  addToCartButton: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
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

export default Products;
