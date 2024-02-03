import { connectToDB } from "./utils";
import { Post, User, Seo } from "./models";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch Posts !");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch Post !");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.error("Error fetching user:", err.message);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("faild to fetch users !");
  }
};
export const getSeo = async (id) => {
  try {
    connectToDB();
    const seo = await Seo.findById(id);
    return seo;
  } catch (err) {
    console.error("Error fetching seo:", err.message);
    throw new Error("Failed to fetch seo!");
  }
};

export const getLatestPosts = async (limit = 7) => {
  try {
    connectToDB();
    const allPosts = await Post.find().sort({ createdAt: -1 });
    const latestPosts = allPosts.slice(0, Math.min(limit, allPosts.length));
    return latestPosts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch latest posts!");
  }
};



// export const getPostsByTag = async(tag) => {
  // src/lib/data.js


// Assuming you have a model for your posts named 'Post'

export const getPostsByTag = async (tag) => {
  try {
    // Ensure that the connection to the database is established
    await connectToDB();

    // Validate if tag parameter is provided
    if (!tag || typeof tag !== 'string') {
      throw new Error('Invalid or missing tag parameter');
    }

    // Form the MongoDB query using a regular expression to match the tag in the comma-separated list
    const query = { tag: { $regex: new RegExp(tag, 'i') } };
    

    // Use the Post model to find posts
    const posts = await Post.find(query);

    // Check if no posts are found for the specified tag(s)
    if (!posts || posts.length === 0) {
      console.log('No posts found for the specified tag(s).');
      return [];
    }

    return posts;
  } catch (error) {
    // Log and throw an error if there's an issue fetching posts by tag
    console.error('Error fetching posts by tag:', error);
    throw new Error('Failed to fetch posts by tag');
  }
};


export const getPostsByCate = async (category) => {
  try {
    // Ensure that the connection to the database is established
    await connectToDB();

    // Validate if category parameter is provided
    if (!category || typeof category !== 'string') {
      throw new Error('Invalid or missing category parameter');
    }

    // Form the MongoDB query using a regular expression to match the category in the comma-separated list
    const query = { category: { $regex: new RegExp(category, 'i') } };


    // Use the Post model to find posts
    const posts = await Post.find(query);

    // Check if no posts are found for the specified category(s)
    if (!posts || posts.length === 0) {
      console.log('No posts found for the specified category(s).');
      return [];
    }

    return posts;
  } catch (error) {
    // Log and throw an error if there's an issue fetching posts by category
    console.error('Error fetching posts by category:', error);
    throw new Error('Failed to fetch posts by category');
  }
};



// search start





export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, content } = req.body;
      const newPost = new Post({ title, content });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

// search end



export const getAllCategories = async () => {
  try {
    await connectToDB();

    // Use the distinct method to get unique categories
    const categories = await Post.distinct('category');

    if (!categories || categories.length === 0) {
      console.log('No categories found.');
      return [];
    }

    // Split each category string into an array and flatten the arrays
    const allCategoriesArray = categories
      .map(categoryString => categoryString.split(', '))
      .flat();

    // Use a Set to store unique categories
    const uniqueCategoriesSet = new Set(allCategoriesArray);

    // Convert the Set back to an array
    const uniqueCategoriesArray = Array.from(uniqueCategoriesSet);

    // Print the unique categories array
    // console.log(uniqueCategoriesArray);

    // Return the array of unique categories
    return uniqueCategoriesArray;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw new Error('Failed to fetch categories');
  }
};



