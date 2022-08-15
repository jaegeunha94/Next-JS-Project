import Link from 'next/dist/client/link';
import Seo from '../components/Seo';

export default function Home() {
  return (
    <>
      <Seo title="Home" />
      <h1>안녕, Next.js</h1>
      <h2>
        <Link href="/about">
          <a style={{ background: 'black', color: 'white' }}>소개</a>
        </Link>
      </h2>
    </>
  );
}
