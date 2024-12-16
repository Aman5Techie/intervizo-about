import AboutHero from '../components/AboutHero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import TechStack from '../components/TechStack';
import Vision from '../components/Vision';

function About() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <Features />
      <HowItWorks />
      <TechStack />
      <Vision />
    </div>
  );
}

export default About;