import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Icons for menu and close
import Navbar from './components/Navbar';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MainContent from './components/MainContent';

import UniversityImages from './components/UniversityImages';
import LiveSection from './components/LiveSection'; // Import the new component
import './App.css'; // Ensure Tailwind CSS is imported
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/contents/Home';
import CallForPapers from './components/contents/CallForPapers';
import ImportantDates1 from './components/contents/ImportantDates1';
import PaperSubmission from './components/contents/PaperSubmission';
import Registration from './components/contents/Registration';
import Proceedings from './components/contents/Proceedings';
import Committees from './components/contents/Committees';
import Announcements from './components/contents/Announcements';
import Speakers from './components/contents/Speakers';
import SponsorsContent from './components/contents/Sponsors';
import Venue from './components/contents/Venue';
import PastConferences from './components/contents/PastConferences';
import Tours from './components/contents/Tours';
import ContactUs from './components/contents/ContactUs';
import ScrollToTop from './components/contents/ScrollToTop';

const contentMap = {
  Home: <Home />,
  'Call for Papers': <CallForPapers />,
  'Important Dates/Schedule': <ImportantDates1 />,
  'Paper Submission': <PaperSubmission />,
  Registration: <Registration />,
  Proceedings: <Proceedings />,
  Committees: <Committees />,
  'Keynote Speakers': <Speakers />,
  Sponsors: <SponsorsContent />,
  'Venue/Accommodation': <Venue />,
  'Past Conferences': <PastConferences />,
  Tours: <Tours />,
  'Contact Us': <ContactUs />
};

function App() {
  const [selectedContent, setSelectedContent] = useState(<Home />);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (section) => {
    setSelectedContent(contentMap[section]);
    setIsOpen(false); // Close the menu on selection
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] to-[#81d4fa] text-white w-full max-w-[56rem] mx-auto">
      <Header />
      
      <Navbar handleClick={handleClick}/>

      {/* Hero Section */}
      <HeroSection />

      {/* Live Section */}
      <LiveSection />

      {/* Main Content */}
      <main className="px-2 py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-0 w-full max-w-[56rem] mx-auto">
          {/* Main Content Area (67%) */}
          <div className="md:col-span-4 bg-gradient-to-br from-[#ffffff] to-[#e0f7fa] p-2 rounded-lg shadow-md">
            <section className="mb-8">
              {selectedContent}
            </section>
          </div>

          {/* Sidebar (33%) */}
          <aside className="md:col-span-2 space-y-4 w-full">
            {/* <Announcements handleClick={handleClick} /> Include the Announcements component */}
            <ImportantDates1 />
          </aside>

          <ScrollToTop /> {/* Include the ScrollToTop component */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2017 - CICN 2024 - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
