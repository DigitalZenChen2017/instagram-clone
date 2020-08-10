import React from 'react';
import useFireStore from '../hooks/useFireStore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFireStore('images');
  console.log(docs);

  return (
    <div className="img-grid">
      {docs &&
        docs.map((image) => (
          <motion.div
            className="img-wrap"
            key={image.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(image.url)}
          >
            <motion.img
              src={image.url}
              alt="uploadedpicture"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
