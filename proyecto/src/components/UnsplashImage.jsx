import React, { useState, useEffect } from 'react';
import './UnsplashImage.css';

const UnsplashImage = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessKey = 'YFy4Xf4pGwe0QXG8fTDWpeQLsZmi6WfnXAkdIka9IJ4';
    const query = 'art';
    const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}&query=${query}&count=6`;

    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data && Array.isArray(data) && data.length > 0) {
          const urls = data.map(item => item.urls.regular);
          setImageUrls(urls);
          setLoading(false); // Se establece en falso después de cargar las imágenes
        }
      } catch (error) {
        console.error('Error fetching images:', error);
        setLoading(false); // En caso de error, también se establece en falso para evitar que el indicador de carga quede permanentemente visible
      }
    };

    fetchImages();
  }, []);

  return (
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
    
  );
};

export default UnsplashImage;
