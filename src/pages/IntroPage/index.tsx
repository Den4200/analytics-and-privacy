import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

import Modal from "../../components/Modal";
import dataAnalysisImage from "./data-analysis.png";

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [isOpen0, setIsOpen0] = useState(false);
  const [isOpen00, setIsOpen00] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen10, setIsOpen10] = useState(false);
  const [isOpen100, setIsOpen100] = useState(false);

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Accept our privacy policy?"
        description="This is crucial to our services."
        body="We only collect a few terabytes of data on each user, which is essential to the functions of our services."
        submitText="I accept"
        closeText="I do not accept"
        onClose={() => {
          setIsOpen(false);
          setIsOpen0(true);
        }}
        onSubmit={() => {
          setIsOpen(false);
          setIsOpen1(true);
        }}
      />

      <Modal
        isOpen={isOpen0}
        setIsOpen={setIsOpen0}
        title="Why not?"
        description="You can trust us with your data."
        body="We only store your data in encrypted, secure databases, protected from hackers."
        submitText="I accept (Strongly recommended)"
        closeText="I do not accept (Not recommended at all)"
        onClose={() => {
          setIsOpen0(false);
          setIsOpen00(true);
        }}
        onSubmit={() => {
          setIsOpen0(false);
          setIsOpen1(true);
        }}
      />

      <Modal
        isOpen={isOpen00}
        setIsOpen={setIsOpen00}
        title="Are you sure?"
        description="We strongly advise you to accept."
        body="If you do not accept our privacy policy, we must sell your data to third-party companies in order to compensate for profit losses."
        submitText="I accept (Very strongly recommended)"
        closeText="I do not accept (Strongly advised against)"
        onSubmit={() => {
          setIsOpen00(false);
          setIsOpen1(true);
        }}
      />

      <Modal
        isOpen={isOpen1}
        setIsOpen={setIsOpen1}
        title="Accept our cookies too?"
        description="Only so we can track you!"
        body="Please accept our cookies so that we can track your every move across the internet."
        submitText="I accept (Recommended)"
        closeText="I do not accept (Not recommended)"
        onClose={() => {
          setIsOpen1(false);
          setIsOpen10(true);
        }}
      />

      <Modal
        isOpen={isOpen10}
        setIsOpen={setIsOpen10}
        title="Why not?"
        description="You can trust us with your data."
        body="We only store your data in encrypted, secure databases, protected from hackers."
        submitText="I accept (Strongly recommended)"
        closeText="I do not accept (Not recommended at all)"
        onClose={() => {
          setIsOpen10(false);
          setIsOpen100(true);
        }}
      />

      <Modal
        isOpen={isOpen100}
        setIsOpen={setIsOpen100}
        title="Are you sure?"
        description="We strongly advise you to accept."
        body="If you do not accept our privacy policy, we must sell your data to third-party companies in order to compensate for profit losses."
        submitText="I accept (Very strongly recommended)"
        closeText="I do not accept (Strongly advised against)"
      />

      <div className="content-container mx-auto px-8 mt-8">
        <h1 className="text-3xl font-bold mb-4">User Analytics and Data vs. Privacy</h1>

        <hr />
        <img src={dataAnalysisImage} alt="" />
        <hr className="mb-4" />

        <h2 className="text-2xl font-bold mb-2">Introduction</h2>
        <p className="text-lg">
          Did you accept our absurd privacy policy and allow us to use cookies? I sure hope not,
          even after all the incessant nagging and empty threats. Now, of course, those modals were
          not at all genuine, as they were only there to serve one simple point: companies are
          desperate for your data.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-2">Purpose</h2>
        <p className="text-lg mb-8">
          I created this website to share my findings from the research I have done to answer one
          question:
          <blockquote className="text-base">
            To what degree should user analytics and data be used to improve end-user experience in
            consideration of privacy?
          </blockquote>
          The conclusion I have come to is quite interesting, as it actually contradicts with the
          name of my chosen topic, seen at the top of this page. I will explain what this means in
          the coming pages.
        </p>

        <hr />
        <div className="flex flex-row m-2">
          <div className="flex-grow" />
          <Link to="/analytics-and-data">
            <ArrowCircleRightIcon className="h-10 w-10 text-gray-700 hover:text-black" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
