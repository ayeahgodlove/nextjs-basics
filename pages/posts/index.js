import { useRouter } from "next/router";

function PostsPage({ posts }) {
  const router = useRouter();
  const handleClick = (post) => {
    console.log("post: ", post);
    router.push(`/posts/${post.id}`);
  };
  return (
    <div>
      <h1>Posts Page !</h1>
      {posts.map((post) => {
        return (
          <div key={post.id} onClick={()=>handleClick(post)}>
            <p>
              <strong>{post.title}</strong>
            </p>
            {/* <small>Email: {post.email}</small> */}
          </div>
        );
      })}
    </div>
  );
}

export default PostsPage;

// fetch data within the getstaticprops for static generation
// call hooks within here and not directly inside the page component
//getstaticprops can only be ran in a standard page and not a component
// must return an object
// will run at build time
/**
 * So we implement our normal redux toolkit methods
 */
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return {
    props: {
      posts: data.slice(0, 3),
    },
  };
}
