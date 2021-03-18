const express = require('express')
const app = express()
const port = 3000
const {User, Post} = require('./models')

app.use(express.json())


////////CREATE USER //////////////////////
// POST >  http://localhost:3000/users
//  {
//     "user": {
//       "first_name": "juan",
//       "last_name": "camacho"
//      }
//  }
app.post('/users',  async(req, res) => {
  const { user } = req.body
  try {
    const userData = await User.create(user);
    return res.json(userData)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
});

/////////CREATE A POST ////////////////////
// {
//   "posts": {
//       "user_id": "1",
//       "conten": "whats up"
//   }
// }
app.post('/posts', async(req, res) => {
  const { posts } = req.body
  try {
    const postData = await Post.create(posts)
    return res.json(postData)
  } catch (err) {
    console.log(err);
    return res.status(500).json(err)
  }
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))