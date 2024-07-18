import Posts from '../models/Posts.js';
import jwt from 'jsonwebtoken'
import 'dotenv/config';

// ROUTE 1: login using POST '/login'
export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
  if (username != process.env.ADMIN)
    return res.status(400).json({ error: "not admin" });
  else if (password != process.env.PASS)
    return res.status(400).json({ error: "invalid credentials" });

  const data = {
    user: {
      username: username,
      password: password,
    },
  };
  
  const authtoken = jwt.sign(data, process.env.SECRET);
  res.json({ authtoken });
  } catch (error) {
    return res.status(500).send('Internal server error');
  }
};

// ROUTE 2: dashboard using GET '/admin/dashboard'
export const adminDashboard = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    res.json(posts.map((post) => ({ title: post.title })));
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ROUTE 3: create or edit post using PATCH '/admin/edit/:sno'
export const editPost = async (req, res) => {
  try {
    const { sno } = req.params;
    const { title, slug, content, img_url } = req.body;

    if (sno == 0) { // create post
      const post = await Posts.create({ title, slug, content, img_url });
      return res.status(201).json({ success: "post created" });
    } else {
      const post = await Posts.update(
        { title, slug, content, img_url },
        { where: { sno } }
      );
      if (post == 0) return res.status(404).json({ error: "post not found" });

      return res.status(200).json({ success: "post updated" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ROUTE 4: delete post using DELETE '/admin/delete/:sno'
export const deletePost = async (req, res) => {
  try {
    const { sno } = req.params;
    const post = await Posts.destroy({
      where: { sno },
    });
    console.log(post);
    if (post == 0) return res.status(404).json({ error: "post not found" });

    return res.status(200).json({ success: "post deleted" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
