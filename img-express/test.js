// const express = require('express');
const router = require('express').Router();
const fs = require('fs');
const multer = require('multer');

const upload = multer({ dest: 'images/' }); // this is folder for save images

// const router = express();

// router.use('/images', express.static('images'))
router.get('/api/images/:imageName', (req, res) => {
  // /images/:imageName = http://localhost:3000/api/images/bca52238d2adccb3d49a78c58a4d8312
  // do a bunch of if statements to make sure the user is
  // authorized to view this image, then

  const imageName = req.params.imageName;
  const readStream = fs.createReadStream(`images/${imageName}`);
  // console.log('readStreamXXXXXXXXXX', readStream);
  readStream.pipe(res);
});
// router.get('/', (req, res) => {
//   res.json({ users: ['one', 'two', 'three'] });
// });
router.post('/images', upload.single('image'), (req, res) => {
  // req.file.path = file:{path: 'images/bca52238d2adccb3d49a78c58a4d8312'}
  const imagePath = `api/${req.file.path}`;
  // // const description = req.body.description;

  // // Save this data to a database probably

  // console.log(description, imagePath);
  console.log(imagePath);
  // // console.log('files: ', req.files);
  console.log('file: ', req.file);
  // // console.log('body: ', req.body);
  res.send({ imagePath }); // http://localhost:3000/api/images/bca52238d2adccb3d49a78c58a4d8312
  // res.send('hello');
});
module.exports = router;

// router.listen(8080, () => console.log('listening on port 8080'));
