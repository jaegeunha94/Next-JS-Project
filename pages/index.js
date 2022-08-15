import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <div className="container">
      <button onClick={() => onClick(movie.id, movie.original_title)} />
    </div>
  );
}
