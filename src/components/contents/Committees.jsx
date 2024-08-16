import React from "react";

const committees = [
  {
    title: "Honorary Chairs",
    members: [
      "Prof. Sunil K. Somani, Oriental University, Indore",
      "Prof. GS Tomar, REC Sonbhadra, UP",
      "Prof. Dhruva Ghai, Oriental University, Indore",
      "Prof. Garima Ghai, Oriental University, Indore",
    ],
  },
  {
    title: "General Chairs",
    members: [
      "Prof. Shailendra Singh, Oriental University, Indore",
      "Prof. Manish Dixit, MITS Gwalior",
    ],
  },
  {
    title: "General Co-Chairs",
    members: [
      "Dr. Abul Bashar, PMU, United Arab Emirates",
      "Dr. Robin Singh Bhadoria, NIT Hamirpur",
      "Dr. Manish Vyas, Oriental University, Indore",
    ],
  },
  {
    title: "Technical Program Committee Chairs",
    members: [
      "Dr. Atul Agarwal, Oriental University, Indore",
      "Dr. Vivek Singh Kushwah, CBIT Hyderabad",
      "Dr. Ashish Bagwari, WIT Dehradun",
    ],
  },
  {
    title: "Finance Committee Chairs",
    members: [
      "Dr. MPS Chawla, SGSITS Indore",
      "Dr. Musti KS Sastry, NUST Namibia",
    ],
  },
  {
    title: "Publication Committee Chairs",
    members: [
      "Dr. Megha Singh, Oriental University, Indore",
      "Dr. Bishwajeet Pandey, Astana IT University, Kazakhstan",
      "Mr. Anubhav Singh, Redbus Pvt Ltd",
    ],
  },
  {
    title: "Workshop Chairs",
    members: [
      "Dr. Ashraf Samarah, Kettering University, USA",
      "Dr. Alhad Kuwadekar, Pai Group BV, Netherlands",
      "Dr. Debnath Bhattacharyya, KL University, Andhra Pradesh",
    ],
  },
  {
    title: "Publicity Committee Chairs",
    members: [
      "Dr. Jagdish Bansal, South Asia University, New Delhi",
      "Dr. Jitendra Agrawal, RGPV Bhopal",
      "Mr. Kuldeep Singh Jadon, NIT Hamirpur",
    ],
  },
  {
    title: "Hospitality Committee Chairs",
    members: [
      "Ms. Fiona Lawrence, Oriental University, Indore",
      "Ms. Pakiza Khan, Oriental University, Indore",
      "Mr. Mohammad Javed, Oriental University, Indore",
      "Mr. Manoj Biswakarma, Oriental University, Indore",
      "Ms. Arpita Gupta, Oriental University, Indore",
      "Ms. Preeti Puranik, Oriental University, Indore",
    ],
  },
  {
    title: "Technical Program Committee",
    members: [
      "Prof. Tai Hoon Kim, Korea",
      "Prof. Dr. Mehmet Efe, Turkey",
      "Dr. Layth AbdulRasool, Iran",
      "Prof. Narendra S. Chaudhari, IIT Indore, India",
      "Prof. Dr. Ilias Savvas, Greece",
      "Dr. Ratheesh Kumar Meleppa, University of California, Davis, USA",
      "Dr. Sanjay Sutar, BATU Lonere",
      "Prof. Manjushree Adhha, BATU Lonere",
      "Dr. Brijesh Iyyer, BATU Lonere",
      "Prof. Manmohan Shukla, PSIT Kanpur",
      "Dr. Dharmendra Dixitl, REC Sonbhadra",
      "Dr. NS Jadhav, BATU Lonere",
      "Prof. Fahrettin Sadıkoğlu, Cyprus",
      "Prof. Ali Haydar, Cyprus",
      "Dr. Kamil Dimililer, Cyprus",
      "Dr. Hüseyin Öztoprak, Cyprus",
      "Dr. Tayfun Nesimoğlu, Cyprus",
      "Prof. Ciro Rodriguez, Peru",
      "Prof. Stephen Wagner, Brazil",
      "Prof. Jorge Barbosa, Brazil",
      "Prof. Rajeev Tripathi, MNNIT Allahabad",
      "Dr. KV Arya, IIITM Gwalior, India",
      "Dr. Harkirat Singh, Samsung, USA",
      "Dr. Ngoc Tu Nguyen, Missouri University, USA",
      "Dr. Maman Abdurohman, Institut Teknologi Telkom, Indonesia",
      "Prof. Dr. Hai Jiang, Arkansas State University, USA",
      "Dr. Varun Jeoti, Petronas, Malaysia",
      "Dr. Joanne Scillitoe, Michigan Tech Univ, USA",
      "Prof. Dr. Helen Karatza, Greece",
      "Prof. Dr. Anna Lekova, Bulgaria",
      "Dr. Azrin Aris, Malaysia",
      "Dr. Jongman Cho, Korea",
      "Dr. BDK Patro, REC Kannauj",
      "Dr. Ranjeet Singh Tomar, ITM University, Gwalior, India",
      "Dr. Neeraj Shrivastava, RJIT Tekanpur, India",
      "Dr. Sanjay Singh Kushwah, GIIT Gwalior, India",
      "Dr. Mamdouh Gouda, Egypt",
      "Dr. Beatris M, Spain",
      "Dr. Sani Sushanto, Indonesia",
      "Dr. Yong Ju Lee, Korea",
      "Dr. Amit Ojha, MANIT, Bhopal",
      "Prof. Dr. M.C. Govil, MNIT, Jaipur, India",
      "Prof. Dr. O.B.V. Ramanaiya, JNTU, Hyderabad, India",
      "Prof. Dr. Alaknanda Ashok, WIT Dehradun",
      "Prof. Dr. Pedro Albertos, Univ. Politecnica Valencia, Spain",
      "Prof. Dr. Mandava Rajeshwari, USM, Malaysia",
      "Dr. Xua Han, Kains Ave, USA",
      "Prof. Dr. Shailendra Singh, NITTTR",
      "Prof. Dr. Victor Govindaswamy, USA",
      "Prof. Dr. MS Whang, Brazil",
      "Dr. Trapti Jain, IIT Indore, India",
      "Dr. A.A. Lofti Neyestanak, Iran",
      "Prof. Dr. Houssem Jerbi, Lecap- Tunisia",
      "Prof. Dr. P. Chatterjee, National Tech. University, Argentina",
      "Dr. Aresh Dadlani, University of Tehran, Iran",
      "Prof. Dr. N. Krishnan, MSU, India",
      "Prof. Dr. B.K. Kanaujia, JNU Delhi",
      "Prof. Dr. Ghanshyam Singh, MNIT, Jaipur, India",
      "Dr. Surendra Gupta, Delhi",
      "Dr. BK Kaushik, IIT Roorkee",
      "Mr. Kunal Patel, Ingenuity Systems, USA",
      "Dr. Sahnaz Ayub, BIET, Jhansi, India",
      "Dr. Amitabha, Dublin University",
      "Dr. Alhad Kuwadekar, Univ of South Wales, UK",
      "Dr. Hon Tat Hui, NUS, Singapore",
      "Dr. Ashok Singh, IIT Patna, India",
      "Dr. Yusuke Nojima, Osaka Prefecture University",
      "Prof. Dr. Frédéric Pinel, Luxembourg",
      "Dr. N.Ch.Sriman Narayana Iyengar, VIT Vellore, India",
      "Dr. Manoj Shukla, HBTI, Kanpur, India - Track Chair",
      "Dr. Shuza Binzaid, Texas University",
      "Prof. Mario Koeppen, Kyushu Institute of Technology, Fukuoka, Japan",
      'Prof. Dr. Michele Vadursi, University of Naples "Parthenope", Italy',
      "Dr. Rawya Rizk, Port-Said University, Egypt",
      "Dr. Junichi Funasaka, Hiroshima City University, Japan",
      "Dr. Mourad Abbas, Phonetics and Speech Processing Lab, crstdla, Algiers",
      "Dr. Zutao Zhu, Google Inc., Japan",
      "Dr. Simon Dobson, Univ. of St. Andrews, UK",
      "Dr. Amitabha Chakraborty, Dublin University, Ireland",
      "Prof. Jaime Caro, University of the Philippines, Philippines",
      "Mr. Abhineet Tomar, Volvo, Sweden",
      "Dr. DK Tripathi, REC Sonbhadra",
      "Dr. Brijesh Kumar Chaurasia, PSIT Kanpur",
      "Dr. Paolo Roberto Grassi, Milan, Italy",
      "Dr. Bareh Asadi, Iran",
      "Dr. Sanjeev Sharma, RGPV Bhopal",
      "Dr. Biju Issac, Teesside University, Middlesbrough, Tees Valley, UK",
      "Prof. Dr. Cai Zhimming, Macau University, China",
      "Dr. Laxmit Shrivastava, MITS Gwalior",
      "Prof. MPS Chawla, SGSITS Indore",
      "Dr. Manmohan Shukla, PSIT Kanpur",
      "Dr. Ruidan Su, Dalian, China - Track Chair",
      "Dr. Roshan Chhetri, Bhutan",
      "Prof. Dr. Li Jun Zhang, Champlain College, USA",
      "Dr. Arvind Singh, UWI Trinidad",
      "Dr. Amir Houmansadr, University of Texas, Austin",
      "Dr. Thorsten Schöler, Germany",
      "Dr. Zhiyuan Tan, Australia",
      "Dr. Ashish Agrawal, Boston University, USA",
      "Dr. Subhashis Bhattacharya, Bristol University, UK",
      "Dr. Jens Nielsen, Aalborg University, Denmark",
      "Dr. Dong Huang, China",
      "Dr. Jiewen Huang, China",
      "Dr. Ankit Chaudhary, MUM, Fairfield, USA",
      "Dr. Imad Jawhar, United Arab Emirates University, Al Ain, UAE",
      "Dr. Martyna Ulinowicz, Warsaw University of Technology, Poland",
      "Dr. Velmurugan Ayyadurai, University of Surrey, UK",
      "Prof. Dr. Rodrigo C. Bortoletto, São Paulo Federal Institute, Brazil",
      "Dr. Shikha Agrawal, RGPV, Bhopal",
      "Dr. Gregorio Andria, Italy",
      "Dr. Danilo Pelusi, University of Teramo, Italy",
      "Dr. Abhishek Shukla, KNIT Sultanpur",
      "Dr. Deng Huifang, Guangzhou, China",
      "Dr. Deepak Singh Tomar, MANIT, Bhopal, India",
      "Dr. Tatsuya Suda, University Netgroup Inc., USA",
    ],
  },
  // Add other committees here
];

const Committee = () => {
  return (
    <div className="container mx-auto px-4 py-12 text-gray-900">
      <div className="bg-gray-200 p-12 rounded-3xl shadow-lg">
        <center>
          <h1 className="text-6xl font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Committees
          </h1>
        </center>
        <p className="text-gray-700 text-2xl mb-12 text-center">
          <strong>Conference is organized in Hybrid Mode</strong>
        </p>

        <div className="flex flex-col items-center space-y-8">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="w-full max-w-xl p-12 bg-gray-100 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl hover:shadow-blue-500"
            >
              <h3 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                {committee.title}
              </h3>
              <ul className="list-disc list-inside text-gray-800">
                {committee.members.map((member, i) => (
                  <li key={i} className="text-base">
                    {member}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Committee;
