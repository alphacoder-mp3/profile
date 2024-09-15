'use server';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
const Header = () => {
  return (
    <section className="flex justify-center my-16">
      <div className="flex items-center justify-center flex-col sm:flex-row gap-2 sm:gap-0">
        <div className="flex flex-col gap-5 mt-5">
          <h1 className="text-3xl">Tarun Pable </h1>
          <h1 className="text-2xl w-72"> Software Engineer from India</h1>
        </div>

        <Image
          className="rounded-full h-48 w-48"
          src={siteConfig.imageURL}
          height={600}
          width={600}
          alt={'profile'}
        />
      </div>
    </section>
  );
};

export default Header;
