import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './UnsplashImage.css';

const UnsplashImage = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const accessKey = 'YFy4Xf4pGwe0QXG8fTDWpeQLsZmi6WfnXAkdIka9IJ4';
    const query = 'art';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}&count=12`;

    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
          const urls = data.map(item => item.urls.regular);
          setImageUrls(urls);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Descubre Arte en Todo el Mundo</h1>
    <div className={`container ${location.pathname === '/UnsplashImage' ? 'unsplash-page' : ''}`}>
      <div className="image-container">
        {loading && <p>Cargando imágenes...</p>}
        {!loading &&
          imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Unsplash Art Image ${index + 1}`}
              className="image-item"
              onLoad={() => console.log(`Imagen ${index + 1} cargada`)}
            />
          ))}
      </div>
    </div>
    <div className="back-to-home">
        <button>
          <NavLink className='nav-link' to='/'>Regresar a la página principal</NavLink>
        </button>
      </div>
    </div>
  );
};

export default UnsplashImage;
