import React from 'react';
import useFireStore from '../hooks/useFireStore';

const ImageGrid = () => {
  const { docs } = useFireStore('images');
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((image) => (
          <div className="img-wrap" key={image.id}>
            <img src={image.url} alt="uploadedpicture" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
