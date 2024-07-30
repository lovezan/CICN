import React from 'react';
import './Committee.css'; // Import the CSS file for styling

const Committee = () => {
  return (
    <div className="col-md-9">
      <div id="info" className="committee-container">
        <center>
          <h1 className="hd">Committees</h1>
        </center>
        <p className="intro-text">
          <strong>Conference is organised in Hybrid Mode</strong>
        </p>

        <div className="committee-section">
          <h2 className="section-title">Conference Committee</h2>
          <div className="committee-role">
            <h3>Honorary Chair</h3>
            <ul>
              <li>Prof. Dhruv Ghai, Oriental University Indore</li>
              <li>Prof. GS Tomar, REC Sonbhadra</li>
              <li>Prof. Garima Ghai, Oriental University Indore</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>General Chair</h3>
            <ul>
              <li>Prof. Shailendra Singh, Oriental University, Indore</li>
              <li>Prof. Manish Dixit, MITS Gwalior</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>General Co-Chair</h3>
            <ul>
              <li>Dr. Abul Bashar, PMU</li>
              <li>Dr. Robin Singh Bhadoria, NIT Hamirpur</li>
              <li>Dr. Manish Vyas, Oriental University, Indore</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Technical Program Committee Chair</h3>
            <ul>
              <li>Dr. Atul Agarwal, Oriental University, Indore</li>
              <li>Dr. Vivek Singh Kushwah, CBIT Hyderabad</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Finance Committee Chairs</h3>
            <ul>
              <li>Dr. MPS Chawla, SGSITS Indore</li>
              <li>Dr. K Musti, NUST, Namibia</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Publication Committee Chairs</h3>
            <ul>
              <li>Dr. Megha Singh, Oriental University, Indore</li>
              <li>Mr. Anubhav Singh, Redbus Pvt Ltd</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Workshop Chairs</h3>
            <ul>
              <li>Dr. Ashraf Samarah, University of Michigan</li>
              <li>Dr. Alhad Kuwadekar, Netherlands</li>
              <li>Dr. Debnath Bhattacharyya, KL University</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Publicity Committee Chairs</h3>
            <ul>
              <li>Dr. Jagdish Bansal, SAU, Delhi</li>
              <li>Dr. Kashif Amjad, PMU, KSA</li>
              <li>Dr. Bishwajeet Pandey, IT University Astana</li>
              <li>Dr. Noorbakhsha, Mississippi Univ, USA</li>
              <li>Dr. Jitendra Agrawal, RGPV Bhopal</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Hospitality Committee Chairs</h3>
            <ul>
              <li>Dr. Nazeeruddin Mohammad, PMU, KSA</li>
              <li>Dr. Ilyes Jenhani, PMU, KSA</li>
              <li>Dr. Taha Houda, PMU, KSA</li>
              <li>Dr. Jawad Alkhateeb, PMU, KSA</li>
            </ul>
          </div>

          <div className="committee-role">
            <h3>Technical Program Committee</h3>
            <ul>
              <li>Prof. Tai Hoon Kim, Korea</li>
              <li>Prof. Dr. Mehmet Efe, Turkey</li>
              <li>Dr. Layth AbdulRasool, Iran</li>
              <li>Prof. NS Chaudhari, IIT Indore, India</li>
              <li>Dr. MKS Sastry, NUST Namibia</li>
              <li>Prof. Dr. Ilias Savvas, Greece</li>
              <li>Dr. Ratheesh Kumar Meleppa, University of California Davis</li>
              <li>Dr. Sanjay Sutar, BATU Lonere</li>
              <li>Prof. Manjushree Adhha, BATU Lonere</li>
              <li>Dr. Brijesh Iyyer, BATU Lonere</li>
              <li>Prof. Manmohan Shukla, PSIT Kanpur</li>
              <li>Dr. Dharmendra Dixit, REC Sonbhadra</li>
              <li>Dr. NS Jadhav, BATU Lonere</li>
              <li>Prof. Fahrettin Sadıkoğlu, Cyprus</li>
              <li>Prof. Ali Haydar, Cyprus</li>
              <li>Dr. Kamil Dimililer, Cyprus</li>
              <li>Mr. Abhineet Tomar, Volvo, Sweden</li>
              <li>Dr. Hüseyin Öztoprak, Cyprus</li>
              <li>Dr. Tayfun Nesimoğlu, Cyprus</li>
              <li>Prof. Ciro Rodriguez, Peru</li>
              <li>Dr. Vivek Singh Kushwah, Amity Gwalior</li>
              <li>Prof. Stephen Wagner, Brazil</li>
              <li>Prof. Jorge Barbosa, Brazil</li>
              <li>Prof. Rajeev Tripathi, MNNIT Allahabad</li>
              <li>Dr. KV Arya, IIITM Gwalior</li>
              <li>Dr. Harkirat Singh, Samsung, USA</li>
              <li>Dr. Ngoc Tu Nguyen, Missouri University, USA</li>
              <li>Dr. Maman Abdurohman, Institut Teknologi Telkom, Indonesia</li>
              <li>Prof. Dr. Hai Jiang, Arkansas State University, USA</li>
              <li>Dr. Varun Jeoti, Petronas, Malaysia</li>
              <li>Dr. Joanne Scillitoe, Michigan Tech Univ, USA</li>
              <li>Prof. Dr. Helen Karatza, Greece</li>
              <li>Prof. Dr. Anna Lekova, Bulgaria</li>
              <li>Dr. Azrin Aris, Malaysia</li>
              <li>Dr. Jongman Cho, Korea</li>
              <li>Dr. BDK Patro, REC Kannauj</li>
              <li>Dr. Ranjeet Singh, ITM University</li>
              <li>Dr. Neeraj Shrivastava, RJIT</li>
              <li>Dr. Sanjay Kushwah, GEC</li>
              <li>Dr. Mamdouh Gouda, Egypt</li>
              <li>Dr. Beatris M, Spain</li>
              <li>Dr. Sani Sushanto, Indonesia</li>
              <li>Dr. Yong Ju Lee, Korea</li>
              <li>Dr. Amit Ojha, MANIT, Bhopal</li>
              <li>Prof. Dr. M.C. Govil, MNIT, Jaipur, India</li>
              <li>Prof. Dr. O.B.V. Ramanaiya, JNTU, Hyderabad, India</li>
              <li>Prof. Dr. Alaknanda Ashok, WIT Dehradun</li>
              <li>Prof. Dr. Pedro Albertos, Univ. Politecnica Valencia, Spain</li>
              <li>Prof. Dr. Mandava Rajeshwari, USM, Malaysia</li>
              <li>Dr. Xua Han, Kains Ave, USA</li>
              <li>Prof. Dr. Shailendra Singh, NITTTR</li>
              <li>Prof. Dr. Victor Govindaswamy, USA</li>
              <li>Prof. Dr. MS Whang, Brazil</li>
              <li>Dr. Trapti Jain, IIT Indore, India</li>
              <li>Dr. A.A. Lofti Neyestanak, Iran</li>
              <li>Prof. Dr. Houssem Jerbi, Lecap-Tunisia</li>
              <li>Prof. Dr. P. Chatterjee, National Tech. University, Argentina</li>
              <li>Dr. Aresh Dadlani, University of Tehran, Iran</li>
              <li>Prof. Dr. N. Krishnan, MSU, India</li>
              <li>Prof. Dr. B.K. Kanaujia, JNU Delhi</li>
              <li>Prof. Dr. Ghanshyam Singh, MNIT, Jaipur, India</li>
              <li>Dr. Surendra Gupta, Delhi</li>
              <li>Dr. BK Kaushik, IIT Roorkee</li>
              <li>Mr. Kunal Patel, Ingenuity Systems, USA</li>
              <li>Dr. Sahnaz Ayub, BIET, Jhansi, India</li>
              <li>Dr. Amitabha Dublin University</li>
              <li>Dr. Alhad Kuwadekar, Univ of South Wales, UK</li>
              <li>Dr. Hon Tat Hui, NUS, Singapore</li>
              <li>Dr. Ashok Singh, IIT Patna, India</li>
              <li>Dr. Yusuke NOJIMA, Osaka Prefecture University</li>
              <li>Prof. Dr. Frédéric Pinel, Luxembourg</li>
              <li>Dr. N.Ch.Sriman Narayana Iyengar, VIT Vellore, India</li>
              <li>Dr. Manoj Shukla, HBTI, Kanpur, India - Track Chair</li>
              <li>Dr. Shuza Binzaid, Texas University</li>
              <li>Prof. Mario KOEPPEN, Kyushu Inst of Tech. Fukuoka, Japan</li>
              <li>Prof. Dr. Michele Vadursi, University of Naples "Parthenope", Italy</li>
              <li>Dr. Rawya Rizk, Port-Said University, Egypt</li>
              <li>Dr. Junichi FUNASAKA, Hiroshima City University, Japan</li>
              <li>Dr. Mourad Abbas, Phonetics and Speech Processing Lab, crstdla, Algiers</li>
              <li>Dr. Zutao Zhu, Google Inc., Japan</li>
              <li>Dr. Simon Dobson, Univ. of St. Andrews, UK</li>
              <li>Dr. Amitabha Chakraborty, Dublin Univ, Ireland</li>
              <li>Prof. Jaime Caro, University of Philippines, Philippines</li>
              <li>Dr. Debnath Bhattacharyya, Kolkata</li>
              <li>Dr. Bruno Fernandes</li>
              <li>Mr. Abhineet Tomar, VOLVO Sweden</li>
              <li>Dr. DK Tripathi, REC Sonbhadra</li>
              <li>Dr. BK Chaurasia, IIIT Lucknow</li>
              <li>Dr. Paolo Roborto Grassi, Milan, Italy</li>
              <li>Dr. Bareh Asadi, Iran</li>
              <li>Dr. Sanjeev Sharma, RGPV Bhopal</li>
              <li>Dr. Biju Issac, Teesside University, Middlesbrough, Tees Valley, UK</li>
              <li>Prof. Dr. Cai Zhimming, Macau Univ, China</li>
              <li>Dr. Neeraj Shrivastava, RJIT Jaipur</li>
              <li>Dr. Laxmit Shrivastava, MITS Gwalior</li>
              <li>Prof. MPS Chawla, SGSITS Indore</li>
              <li>Dr. Manmohan Shukla, PSIT Kanpur</li>
              <li>Dr. Ruidan Su, Dalian, China - Track Chair</li>
              <li>Dr. Roshan Chhetri, Bhutan</li>
              <li>Prof. Dr. Li Jun Zhang, Champlain College, USA</li>
              <li>Dr. Arvind Singh, UWI Trinidad</li>
              <li>Dr. Jitendra Agrawal, RGPV Bhopal</li>
              <li>Dr. Ashiish Bagwari, WIT Dehradun</li>
              <li>Dr. Amir Houmansadr, University of Texas, Austin</li>
              <li>Dr. Thorsten Schöler, Germany</li>
              <li>Dr. Zhiyuan Tan, Australia</li>
              <li>Dr. Ashish Agrawal, Boston Univ, USA</li>
              <li>Dr. Subhashis Bhattacharya, Bristol Univ, U.K.</li>
              <li>Dr. Jens Nielsen, Aalborg Univ, Denmark</li>
              <li>Dr. Dong Huang, China</li>
              <li>Dr. Jiewen Huang, China</li>
              <li>Dr. Agya Mishra, India</li>
              <li>Dr. Ankit Chaudhary, MUM, Fairfield, USA</li>
              <li>Dr. Imad Jawhar, United Arab Emirates Univ, Al Ain, UAE</li>
              <li>Dr. Martyna Ulinowicz, Warsaw Univ. of Technology, Poland</li>
              <li>Dr. Velmurugan Ayyadurai, University of Surrey, U.K.</li>
              <li>Prof. Dr. Rodrigo C. Bortoletto, São Paulo Federal Institute, Brazil</li>
              <li>Dr. Shikha Agrawal, RGPV, Bhopal</li>
              <li>Dr. Gregorio Andria, Italy</li>
              <li>Dr. Danilo Pelusi, University of Teramo, Italy</li>
              <li>Dr. Abhishek Shukla, KNIT Sultanpur</li>
              <li>Dr. Deng Huifang, Guangzhou, China</li>
              <li>Dr. Deepak Singh Tomar, MANIT, Bhopal, India</li>
              <li>Dr. Tatsuya Suda, University Netgroup Inc., USA</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Committee;
