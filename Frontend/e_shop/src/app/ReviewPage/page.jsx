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

      
      <div className="bg-gradient-to-r from-slate-100 to-slate-900 text-black min-h-screen flex flex-col md:flex-row">
        
        {/* Summary card */}
        <div className="w-full mt-0 md:w-2/5 p-2">
          <Summary_review_card />
        </div>

        {/* Reviews column */}
        <div className="w-full md:w-3/5 p-2 overflow-y-auto">
          <div className="bg-amber-100 rounded-lg m-2 p-2 text-center shadow-2xl 
                    w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto 
                    transition-all duration-300">
            Customers Reviews
          </div>

          <div className = "w-full flex flex-wrap justify-center gap-2 overflow-y-auto max-h-[70vh] p-2">
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
