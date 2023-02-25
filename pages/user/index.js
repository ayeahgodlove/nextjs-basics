import { useRouter } from "next/router";

function UsersPage({ users }) {
    const router = useRouter();
    const handleClick = (user) => {
        router.push(`/user/${user.id}`)
    }
  return (
    <div>
      <h1>Users Page !</h1>
      {users.map((user) => {
        return (
          <div key={user.id} onClick={handleClick}>
            <p>Name: {user.name}</p>
            <small>Email: {user.email}</small>
          </div>
        );
      })}
    </div>
  );
}

export default UsersPage;

// fetch data within the getstaticprops for static generation
// call hooks within here and not directly inside the page component
//getstaticprops can only be ran in a standard page and not a component
// must return an object
// will run at build time
/**
 * So we implement our normal redux toolkit methods
 */
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
