import { useState } from 'react';
import axios from 'axios';

export default function Test() {
  const [file, setFile] = useState();
  console.log('XXXXXXXXX Share.jsx: ', file);
  // const [description, setDescription] = useState('');
  const [image, setImage] = useState();
  // console.log('XXXXXXXXX Share.jsx: ', image);

  const submit = async (event) => {
    event.preventDefault();
    // console.logo('File: ', file);

    // formData.append('description', description);

    try {
      const formData = new FormData();
      formData.append('image', file);
      const result = await axios.post('/images', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setImage(result.data.imagePath);
    } catch (err) {
      console.log('file get error', err);
    }
    // setImage(result.data.imagePath);
    // console.log('test', result.data);
  };

  return (
    <div className="Test">
      <h1>Test</h1>
      <h2>POST test.js localhost:8080/api/images</h2>
      <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept=".png, .jpeg, .jpg"
        ></input>
        {/* <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input> */}
        <button type="submit">Submit</button>
      </form>
      {image && <img src={image} />}
    </div>
  );
}
