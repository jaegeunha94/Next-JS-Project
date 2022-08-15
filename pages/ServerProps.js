import * as React from 'react';
import axios from 'axios';
import Seo from '../components/Seo';

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

export async function getServerSideProps() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return {
    props: {
      data,
    },
  };
}
