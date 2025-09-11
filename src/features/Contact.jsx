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
      <section
        className="relative min-h-[500px] text-white py-16 md:py-24 bg-gradient-to-br from-brand/5 to-brand/10 contact-header-bg"
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative z-20 text-center max-w-5xl mx-auto">
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
        <div className="absolute inset-0 z-10 bg-[#1C1C1C] opacity-50 duration-300"></div>
      </section>
      <section
        style={{ backgroundColor: "#ffe5e096" }}
        className="shadow-2xl rounded-none px-5 py-[50px] sm:px-[60px] lg:px-[50px] py-[50px] sm:py-[50px] lg:py-[50px]"
      >
        <div className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-y-6 gap-x-1">
          <div>
            <h2 className="text-3xl font-bold mb-3">Contact Channels</h2>
            <p>Get in touch with our support team directly.</p>
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Email Support
              </h5>
            </div>
            <p className="text-sm font-medium">General Inquiries:</p>
            <a
              href="mailto:support@lti.com"
              className="font-bold hover:text-[#ee4223]"
            >
              support@lti.com
            </a>
            <p className="text-sm font-medium mt-3">Account & Verification:</p>
            <a
              href="mailto:compliance@lti.com"
              className="font-bold hover:text-[#ee4223]"
            >
              compliance@lti.com
            </a>
          </div>
          <div>
            <div className="flex items-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Ticket className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Raise a ticket!
              </h5>
            </div>
            <p className="text-sm font-medium">
              Raise a ticket for our multilingual support team, available
              directly from your{" "}
              <span className="font-bold">Client Portal</span> or{" "}
              <span className="font-bold">via the website</span>.
            </p>
          </div>
        </div>
      </section>
      <Section padding="lg">
      <section className="text-center py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-7">Support When You Need It</h2>
        <div className="flex flex-row flex-wrap justify-center gap-y-6 gap-x-1">
          <div className="bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)] p-5 mx-3 min-w-[300px] max-w-[300px]">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Available:
              </h5>
            </div>
            <p>Monday – Friday</p>
          </div>
          <div className="bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)] p-5 mx-3 min-w-[300px] max-w-[300px]">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Timer className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Hours:
              </h5>
            </div>
            <p>24/5 across trading sessions</p>
          </div>
          <div className="bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)] p-5 mx-3 min-w-[300px] max-w-[300px]">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Multilingual support
              </h5>
            </div>
            <p>
              English, Arabic, Spanish, Chinese, Portuguese, French & Russian
            </p>
          </div>
        </div>
      </section>
      <section className="text-center py-10 md:py-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#1A1A1A] to-[#2B2B2B] text-white">
        <h2 className="text-3xl font-bold mb-3">Stay connected</h2>
        <p>For updates, news, and educational content:</p>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-y-6 gap-x-1 mt-5 pt-5">
          <a href="#">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Linkedin className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                LinkedIn
              </h5>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Twitter className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Twitter/X
              </h5>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
                Instagram
              </h5>
            </div>
          </a>
          <a href="#">
            <div className="flex items-center justify-center space-x-4 mb-3 ">
              <div className="flex items-center justify-center">
                <Youtube className="h-6 w-6 text-white" />
              </div>
              <h5 className="font-extrabold text-[18px] sm:text-[20px]">
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
