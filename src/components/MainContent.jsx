// src/components/MainContent.jsx
import React, { useState } from 'react';
import Home from './contents/Home';
import CallForPapers from './contents/CallForPapers';
import ImportantDates1 from './contents/ImportantDates1';
import PaperSubmission from './contents/PaperSubmission';
import Registration from './contents/Registration';
import Proceedings from './contents/Proceedings';
import Committees from './contents/Committees';
import Announcements from './contents/Announcements';
import Speakers from './contents/Speakers';
import Sponsors from './contents/Sponsors';
import Venue from './contents/Venue';
import PastConferences from './contents/PastConferences';
import Tours from './contents/Tours';
import ContactUs from './contents/ContactUs';
import ScrollToTop from './contents/ScrollToTop'; 

const contentMap = {
  Home: <Home />,
  'Call for Papers': <CallForPapers />,
  'Important Dates/Schedule': <ImportantDates1 />,
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
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4 w-full max-w-[56rem] mx-auto">
      {/* Main Content Area (67%) */}
      <div className="md:col-span-4 bg-gradient-to-br from-[#e0f7fa] to-[#81d4fa] p-4 rounded-lg shadow-md">
        <section className="mb-8">
          {selectedContent}
        </section>
      </div>

      {/* Sidebar (33%) */}
      <aside className="md:col-span-2 space-y-4 w-full">
        <ImportantDates1 />
      </aside>

      <ScrollToTop /> {/* Include the ScrollToTop component */}
      {/* <Announcements /> */}
    </div>
  );
};

export default MainContent;
