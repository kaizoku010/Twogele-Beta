import Header from "../components/Header";
import Head from 'next/head'
import Login from "../components/Login";
import { getSession } from "next-auth/client";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Widgets from "../components/Widgets";
import { db } from "../firebase";


export default function Home({ session, posts }) {
  if(!session) return<Login/>
  return (
    <div className=" h-screen bg-gray-100 overflow-hidden" >
      <Head>
        <title>Twogele</title>
        <meta name="description" content="chat bubble by kaizoku" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
     
      <Header />
      
      <main className="flex">
        <Sidebar />
        <Feed posts={ posts} />
      <Widgets/>
      </main>

    </div>
  )
}


export async function getServerSideProps(context) {

  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy
    ("timestamp", "desc").get();
  
  const doc = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));
  return {
    props: {
      session,
      posts: doc
    }

  }
}