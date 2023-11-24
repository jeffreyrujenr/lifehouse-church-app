import Head from "next/head";
import AuthForm from "../components/AuthForm";
import Profile from "@/components/Profile";
import useAuthContext from "@/hooks/useAuthContext";
import Navbar from "@/components/Navbar";

export default function Home() {
  const { user } = useAuthContext();

  return (
    <>
      <Head>
        <title>Lifehouse Church</title>
        <meta name="description" content="Lifehouse church app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {user ? (
        <>
          <Navbar user={user} />
          <Profile user={user} />
        </>
      ) : (
        <AuthForm />
      )}
    </>
  );
}
