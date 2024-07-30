import React, { useState } from 'react';
import Home from './contents/Home';
import CallForPapers from './contents/CallForPapers';
import ImportantDates from './contents/ImportantDates';
import PaperSubmission from './contents/PaperSubmission';
import Registration from './contents/Registration';
import Proceedings from './contents/Proceedings';
import Committees from './contents/Committees';
import Speakers from './contents/Speakers';
import Sponsors from './contents/Sponsors';
import Venue from './contents/Venue';
import PastConferences from './contents/PastConferences';
import Tours from './contents/Tours';
import ContactUs from './contents/ContactUs';
import ScrollToTop from './contents/ScrollToTop'; 
import Announcements from './contents/Announcements'; // Import the new Announcements component

const contentMap = {
  Home: <Home />,
  'Call for Papers': <CallForPapers />,
  'Important Dates/Schedule': <ImportantDates />,
  'Paper Submission': <PaperSubmission />,
  Registration: <Registration />,
  Proceedings: <Proceedings />,
  Committees: <Committees />,
  'Keynote Speakers': <Speakers />,
  Sponsors: <Sponsors />,
  'Venue/Accommodation': <Venue />,
  'Past Conferences': <PastConferences />,
  Tours: <Tours />,
  'Contact Us': <ContactUs />
};

const MainContent = () => {
  const [selectedContent, setSelectedContent] = useState(<Home />);

  const handleClick = (section) => {
    setSelectedContent(contentMap[section]);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-full">
      {/* Main Content Area (80%) */}
      <div className="md:col-span-5 bg-gray-800 p-4 rounded-lg w-full">
        <section className="mb-8">
          {selectedContent}
        </section>
      </div>

      {/* Sidebar (20%) */}

      
      {/* <aside className="md:col-span-1 space-y-4 w-full">
        
        <Announcements handleClick={handleClick} />
      </aside> */}

      <ScrollToTop /> {/* Include the ScrollToTop component */}
    </div>
  );
};

export default MainContent;
