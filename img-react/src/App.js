import { useState } from 'react';
import axios from 'axios';
import Test from './test/Test';
import Server from './server/Server';
// import qs from 'qs';

export default function App() {
  // const [file, setFile] = useState();
  // console.log('XXXXXXXXX Share.jsx: ', file);
  // // const [description, setDescription] = useState('');
  // const [image, setImage] = useState();

  // const submit = async (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append('image', file);
  //   // formData.append('description', description);

  //   const result = await axios.post('/api/images', formData, {
  //     headers: { 'Content-Type': 'multipart/form-data' },
  //   });
  //   setImage(result.data.imagePath);

  //   // try {
  //   //   const data = {
  //   //     file: file,
  //   //   };
  //   //   // console.log('new service data', data);

  //   //   const result = await axios({
  //   //     method: 'post',
  //   //     url: `/api/images`,
  //   //     headers: { 'content-type': 'multipart/form-data' },
  //   //     data: qs.stringify(data),
  //   //     withCredentials: true,
  //   //   });
  //   //   setImage(result.data.imagePath);
  //   // } catch (error) {
  //   //   console.log('Front XXXXXXXXXXX', error);
  //   // }
  // };

  return (
    <div className="App">
      <Server />
      <Test />
      {/* <form onSubmit={submit}>
        <input
          filename={file}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          accept=".png, .jpeg, .jpg"
        ></input>
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form> */}
      {/* {image && <img src={image} />} */}
    </div>
  );
}
