'use server';
import Image from 'next/image';
const Header = () => {
  return (
    <section className="flex justify-between items-center">
      Tarun Pable
      <div className="text-xl md:text-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
        Tarun Pable
      </div>
      <Image
        className="rounded-full border border-solid border-pink-500 border-1"
        src={
          'https://scontent-atl3-2.cdninstagram.com/v/t51.2885-19/123098526_386615876036978_1838387674801656270_n.jpg?stp=dst-jpg_s150x150&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=102&_nc_ohc=CCLL0KQgDOYAb7E3Cgs&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfDl76Tc5E1g_bjblKGTa4PTriJLzKZULmyzVYwA-Q4tjQ&oe=66329CFA&_nc_sid=10d13b'
        }
        height={50}
        width={50}
        alt={'profile'}
        // style={{ borderRadius: '50%', border: '1px solid #00000080' }}
      />
    </section>
  );
};

export default Header;
