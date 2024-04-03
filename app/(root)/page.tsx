import { UserButton } from "@clerk/nextjs";

const Home = () => {
  //Just for commit
  return (
    <>
      <div>Home</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default Home;
