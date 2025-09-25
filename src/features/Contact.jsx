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

export const Contact = () => {
  return (
    <div className="bg-base text-ink min-h-screen">
      <section className="relative min-h-[500px] text-white py-16 md:py-24 bg-gradient-to-br from-brand/5 to-brand/10 contact-header-bg">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6 tracking-tight">
              We’re Here to Help. <br />
              <span className="text-brand"> Anytime, Anywhere.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Whether you need assistance with your account, have questions
              about our services, <br /> or want to speak with our team, LTI’s
              support is available
            </p>
          </div>
        </div>
        <div className="absolute inset-0 z-5 bg-[#1C1C1C] opacity-50 duration-300"></div>
      </section>
<section
  style={{ backgroundColor: "#ffe5e096" }}
  className="shadow-2xl px-5 py-16 sm:px-10 lg:px-16"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    
    {/* Contact Channels */}
    <div className="bg-white rounded-3xl p-10 shadow-elegant hover:shadow-glow transition-transform transform hover:-translate-y-2 flex flex-col">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Channels</h2>
      <p className="text-center text-gray-700">Get in touch with our support team directly.</p>
    </div>

    {/* Email Support */}
    <div className="bg-white rounded-3xl p-10 shadow-elegant hover:shadow-glow transition-transform transform hover:-translate-y-2 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-primary" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]">Email Support</h5>
      </div>
      <p className="text-sm font-medium">General Inquiries:</p>
      <a href="mailto:support@lti.com" className="font-bold hover:text-[#ee4223]">
        support@lti.com
      </a>
      <p className="text-sm font-medium mt-3">Account & Verification:</p>
      <a href="mailto:compliance@lti.com" className="font-bold hover:text-[#ee4223]">
        compliance@lti.com
      </a>
    </div>

    {/* Raise a Ticket */}
    <div className="bg-white rounded-3xl p-10 shadow-elegant hover:shadow-glow transition-transform transform hover:-translate-y-2 flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Ticket className="h-6 w-6 text-primary" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]">Raise a ticket!</h5>
      </div>
      <p className="text-sm font-medium">
        Raise a ticket for our multilingual support team, available directly from your{" "}
        <span className="font-bold">Client Portal</span> or <span className="font-bold">via the website</span>.
      </p>
    </div>

  </div>
</section>

      <Section padding="lg">
<section className="text-center mb-10 md:py-16 px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl md:text-4xl font-bold mb-10">Support When You Need It</h2>

  <div className="flex flex-wrap justify-center gap-6">
    {/* Available */}
    <div className="cursor-pointer bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)]
                    p-6 min-w-[280px] max-w-[320px] rounded-2xl shadow-elegant
                    flex flex-col items-start transition-all transform hover:-translate-y-2 hover:shadow-glow">
      <div className="flex items-center gap-3 mb-3">
        <Calendar className="h-6 w-6 text-primary" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]">Available:</h5>
      </div>
      <p className="text-gray-800">Monday – Friday</p>
    </div>

    {/* Hours */}
    <div className="cursor-pointer bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)]
                    p-6 min-w-[280px] max-w-[320px] rounded-2xl shadow-elegant
                    flex flex-col items-start transition-all transform hover:-translate-y-2 hover:shadow-glow">
      <div className="flex items-center gap-3 mb-3">
        <Timer className="h-6 w-6 text-primary" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]">Hours:</h5>
      </div>
      <p className="text-gray-800">24/5 across trading sessions</p>
    </div>

    {/* Multilingual support */}
    <div className="cursor-pointer bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)]
                    p-6 min-w-[280px] max-w-[320px] rounded-2xl shadow-elegant
                    flex flex-col items-start transition-all transform hover:-translate-y-2 hover:shadow-glow">
      <div className="flex items-center gap-3 mb-3">
        <Globe className="h-6 w-6 text-primary" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]">Multilingual support</h5>
      </div>
      <p className="text-gray-800">
        English, Arabic, Spanish, Chinese, Portuguese, French & Russian
      </p>
    </div>
  </div>
</section>


        <section className="text-center py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-primary rounded-[3rem] text-white">
  <h2 className="text-3xl font-bold mb-3">Stay connected</h2>
  <p>For updates, news, and educational content:</p>

  <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 mt-5 pt-5">
    {/* LinkedIn */}
    <a href="#" className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center justify-center bg-white/10 rounded-2xl py-4 px-6 space-y-2 hover:bg-white/20">
        <Linkedin className="h-8 w-8 text-white" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]" style={{ color: '#0A66C2' }}>
          LinkedIn
        </h5>
      </div>
    </a>

    {/* Twitter/X */}
    <a href="#" className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center justify-center bg-white/10 rounded-2xl py-4 px-6 space-y-2 hover:bg-white/20">
        <Twitter className="h-8 w-8 text-white" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]" style={{ color: '#1DA1F2' }}>
          Twitter/X
        </h5>
      </div>
    </a>

    {/* Instagram */}
    <a href="#" className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center justify-center bg-white/10 rounded-2xl py-4 px-6 space-y-2 hover:bg-white/20">
        <Instagram className="h-8 w-8 text-white" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]" style={{ color: '#DD2A7B' }}>
          Instagram
        </h5>
      </div>
    </a>

    {/* YouTube */}
    <a href="#" className="hover:scale-105 transition-transform">
      <div className="flex flex-col items-center justify-center bg-white/10 rounded-2xl py-4 px-6 space-y-2 hover:bg-white/20">
        <Youtube className="h-8 w-8 text-white" />
        <h5 className="font-extrabold text-[18px] sm:text-[20px]" style={{ color: '#FF0000' }}>
          YouTube
        </h5>
      </div>
    </a>
  </div>
</section>

      </Section>
    </div>
  );
};
