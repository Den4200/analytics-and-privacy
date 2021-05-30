import { Dispatch, useRef } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;

  title: string;
  description: string;
  body: string;

  submitText: string;
  closeText: string;

  onSubmit?: () => void;
  onClose?: () => void;
}

const Modal = (props: ModalProps) => {
  const submitButtonRef = useRef(null);

  return (
    <Dialog
      initialFocus={submitButtonRef}
      open={props.isOpen}
      onClose={props.setIsOpen}
      as="div"
      className={clsx("fixed inset-0 z-10 flex items-center justify-center overflow-y-auto", {
        "bg-gray-900": props.isOpen === true,
      })}
    >
      <div className="flex flex-col bg-gray-800 text-white w-96 py-8 px-4 text-center">
        <Dialog.Overlay />

        <Dialog.Title className="text-3xl" style={{color: "#746bed"}}>{props.title}</Dialog.Title>
        <Dialog.Description className="text-xl m-2">{props.description}</Dialog.Description>

        <p className="text-md m-4">{props.body}</p>

        <button
          className="m-4 inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 sm:ml-3 sm:w-auto sm:text-sm"
          ref={submitButtonRef}
          style={{background: "#4338ca"}}
          onClick={props.onSubmit ? props.onSubmit : () => props.setIsOpen(false) }
        >
          {props.submitText}
        </button>
        <button
          className="m-4 inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          onClick={props.onClose ? props.onClose : () => props.setIsOpen(false) }
        >
          {props.closeText}
        </button>
      </div>
    </Dialog>
  );
};

export default Modal;
