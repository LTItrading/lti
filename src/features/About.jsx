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
        <section className="py-10 px-5">
          <div className="flex flex-row flex-wrap justify-center gap-y-6 gap-x-6">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 tracking-tight">
                Why <span className="text-brand"> We Exist </span>
              </h1>
              <p className="mb-4">
                The truth is, most brokerages treat traders like transactions.
                LTI was built to challenge that.
              </p>
              <p className="mb-4">
                We saw a gap between what traders need and what they’re given.
              </p>
              <p className="mb-4">
                Between over-promised platforms and underwhelming performance.
                So we built something better:
              </p>
              <ul className="list-disc list-inside">
                <li className="mb-2">
                  An environment where transparency is standard, not a feature
                </li>
                <li className="mb-2">
                  A system where conditions adapt to the trader, not the other
                  way around
                </li>
                <li className="mb-2">
                  A culture where support, education, and trust aren’t
                  afterthoughts
                </li>
              </ul>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.8 + 1 * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="flex-1 flex-shrink-0 min-w-[300px]"
            >
              <Card
                className="relative overflow-hidden bg-gradient-to-br from-gray-200/90 to-gray-300/90
             text-gray-900 h-full shadow-xl hover:shadow-2xl
             transition-transform transform hover:-translate-y-1 rounded-2xl
             backdrop-blur-md border border-primary/20"
              >

                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none rounded-2xl" />

                <CardHeader className="relative z-10 text-center">
                  <CardTitle className="text-2xl font-bold text-primary">
                    Our Principles
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-center text-gray-800">
                    <p className="mb-4 italic">
                      We operate on principles that never expire:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-left">
                      <li>
                        Structure matters. Traders thrive when systems are built with discipline.
                      </li>
                      <li>
                        Transparency earns trust. From pricing to performance, everything is clear.
                      </li>
                      <li>
                        Flexibility is power. Trading conditions should reflect your strategy, not restrict it.
                      </li>
                      <li>
                        You don’t need to be institutional to be treated like one.
                      </li>
                    </ol>
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
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
