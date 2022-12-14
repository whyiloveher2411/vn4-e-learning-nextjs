import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = ({ posts }: { posts: Array<{ id: string, title: string, slug: string }> }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {posts.map((post, index) => (
            <li key={index}><Link href={"/product/" + post.slug}>{post.title}</Link></li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default Home

export async function getStaticProps() {

  const res = await fetch('https://api.spacedev.vn/api/frontend/v1.0/vn4-e-learning/page/get-page-of-group', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      group: 'legal'
    })
  });
  const posts = await res.json();
  return {
    props: {
      posts: posts.pages,
    },
  }
}
