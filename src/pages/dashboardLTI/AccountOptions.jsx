import { motion } from 'framer-motion'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion'
import { CheckCircle } from 'lucide-react'

const accountTypes = [
  {
    name: 'Cent',
    description: 'Perfect for beginners with low-risk exposure.',
    details: ['Spread: From 1.5 pips', 'Commission: None', 'Min Deposit: $5', 'Leverage: Up to 1:1000'],
  },
  {
    name: 'Core',
    description: 'Raw spreads with commission, ideal for scalpers.',
    details: ['Spread: From 0.0 pips', 'Commission: $6/lot', 'Min Deposit: $100', 'Leverage: Up to 1:500'],
  },
  {
    name: 'Pro ',
    description: 'Perfect for beginners with low-risk exposure.',
    details: ['Raw spreads for high-volume traders.', 'Min Deposit: $5,000', '- Spreads: Low', 'Commission: Low', '- Leverage: Up to 1:500','Swap-Free Available: Tick','Priority withdrawals + VPS (optional) (tick).','Negative Balance Protection: Tick'],
  },
  {
    name: 'ECN ',
    description: 'Raw spreads with commission, ideal for scalpers.',
    details: ['Giving traders raw spreads and deep liquidity.', 'Min Deposit: $50', 'Spreads: Raw', 'Commission: Medium','Commission: Medium','	Swap-Free Available: Untick.','Negative Balance Protection: Tick'],
  },
  {
    name: 'Flexi',
    description: 'Perfect for beginners with low-risk exposure.',
    details: ['	Min Deposit: Negotiable.', 'Customised trading environment.', '	Spreads: Negotiable.', '	Commissions: Negotiable.','	Commissions: Negotiable.','	SwapFree Available: Tick.',' 	Negative Balance Protection.'],
  },
  {
    name: 'ECO',
    description: 'Raw spreads with commission, ideal for scalpers.',
    details: ['	Trade with impact', '	A portion of spread revenue is donated to environmental or social causes.', 'Min Deposit: $100', '	Spreads: As low as 0.1 pips','	Spreads: As low as 0.1 pips','	Leverage: 1:100','	Swapfree: Tick','	Negative Balance Protection.'],
  },

]

export default function AccountOptions() {
  return (
<div className="bg-base text-ink min-h-screen py-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h1 className="text-custom-32 font-bold font-montserrat">Open Your Trading Account</h1>
        <p className="mt-4 text-lg font-manrope">
          Choose from tailored account types designed to fit your trading strategy, experience level, and goals.
        </p>
      </motion.div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accountTypes.map((account, index) => (
          <motion.div
            key={account.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-base text-ink rounded-xl shadow-lg p-6 animate-fade-in"
          >
            <h2 className="text-xl font-semibold mb-2 font-montserrat">{account.name}</h2>
            <p className="mb-4 font-manrope">{account.description}</p>
            <Accordion type="single" collapsible>
              <AccordionItem value="details">
                <AccordionTrigger className="text-brand hover:underline font-semibold">View Details</AccordionTrigger>
                <AccordionContent className="mt-2 space-y-2">
                  {account.details.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-brand w-5 h-5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
<button className="mt-6 bg-brand text-brand-foreground px-4 py-2 rounded-lg hover:opacity-90 transition">              Open Account
            </button>
          </motion.div>
        ))}
      </div>

      {/* Trust Banner */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">What sets LTI apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Built for Serious Traders</h3>
            <p>Our ecosystem is designed for high-performance trading. With accounts, platforms, and conditions engineered for execution speed, stability, and scale..</p>
          </motion.div>

            <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2"> Licensed Across Leading Jurisdictions.</h3>
            <p>Our group structure holds regulatory licenses in multiple regions, offering our clients transparency, protection, and the confidence of trading with a globally recognised broker..</p>
          </motion.div>


            <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2">Clarity in Every Trade</h3>
            <p>No hidden fees. No surprises. We offer clearly defined pricing structures with tight spreads, optional raw pricing, and institutional-level transparency..</p>
          </motion.div>


            <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2"> Global Reach. Local Insight.</h3>
            <p>With clients in over 140+ countries, our infrastructure and support systems are built to scale, but our service remains personal, responsive, and localised..</p>
          </motion.div>


            <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2"> Support That Speaks Trader.</h3>
            <p>Our global support team offers expert assistance across languages, time zones, and trading needs, 24/5.</p>
          </motion.div>



            <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className="bg-base text-ink p-6 rounded-xl shadow-md animate-slide-up"
          >
            <CheckCircle className="text-brand w-6 h-6 mb-2" />
            <h3 className="text-xl font-semibold mb-2"> Your Funds, Fully Protected.</h3>
            <p>Client funds are held in top-tier segregated accounts with robust internal safeguards, two-factor authentication, and end-to-end encryption protocols.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
