
import Header from './components/navbar/Header';
import Loading from './Loading';
import HeroHome from './components/navbar/Home/HeroHome';
import SocialNav from './components/navbar/Home/SocialNav';
import Footer from './components/navbar/Footer';
import AboutHome from './components/AboutHome';
import CoreValues from './components/CoreValues';

const App = () => {
  return (
    <div>
      <Loading />
      <Header />
      <HeroHome />
      <AboutHome />
      <CoreValues />
      <SocialNav />
      <Footer />
    </div>
  );
};

export default App;