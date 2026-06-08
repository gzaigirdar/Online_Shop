'use client';
import { Inquiry_Provider } from "@/components/context/inquiry_context";
import Contact from "@/components/Contact_us/Contact";

export default function ContactPage() {

  return (
    <>
      {/* Main content */}
      <Inquiry_Provider>
      <div className="bg-gradient-to-r from-slate-100 to-slate-900 min-h-screen">
        <Contact />
      </div>
      </Inquiry_Provider>
    </>
    
  );
}