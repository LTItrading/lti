import { Globe } from "lucide-react";
import React from "react";

export const About = () => {
  return (
    <div>
      <section
        className="py-10 px-5 lg:px-32"
        style={{
          backgroundImage: "url('./src/assets/images/Ellipse2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-1">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 tracking-tight">
              Rooted in <span className="text-brand"> London. </span> Built for
              the <span className="text-brand"> world.</span>
            </h1>
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
              Our mission is simple: To empower serious traders with structure,
              flexibility, and integrity.{" "}
            </p>
          </div>
          <div>
            <img
              className="mx-auto"
              width={350}
              src="./src/assets/images/world.png"
            />
          </div>
        </div>
      </section>
      <section className="py-10 px-5 lg:px-32 bg-gradient-to-r from-[#1A1A1A] to-[#2B2B2B] text-white">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-1">
          <div>
            <img width={350} src="./src/assets/images/london.png" />
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
              From its deep-rooted history in global markets to its regulatory
              standards and financial architecture, London represents a
              commitment to excellence and accountability.
            </p>
            <p className="mb-4">
              That’s what we’ve set out to mirror in everything we do, from our
              execution policies to our client relationships.{" "}
            </p>
          </div>
        </div>
      </section>
      <section className="py-10 px-5 lg:px-32">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-y-6 gap-x-1">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mb-6 tracking-tight">
              Why <span className="text-brand"> We Exist </span>
            </h1>
            <p className="mb-4">
              The truth is, most brokerages treat traders like transactions. LTI
              was built to challenge that.
            </p>
            <p className="mb-4">
              We saw a gap between what traders need and what they’re given.
            </p>
            <p className="mb-4">
              Between over-promised platforms and underwhelming performance. So
              we built something better:
            </p>
            <ul className="list-disc list-inside">
              <li className="mb-2">
                An environment where transparency is standard, not a feature
              </li>
              <li className="mb-2">
                A system where conditions adapt to the trader, not the other way
                around
              </li>
              <li className="mb-2">
                A culture where support, education, and trust aren’t
                afterthoughts
              </li>
            </ul>
          </div>
          <div>
            <div className="md:mx-3 py-10 px-5 bg-gradient-to-r from-[rgba(234,234,234,1)] to-[rgba(216,216,216,1)]">
              <h1 className="text-3xl md:text-4xl lg:text-2xl font-bold mb-6 tracking-tight">
                Our Principles
              </h1>
              <p className="mb-4">
                We operate on principles that never expire:
              </p>
              <ol className="list-decimal list-inside">
                <li className="mb-2">
                  Structure matters. Traders thrive when systems are built with
                  discipline.
                </li>
                <li className="mb-2">
                  Transparency earns trust. From pricing to performance,
                  everything is clear.
                </li>
                <li className="mb-2">
                  Flexibility is power. Trading conditions should reflect your
                  strategy, not restrict it.
                </li>
                <li className="mb-2">
                  You don’t need to be institutional to be treated like one.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center py-10 md:py-14 px-4 sm:px-6 lg:px-8 gradient-hero text-white">
        <Globe className="h-12 w-12 text-primary-foreground mx-auto mb-5 opacity-80" />
        <h2 className="text-3xl font-bold mb-3">
          Built for Global Traders, Not Just Local Ones
        </h2>
        <p>
          While our roots are in London, our reach is global. From the Middle
          East to Southeast Asia, <br /> from Africa to Latin America — we serve
          traders in over 100+ countries with the same <br /> consistent
          philosophy: Precision, professionalism, and partnership.
        </p>
      </section>
    </div>
  );
};
