const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/signin', (req, res) => {
  res.json('signin')
})

app.get('/', (req, res) => {
  res.send('this is working')
});

// const port = process.env.PORT || 3000;
const port = 3000;
app.listen(port, () => {
  console.log(`Server running at ${port}`)
});
