import { FC } from 'react';
import ParticlesBackground from '../styles/particules/ParticlesBackround';
import Banner from '../component/layout/Banner';
import Services from '../component/layout/Services';

const Home: FC = () => {
  return (
    <div className="home">
      <ParticlesBackground />
      <Banner />
      <Services />
    </div>
  );
};

export default Home;