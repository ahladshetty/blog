import Posts from "../models/Posts.js";
import Contacts from "../models/Contacts.js";

// ROUTE 1: show all posts items using GET '/allPosts'
export const allPosts = async (req, res) => {
  try {
    const posts = await Posts.findAll();
    // res.json(posts.map(post => ({title: post.title})));
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ROUTE 2: show all posts items using GET '/getPost'
export const getPost = async (req, res) => {
  try {
    const post = await Posts.findByPk(req.params.sno);
    if (!post) res.status(404).json({ nope: "post not found" });
    else res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ROUTE 3: contact us using POST '/contactUs'
export const contactUs = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    await Contacts.create({
      name,
      email,
      msg: message,
    });
    res.status(201).json({ success: "message recieved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
