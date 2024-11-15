// pages/index.tsx
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Layout from '@/components/template/Layout';
import bg from '@/assets/Asset 1@2x 1.png';
import CardSection from '@/components/molecules/CardSection';
import Tooltip from '@/components/atoms/Tooltip';
import CardSlider from '@/components/organisms/CardSlider';
import Tooltip2 from '@/components/atoms/Tooltip2';
import SlidingRow from '@/components/molecules/Sliding';

type UserData = {
  cards: object,
};

type HomeProps = {
  users: UserData[];
};

const Home: React.FC<HomeProps> = ({ users }) => {
  return (
    <Layout>
      <div className="text-center w-screen h-screen">
        <Image className='absolute -z-10 bg-ground' src={bg} alt='' />
        <div className='grid md:grid-cols-3 sm:grid-cols-1 items-center w-full h-full px-4'>
          <div>
            <div>
              <h2 className='md:text-5xl sm:text-2xl text-left animate-fade-in-up'>최고의 실력을 가진 외국인 인재를 찾고 계신가요?</h2>
              <Tooltip />
              <p className='md:text-2xl sm:text-xl text-left mt-3 w-2/3 animate-fade-in-up'>법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.</p>
              <p className='md:text-2xl sm:text-xl text-left mt-3 w-2/3'>개발자가 필요하신가요?</p>
            </div>
            <div>
              <CardSection />
            </div>
          </div>
          <div className='flex justify-center items-center col-span-2 h-full'>
            <Tooltip2 />
            <div className='w-1/2'>
              <CardSlider cards={users} />
            </div>
          </div>
          <div className="absolute top-[80vh] col-span-3">
            <SlidingRow />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users');
    
    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }
    
    const users: UserData[] = await response.json();
    console.log("users", users);
    
    return {
      props: {
        users,
      },
    };
  } catch (error) {
      console.error("Error fetching users:", error instanceof Error ? error.message : String(error));

      // Optionally, return a fallback or empty users array to prevent rendering issues
      return {
        props: {
          users: [],
          error: error instanceof Error ? error.message : "An unknown error occurred",
        },
      };
    }
};

export default Home;
