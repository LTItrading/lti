import { Section } from "@/components/layout/Section";
import { Globe } from "lucide-react";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BigBen from "@/assets/images/shield.webp";
import Tower from "@/assets/images/london-on.webp";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref}>
      <section
        className="py-10 px-5 lg:px-32 about-header-bg"
      // style={{
      //   backgroundImage: "url('./src/assets/images/Ellipse2.png')",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-1">
          <div>
            <h2 className="text-4xl md:text-4xl font-bold text-foreground mb-4">
              Rooted in <span className="text-brand"> London. </span> Built for
              the <span className="text-brand"> world.</span>
            </h2>
            <p className="mb-4">
              At London Trading Index (LTI), our story begins not just with a
              platform — but with a belief: That retail traders deserve access
              to the same level of tools, transparency, and trust once reserved
              for institutions.
            </p>
            <p className="mb-4">
              Born in one of the world’s most respected financial centres, we
              carry the weight of that reputation forward — not with slogans,
              but with substance.
            </p>
            <p className="mb-4">
              Our mission is simple To empower serious traders with structure,
              flexibility, and integrity.
            </p>
          </div>
          <div>
            <img className="mx-auto" width={450} src={BigBen} />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4 mt-10">
        <Card className="py-10 px-5 lg:px-32 bg-gradient-to-br from-brand/5 to-brand/10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-1">
              <div>
                <img width={300} src={Tower} />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 tracking-tight">
                  A Brokerage Inspired by{" "}
                  <span className="text-brand"> London’s Legacy</span>
                </h1>
                <p className="mb-4">
                  London isn’t just in our name, it’s in our DNA.
                </p>
                <p className="mb-4">
                  From its deep-rooted history in global markets to its
                  regulatory standards and financial architecture, London
                  represents a commitment to excellence and accountability.
                </p>
                <p className="mb-4">
                  That’s what we’ve set out to mirror in everything we do, from
                  our execution policies to our client relationships.{" "}
                </p>
              </div>
            </div>
          </motion.div>
        </Card>
<section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100/30">
  <div className="max-w-6xl mx-auto px-5">
    {/* Header */}
    <div className="text-center mb-12">
      <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Mission</span>
      <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
        Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">We Exist</span>
      </h1>
      <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Card */}
      <div className="lg:w-1/2">
        <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Challenging the Status Quo</h2>

          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              The truth is, most brokerages treat traders like transactions. LTI was built to challenge that.
            </p>
            <p className="leading-relaxed">
              We saw a gap between what traders need and what they’re given.
            </p>
            <p className="leading-relaxed">
              Between over-promised platforms and underwhelming performance. So we built something better:
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-primary to-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">1</div>
              <div>
                <p className="text-gray-600">An environment where transparency is standard, not a feature</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-primary to-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">2</div>
              <div>
                <p className="text-gray-600">A system where conditions adapt to the trader, not the other way around</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-gradient-to-r from-primary to-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1 flex-shrink-0">3</div>
              <div>
                <p className="text-gray-600">A culture where support, education, and trust aren’t afterthoughts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Card */}
      <div className="lg:w-1/2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 + 1 * 0.1 }}
          whileHover={{ scale: 1.03 }}
          className="h-full"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
            <div className="flex items-center mb-6">
              <div className="bg-primary 50 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Our Principles</h2>
            </div>

            <p className="text-gray-600 italic mb-6">
              We operate on principles that never expire:
            </p>

            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">01</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Structure Matters</h3>
                  <p className="text-gray-600 mt-1">Traders thrive when systems are built with discipline.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">02</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Transparency Earns Trust</h3>
                  <p className="text-gray-600 mt-1">From pricing to performance, everything is clear.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white  font-bold">03</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Flexibility is Power</h3>
                  <p className="text-gray-600 mt-1">Trading conditions should reflect your strategy, not restrict it.</p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">04</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Institutional Treatment</h3>
                  <p className="text-gray-600 mt-1">You don’t need to be institutional to be treated like one.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-sm text-gray-500 text-center">
                Guiding our decisions since day one
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
          className="relative gradient-hero rounded-2xl p-12 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <Globe className="h-12 w-12 text-primary-foreground mx-auto mb-5 opacity-80" />
            <h2 className=" font-bold mb-3 font-manrope font-extrabold text-[18px] sm:text-[20px] mb-3 relative z-10 text-white">
              Built for Global Traders, Not Just Local Ones
            </h2>
            <p className="text-primary-foreground/90 text-lg">
              While our roots are in London, our reach is global. From the
              Middle East to Southeast Asia, <br /> from Africa to Latin America
              — we serve traders in over 100+ countries with the same consistent
              philosophy, Precision, professionalism, and partnership.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
