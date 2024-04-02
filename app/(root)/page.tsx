import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <>
      <div>Home</div>
      <UserButton afterSignOutUrl="/" />
    </>
  );
};

export default Home;
