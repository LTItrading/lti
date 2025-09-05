import React from "react";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

export default function LanguagesSlider({ languages = [], isInView }) {
  if (!Array.isArray(languages) || languages.length === 0) {
    return null; // nothing to render
  }

  return (
    <div className="mb-12"> {/* more bottom space */}
      <h4 className="text-2xl font-bold text-foreground mb-8 text-center">
        Available Languages
      </h4>

      <div
        className="relative w-full overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      >
        <div className="flex animate-scroll space-x-8 sm:space-x-10 md:space-x-12 min-w-[200%] px-6">
          {[...languages, ...languages].map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.3 + (idx % languages.length) * 0.05 }}
              className="flex items-center space-x-3 px-6 py-3 bg-muted/50 rounded-xl border border-primary/10 flex-shrink-0 shadow-sm"
            >
              {/* <span className="text-2xl">{lang.flag}</span> bigger flag */}
              <ReactCountryFlag svg countryCode={lang.flag} key={lang.flag}  />
              <span className="text-base font-semibold text-foreground">
                {lang.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
