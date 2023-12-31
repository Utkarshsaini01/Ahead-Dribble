import Navbar from '../components/Navbar';
import Firstpage from '../components/Firstpage';
import EQbeats from '../components/EQbeats';
import DoesThisSound from '../components/DoesThisSound';
import MeetAhead from '../components/MeetAhead';
import SelfImprovement from '../components/SelfImprovement';
import BeBest from '../components/BeBest';
import EverWondered from '../components/EverWondered';
import BeforeGetStarted from '../components/BeforeGetStarted';
import WorkWithUs from '../components/WorkWithUs';
import Vacancies from '../components/Vacancies';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <>
      <Navbar />
      <Firstpage />
      <EQbeats />
      <DoesThisSound />
      <MeetAhead />
      <SelfImprovement />
      <BeBest />
      <EverWondered />
      <BeforeGetStarted />
      <WorkWithUs />
      <Vacancies />
      <Footer />
      </>
  );
}
