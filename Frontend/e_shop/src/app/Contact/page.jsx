'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";
import { LoginProvider } from "@/components/context/login_context";
import { Inquiry_Provider } from "@/components/context/inquiry_context";
import Contact from "@/components/Contact_us/Contact";

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);

  function open_modal() {
    setShowModal(true);
  }

  return (
    <>
      <Navbar open_modal={open_modal} />

      {/* Main content */}
      <Inquiry_Provider>
      <div className="bg-gradient-to-r from-slate-100 to-slate-900 min-h-screen">
        <Contact open_modal={open_modal} />
      </div>
      </Inquiry_Provider>

      {/* Modal for login */}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Loginform closeIt={() => setShowModal(false)} />
        </Modal>
      )}
      </>
    
  );
}