import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/jpg', 'image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0]; // select first uploaded file
    console.log(selected);

    // If file exists AND includes one of the above types change state to selected
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError(null);
    } else {
      setError(
        'Not a valid file type! Please select an image file (jpg, png, jpeg).'
      );
    }
  };
  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};

export default UploadForm;
