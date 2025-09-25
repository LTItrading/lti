import { Section } from "@/components/layout/Section";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  Ticket,
  Timer,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";

// --- CUSTOM UI DESIGN IMPLEMENTATION ---

export const Contact = () => {
  // --- Colors/Classes extracted directly from the provided code ---
  const primaryDarkBg = "bg-primary"; // Used in the footer section
  const primaryDarkText = "text-primary"; // Used for icons
  const lightAccentBg = "#ffe5e096"; // The pale pink/red background
  const inkText = "text-ink"; // Main text color (likely black/gray)
  const brandAccent = "text-brand"; // Red/Accent color for hero span
  const darkOverlayColor = "#1C1C1C"; // Color of the hero overlay

  // New component for the sleek, high-contrast Hour/Available items
  const ServiceHourItem = ({ Icon, title, content }) => (
    <div className={`flex items-center p-4 rounded-xl mb-3 shadow-md bg-white ${inkText}`}>
      <Icon className={`h-6 w-6 mr-4 ${primaryDarkText}`} />
      <div>
        <h5 className="font-bold text-lg">{title}</h5>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-base text-ink min-h-screen">

      {/* ------------------------------------------- */}
      {/* --- HERO SECTION: Dynamic Right-Aligned (Dark Primary Block) --- */}
      {/* ------------------------------------------- */}
      <section className="relative min-h-[500px] text-white py-16 md:py-24 contact-header-bg overflow-hidden">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder-high-res-office.jpg')" }}
        >
          {/* Image of modern trading office */}
        </div>

        {/* Dark Overlay (color taken from original code) */}
        <div className="absolute inset-0 z-5 duration-300" style={{ backgroundColor: darkOverlayColor, opacity: 0.5 }}></div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-left max-w-5xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight">
              We’re Here to Help. <br />
              <span className={brandAccent}> Anytime, Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl font-light mb-0 leading-relaxed opacity-90">
              Whether you need assistance with your account, have questions
              about our services, or want to speak with our team, LTI’s
              support is available
            </p>
          </div>
        </div>

      </section>

      {/* ------------------------------------------- */}
      {/* --- MAIN CONTENT: ASYMMETRICAL 2-COLUMN LAYOUT --- */}
      {/* ------------------------------------------- */}
      <div className="py-20" style={{ backgroundColor: lightAccentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className={`text-4xl font-extrabold mb-16 text-center ${inkText}`}>Client Support Channels</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* COLUMN 1 (Lg: 2/3 width): SUPPORT HOURS & AVAILABILITY */}
            <div className="lg:col-span-2">
              {/* SECTION 2: SUPPORT HOURS */}
              <div className="bg-white p-8 rounded-3xl shadow-2xl h-full">
                <h3 className={`text-3xl font-bold mb-8 ${inkText}`}>Support When You Need It</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Available */}
                  <ServiceHourItem
                    Icon={Calendar}
                    title="Available:"
                    content="Monday – Friday"
                  />
                  {/* Hours */}
                  <ServiceHourItem
                    Icon={Timer}
                    title="Hours:"
                    content="24/5 across trading sessions"
                  />
                </div>

                {/* Multilingual support (Full width) */}
                <div className="mt-8 p-6 rounded-2xl border-l-8 border-brand/70 bg-gray-50 shadow-inner">
                  <div className="flex items-center mb-3">
                    <Globe className={`h-7 w-7 mr-3 ${primaryDarkText}`} />
                    <h4 className={`font-extrabold text-xl ${inkText}`}>Multilingual support</h4>
                  </div>
                  <p className="text-gray-600">
                    English, Arabic, Spanish, Chinese, Portuguese, French & Russian
                  </p>
                </div>
              </div>
            </div>

            {/* COLUMN 2 (Lg: 1/3 width): CONTACT CHANNELS (STACKED CARDS) */}
            <div className="lg:col-span-1 space-y-6">

              {/* 1. Email Support Card */}
              <div className={`bg-white rounded-3xl p-6 shadow-elegant hover:shadow-glow transition-transform transform hover:-translate-y-1 flex flex-col ${inkText}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Mail className={`h-6 w-6 ${primaryDarkText}`} />
                  <h5 className="font-extrabold text-[18px] sm:text-[20px]">Email Support</h5>
                </div>
                <p className="text-sm font-medium">Get in touch with our support team directly.</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  {/* START: Client Email Content */}
                  <p className="text-xs font-medium">General Inquiries:</p>
                  <a href="mailto:support@lti.com" className={`font-bold hover:${brandAccent}`}>
                    support@lti.com
                  </a>
                  <p className="text-xs font-medium mt-2">Account & Verification:</p>
                  <a href="mailto:compliance@lti.com" className={`font-bold hover:${brandAccent}`}>
                    compliance@lti.com
                  </a>
                  <p className="text-xs font-medium mt-2">Partnerships:</p>
                  <a href="mailto:partnerships@lti.com" className={`font-bold hover:${brandAccent}`}>
                    partnerships@lti.com
                  </a>
                  {/* END: Client Email Content */}
                </div>
              </div>

              {/* 2. Raise a Ticket Card */}
              <div className={`bg-white rounded-3xl p-6 shadow-elegant hover:shadow-glow transition-transform transform hover:-translate-y-1 flex flex-col ${inkText}`}>
                <div className="flex items-center gap-3 mb-4">
                  <Ticket className={`h-6 w-6 ${primaryDarkText}`} />
                  <h5 className="font-extrabold text-[18px] sm:text-[20px]">Raise a ticket!</h5>
                </div>
                {/* START: Client Ticket Content */}
                <p className="text-sm font-medium">
                  Raise a ticket for our multilingual support team, available directly from your{" "}
                  <a href="#" className="font-bold hover:text-brand">Client Portal</a> or <a href="#" className="font-bold hover:text-brand">via the website</a>.
                </p>
                {/* END: Client Ticket Content */}
              </div>
            </div>

          </div>
        </div>
      </div>
<section className={`py-16 px-4 sm:px-6 lg:px-8 ${primaryDarkBg} text-white`}>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Social & Community</h2>
    <p className="text-lg text-gray-300 mb-12">
      Stay connected for updates, news, and educational content:
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      {[
        { Icon: Linkedin, name: "LinkedIn", color: "#0A66C2" },
        { Icon: Twitter, name: "Twitter/X", color: "#1DA1F2" },
        { Icon: Instagram, name: "Instagram", color: "#DD2A7B" },
        { Icon: Youtube, name: "YouTube", color: "#FF0000" },
      ].map(({ Icon, name, color }) => (
        <a key={name} href="#" className="group">
          <div className="bg-white rounded-3xl p-6 flex flex-col items-center justify-center
                          shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-2 ">
            <div
              className="w-16 h-16 flex items-center justify-center rounded-full mb-4"
              style={{ backgroundColor: `${color}20` }}
            >
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h5
              className="font-extrabold text-[18px] sm:text-[20px] transition-colors group-hover:text-white"
              style={{ color }}
            >
              {name}
            </h5>
          </div>
        </a>
      ))}

    </div>
  </div>
</section>

    </div>
  );
};