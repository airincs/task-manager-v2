import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar/Navbar";
import TaskList from "../components/tasks/TaskList";

const Home: NextPage = () => {
  return (
    <div className="bg-gradient-to-tl from-violet-100 to-purple-200 overflow-y-auto">
      <Head>
        <title>Task Manager</title>
      </Head>
      <Navbar />
      <div className="font-custom1 smooth-scroll container mx-auto px-4 md:px-16 min-h-screen overflow-y-hidden max-w-4xl">
        <TaskList />
      </div>
    </div>
  );
};

export default Home;
