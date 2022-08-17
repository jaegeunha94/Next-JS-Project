import * as React from 'react';
import axios from 'axios';
import Seo from '../../components/Seo';

export default function Home({ data }) {
  return (
    <div className="container">
      <Seo title="ServerProps" />
      {data?.map((user) => (
        <div>{user.name}</div>
      ))}
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users`
  );

  const paths = data.map((post) => ({
    params: { id: post.username },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/`
  );
  return {
    props: { data },
    // revalidate 속성을 사용해 해당 주기마다 파일 업데이트를 검사할 수 있음.
    revalidate: 15, // (서버시간 기준 15초마다 db.json의 갱신여부를 검사함.
  };
}
