const express = require('express');
const fs = require('fs');
const multer = require('multer');

const upload = multer({ dest: 'img/' });

const app = express();
const testRoute = require('./test');
app.use('/api', testRoute); // end point

// app.use('/images', express.static('images'))
app.get('/api/img/:imageName', (req, res) => {
  // do a bunch of if statements to make sure the user is
  // authorized to view this image, then

  const imageName = req.params.imageName;
  const readStream = fs.createReadStream(`img/${imageName}`);
  readStream.pipe(res);
});

app.post('/api/img', upload.single('image2'), (req, res) => {
  const imagePath = req.file.path;
  const description = req.body.description;

  // Save this data to a database probably

  console.log(description, imagePath);
  res.send({ description, imagePath });
});

app.listen(8080, () => console.log('listening on port 8080'));
