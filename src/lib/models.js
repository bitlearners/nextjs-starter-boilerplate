import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userID: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    seoId: {
      type: String,
      required: true,
      unique: true,
    },
    tag: {
      type: String,
      required: true,

    },
    category: {
      type: String,
      required: true,

    },

  },
  { timestamps: true }
);

const seoSchema = new mongoose.Schema(
  {
    ptitle: {
      type: String,
      required: true,
    },
    pdesc: {
      type: String,
      required: true,
    },
    pkeywords: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Seo = mongoose.models.Seo || mongoose.model("Seo", seoSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);



