import Image from 'next/image';
import Seo from '../../components/Seo';

export default function Detail() {
  return (
    <div>
      <Image src="/auth.png" alt="me" layout="fill" />
      <Seo title="image" />
    </div>
  );
}
