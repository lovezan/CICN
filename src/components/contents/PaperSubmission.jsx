import React from "react";
import pmu2 from "../../assets/pmu2.jpeg"; // Adjusted path based on folder structure
import oa1 from "../../assets/oa1.jpg"; // Adjusted path based on folder structure
import ou2 from "../../assets/ou2.jpeg"; // Adjusted path based on folder structure

const PaperSubmission = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gray-100 p-6 rounded-lg shadow-xl">
        <center>
          <h1 className="text-3xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-700">
            Paper Submission: Open
          </h1>
          <h3 className="text-xl font-semibold text-blue-700 mb-6 underline">
            Submission Guidelines
          </h3>
        </center>
        <div className="space-y-4 text-gray-800 text-justify">
          <p className="leading-relaxed">
            You are requested to submit a full paper of 4-8 pages (5 pages will
            be in the registration fee, and additional pages will be charged)
            for oral presentation. Submitted papers should contain original,
            unpublished material not currently under review for any other
            conference/journal. All papers must follow strict{" "}
            <strong>IEEE formatting instructions</strong>. Violation of which
            may lead to the rejection of the paper.
          </p>
          <p className="leading-relaxed">
            <span className="text-blue-800 font-semibold underline">
              Paper Submission:
            </span>{" "}
            Authors are encouraged to submit their papers using the EDAS online
            submission system. Papers can be submitted online by{" "}
            <a
              href="https://edas.info/newPaper.php?c=32525"
              className="text-red-500 hover:underline"
            >
              CLICK
            </a>{" "}
            Links. You may contact us via email at{" "}
            <strong>cicnmir@gmail.com</strong> if you face problems in submission. 
            All papers will be peer-reviewed by at least three independent referees 
            from the panel of international reviewers and will undergo a plagiarism 
            check (Refer{" "}
            <a
              href="http://www.ieee.org/publications_standards/publications/rights/ID_Plagiarism.html"
              target="_blank"
              className="text-blue-500 hover:underline"
            >
              IEEE Note on Plagiarism
            </a>
            ).
          </p>
          <p className="leading-relaxed">
            The papers should be submitted in a 2-column IEEE standard format in
            .doc or .pdf format only. Authors are requested not to prefix their
            credentials (e.g., Dr., Prof.) in their names.{" "}
            <span className="text-purple-600">
              <a href="/assets/csnt_format.doc" download className="hover:underline">
                Download template for manuscript submission (.doc)
              </a>
            </span>
            ,{" "}
            <span className="text-blue-600">
              <a href="/assets/template.pdf" download className="hover:underline">
                template (.pdf)
              </a>
            </span>
            , and{" "}
            <span className="text-blue-600">
              <a href="/assets/Latex.zip" download className="hover:underline">
                Latex (.zip)
              </a>
            </span>
            .
          </p>
          <p className="leading-relaxed">
            Authors of accepted papers will need to sign an{" "}
            <a
              href="https://www.ieee.org/publications/rights/copyright-main.html"
              className="text-blue-600 hover:underline"
            >
              IEEE copyright release form
            </a>{" "}
            online and must present their paper at the conference. All presented
            papers will be published in the conference proceedings and will be
            linked on IEEE Xplore.
          </p>
          <p className="leading-relaxed">
            <strong>
              The past conferences have an acceptance rate of less than 25%, and
              in no case will the acceptance rate of this conference exceed
              this. The organizers use standard plagiarism checking tools to
              scan the papers, and papers will be rejected at any stage if found
              plagiarized.
            </strong>
          </p>
          <p className="leading-relaxed">
            <strong>
              The authors are also encouraged to register as reviewers for the
              conference. A Ph.D. degree and good academic experience are
              required as a minimum. At least 03 reviews are required for the
              acceptance of a paper, and we need more volunteers to review the
              papers.
            </strong>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-6">
            <img
              src={oa1}
              alt="Image 1"
              className="w-full sm:w-64 h-auto sm:h-40 object-cover rounded-lg shadow-md"
            />
            <img
              src={ou2}
              alt="Oriental University"
              className="w-full sm:w-64 h-auto sm:h-40 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperSubmission;
