import HeaderAuth from "@/components/common/headerAuth";
import Head from "next/head";



const HomeAuth =  () => {
  return (
    <>
			<Head>
        <title>CursoFlix - Home</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      </Head>
      <main>
	  <HeaderAuth />

      </main>
    </>
  );
};

export default HomeAuth;