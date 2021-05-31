import { useState } from "react";

import Modal from "../../components/Modal";

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

      <div className="mt-8 ml-12">
        <h1 className="text-3xl font-bold">Introduction</h1>
        <p>We have stolen your data and sold it off to Facebook.</p>
      </div>
    </>
  );
};

export default IndexPage;
