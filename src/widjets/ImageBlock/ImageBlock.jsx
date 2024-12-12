import { useState } from 'react';
import '../../app/styles/widjets/imageBlock/imageblock.scss';

export default function ImageBlock({ img, additionalImages = [] }) { // по умолчанию пустой массив
  const [selectedImage, setSelectedImage] = useState(img);  // по умолчанию установим главное изображение

  return (
    <div className="image-block">
      <div className="image-swatches">
        {Array.isArray(additionalImages) && additionalImages.length > 0 ? ( // Проверка, что это массив
          additionalImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className={`image-swatch ${selectedImage === image ? "selected" : ""}`}
              onClick={() => setSelectedImage(image)}
            />
          ))
        ) : (
          <p>No additional images</p>  // Сообщение, если дополнительных изображений нет
        )}
      </div>
      <div className="image-container">
        <img src={selectedImage} alt="Selected Product" />
      </div>
    </div>
  );
}