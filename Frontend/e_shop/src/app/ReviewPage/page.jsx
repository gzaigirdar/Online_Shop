'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";
import { LoginProvider } from "@/components/context/login_context";
import Summary_review_card from "@/components/Review/Summary_review_card";
import Review_card from "@/components/Review/Review_card";

export default function ReviewPage() {
  const [showModal, setShowModal] = useState(false);

  function open_modal() {
    setShowModal(true);
  }

  return (
    <LoginProvider>
      <Navbar open_modal={open_modal} />

      <div className="bg-gradient-to-r from-slate-100 to-slate-900 text-black min-h-screen grid grid-cols-5 gap-0">
        <div className="w-full h-screen col-span-2">
          <Summary_review_card />
        </div>
        <div className="w-full h-screen col-span-3 overflow-y-auto">
          <div className="w-full  flex flex-wrap">
            <Review_card />
            <Review_card />
            <Review_card />
            <Review_card />
            <Review_card />
            <Review_card />
            <Review_card />
          </div>
        </div>
      </div>

      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Loginform closeIt={() => setShowModal(false)} />
        </Modal>
      )}
    </LoginProvider>
  );
}
