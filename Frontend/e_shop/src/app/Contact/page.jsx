'use client';
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import Modal from "@/components/modals/Modal";
import Loginform from "@/components/Login/Loginform";
import { LoginProvider } from "@/components/context/login_context";
import Contact from "@/components/Contact_us/Contact";

export default function ContactPage() {
  const [showModal, setShowModal] = useState(false);

  function open_modal() {
    setShowModal(true);
  }

  return (
    <LoginProvider>
      <Navbar open_modal={open_modal} />

      {/* Main content */}
      <div className="min-h-screen">
        <Contact />
      </div>

      {/* Modal for login */}
      {showModal && (
        <Modal show={showModal} onClose={() => setShowModal(false)}>
          <Loginform closeIt={() => setShowModal(false)} />
        </Modal>
      )}
    </LoginProvider>
  );
}