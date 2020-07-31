import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) { // when url is available meaning file is completely uploaded, setFile = null
      setFile(null);
    }
  }, [setFile, url]);

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>;
};

export default ProgressBar;
