import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create((set, get) => ({
  email: undefined,
  name: "Sai",
  image: "https://picsum.photos/100",
  error: undefined,
  setUser: (user) => {
    // Verify with server
    if (user.email === "a@a.com") {
      set({ ...user, error: undefined });
    } else {
      set({ error: "User not found!" });
    }
  },
}));

const MOCK_POST = {
  user: {
    name: "Sai",
    image: "https://picsum.photos/100/100",
  },
  images: ["https://picsum.photos/400/400", "https://picsum.photos/400/400"],
  caption: "See my photos, like it. #photo #insta",
  likes: [
    {
      user: "Vinay",
      image: "https://picsum.photos/50/50",
    },
  ],
  timestamp: new Date(),
  comments: [
    {
      user: "Pranav",
      image: "https://picsum.photos/50/50",
      content: "This is comment",
    },
  ],
};

const MOCK_POST2 = {
  user: {
    name: "Jhansi",
    image: "https://picsum.photos/90/90",
  },
  images: ["https://picsum.photos/200/200", "https://picsum.photos/400/400"],
  caption: "See my photos, like it. #photo #insta",
  likes: [],
  timestamp: new Date(+new Date() - 100000000),
  comments: [
    {
      user: "Pranav",
      image: "https://picsum.photos/50/50",
      content: "This is comment",
    },
  ],
};

const createNewPost = (user, images, caption) => {
  return {
    user,
    images,
    caption,
    likes: [],
    timestamp: new Date(),
    comments: [],
  };
};

export const usePostStore = create(
  persist(
    (set, get) => ({
      posts: [MOCK_POST, MOCK_POST2],
      createPost: (user, images, caption) => {
        const newPost = createNewPost(user, images, caption);
        set({ posts: [newPost, ...get().posts] });
      },
    }),
    {
      name: "insta-posts",
    }
  )
);
