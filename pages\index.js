import Head from 'next/head';
import Image from 'next/image';

function Home() {
  return (
    <div className="container">
      <Head>
        <title>Argentina Football Team</title>
        <meta name="description" content="Argentina Football Team" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Argentina Football Team</h1>
      </header>

      <main>
        <Image src="/argentina-flag.png" alt="Argentina Flag" width={200} height={150} />
        <h2>La Albiceleste</h2>
        <p>Argentina national football team represents Argentina in international football.</p>
      </main>

      <footer>
        <p>&copy; 2023 Argentina Football Team</p>
      </footer>
    </div>
  );
}

export default Home;