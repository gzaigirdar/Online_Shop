'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";
import { LoginProvider } from "@/components/context/login_context";
import About_comp from "@/components/About_us/About_comp";

export default function AboutPage() {
  const [showModal, setShowModal] = useState(false);

  function open_modal() {
    setShowModal(true);
  }

  return (
    <LoginProvider>
      <Navbar open_modal={open_modal} />

   
      <div className="min-h-screen bg-gray-50">
        <About_comp />
      </div>

      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Loginform closeIt={() => setShowModal(false)} />
        </Modal>
      )}
    </LoginProvider>
  );
}
