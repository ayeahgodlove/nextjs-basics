import { useRouter } from "next/router";

function PostDetails({ post }) {
  const router = useRouter();
  if(router.isFallback) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      <h1>Posts Page !</h1>

      <p>
        <strong>{post.title}</strong>
      </p>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetails;

/**
 * first
 */
export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await response.json();

  const paths = posts.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return { paths, fallback: true };
}

// fetch data within the getstaticprops for static generation
// call hooks within here and not directly inside the page component
//getstaticprops can only be ran in a standard page and not a component
// must return an object
// will run at build time
/**
 * So we implement our normal redux toolkit methods
 */
export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}
