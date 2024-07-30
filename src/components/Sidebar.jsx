/* eslint-disable no-unused-vars */
import React from 'react';
import { Card } from 'react-bootstrap';

const Sidebar = () => (
  <div>
    <Card className="mb-3">
      <Card.Header><b>Announcements</b></Card.Header>
      <Card.Body>
        <ul>
          <li><a href="index.html"><b>Home</b></a></li>
          <li><a href="Call_for_papers.html"><b>Call for Papers</b></a></li>
          <li><a href="Important_Dates.html"><b>Important Dates/Schedule</b></a></li>
          <li><a href="Paper_Submission.html"><b>Paper Submission</b></a></li>
          <li><a href="Registration.html"><b>Registration</b></a></li>
          <li><a href="Proceedings.html"><b>Proceedings</b></a></li>
          <li><a href="Committees.html"><b>Committees</b></a></li>
          <li><a href="Speakers.html"><b>Keynote Speakers</b></a></li>
          <li><a href="Sponsors.html"><b>Sponsors</b></a></li>
          <li><a href="Venue.html"><b>Venue/Accommodation</b></a></li>
          <li><a href="Past_Conf.html"><b>Past Conferences</b></a></li>
          <li><a href="Tours.html"><b>Tours</b></a></li>
          <li><a href="contact_us.html"><b>Contact Us</b></a></li>
        </ul>
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <Card.Header><b>Conference Organised and Hosted by</b></Card.Header>
      <Card.Body>
        <img src="/assets/mp.jpg" alt="Organiser 1" className="w-full h-auto mb-2" />
        <img src="/assets/ou.jpg" alt="Organiser 2" className="w-full h-auto" />
      </Card.Body>
    </Card>

    <Card className="mb-3">
      <Card.Header><b>Conference Technically Co-Sponsored by</b></Card.Header>
      <Card.Body>
        <img src="/assets/mir.jpg" alt="Co-Sponsor 1" className="mr-2" />
        <img src="/assets/iete1.jpg" alt="Co-Sponsor 2" className="mr-2" />
        <img src="/assets/pmu.jpg" alt="Co-Sponsor 3" />
      </Card.Body>
    </Card>
  </div>
);

export default Sidebar;
