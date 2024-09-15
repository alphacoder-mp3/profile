'use server';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
const Header = () => {
  return (
    <section className="flex items-center my-16 mx-80">
      <div className="flex flex-col gap-5 mx-10 mt-5">
        <h1 className="text-3xl">Tarun Pable </h1>
        <h1 className="text-2xl"> Software Engineer in Chicago</h1>
      </div>
      <Image
        className="rounded-full h-48 w-48"
        src={siteConfig.imageURL}
        height={600}
        width={600}
        alt={'profile'}
      />
    </section>
  );
};

export default Header;
