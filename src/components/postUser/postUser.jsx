import { getUser } from "@/lib/data";

const PostUser = async ({ userId }) => {
  try {
    const user = await getUser(userId);
    console.log("User:", user); // Log the user object
    return (
      <div>
        {user && user.username ? user.username : "Username not available"}
      </div>
    );
  } catch (error) {
    console.error("Error fetching user:", error);
    return <div>Error fetching user</div>;
  }
};

export default PostUser;
