import Head from 'next/head'
import Section1 from '../components/Sections/Section1';
import Section2 from '../components/Sections/Section2';
import Section3 from '../components/Sections/Section3';
import Section4 from '../components/Sections/Section4';

export default function Home({ data }) {

  return (
    <>
      <Head>
        <title>Soumendu Das | Fullstack Developer</title>
        <meta name="description" content="Portfolio website of Soumendu Das. Having 2 years experience in the field, learning new everyday." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="sections-wrapper">
        <Section1 />
        <Section2 />
        <div className="divider"></div>
        <Section3 />
        <div className="divider"></div>
        <Section4 projects={data}/>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`https://gh-pinned-repos-5l2i19um3.vercel.app/?username=${process.env.owner}`)

  const data = await res.json();

  if(!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      data
    }
  }
}