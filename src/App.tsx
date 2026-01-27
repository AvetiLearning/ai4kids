import Hero from './components/Hero';
import AboutSeries from './components/AboutSeries';
import AuthorVideo from './components/AuthorVideo';
import AnimatedVideos from './components/AnimatedVideos';
import PhotoCarousel from './components/PhotoCarousel';
import LearningOutcomes from './components/LearningOutcomes';
import Testimonials from './components/Testimonials';
import ImpactSection from './components/ImpactSection';
import OrderSection from './components/OrderSection';
import Footer from './components/Footer';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><AboutSeries /></div>
      <AuthorVideo />
      <div id="videos"><AnimatedVideos /></div>
      <PhotoCarousel />
      <div id="outcomes"><LearningOutcomes /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="impact"><ImpactSection /></div>
      <OrderSection />
      <Footer />
    </div>
  );
}

export default App;
