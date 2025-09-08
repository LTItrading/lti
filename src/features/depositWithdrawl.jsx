import { motion } from 'framer-motion';
import { CreditCard, Building2, Smartphone, Wallet, Clock, Shield, ChevronDown, PiggyBankIcon, BanknoteArrowDown } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CTAStrip } from '@/components/ui/cta-strip';
import ModernPaymentsFeatures from './modernPaymentsFeatures';
const paymentMethods = [
  { icon: PiggyBankIcon, name: 'How to Make a Deposit?', desc: 'Easily fund your trading account through the LTI client area. Choose from a wide range of secure deposit methods designed to suit every client’s needs and preferences.' },
  { icon: BanknoteArrowDown, name: 'How to Withdraw Funds', desc: 'Easily request a withdrawal through the LTI client area or mobile app. We offer a variety of secure withdrawal options designed to suit different client preferences and ensure smooth fund transfers' },
];

const faqItems = [
  {
    question: 'How long do deposits take to process?',
    answer: 'Most deposits are processed instantly. Bank transfers may take 1-3 business days depending on your bank.'
  },
  {
    question: 'Are there any deposit fees?',
    answer: 'LTI does not charge deposit fees. However, your bank or payment provider may charge their own fees.'
  },
  {
    question: 'What is the minimum deposit amount?',
    answer: 'Minimum deposit varies by account type, starting from $5 for Cent accounts and $50 for Core accounts.'
  },
  {
    question: 'How long do withdrawals take?',
    answer: 'Withdrawal processing times vary by method: E-wallets (24 hours), Cards (2-5 business days), Bank transfers (3-5 business days).'
  },
  {
    question: 'Can I withdraw to a different payment method?',
    answer: 'For security reasons, withdrawals must be made to the same payment method used for deposits, up to the deposited amount.'
  }
];

export default function DepositsWithdrawals() {
  return (
    <main className=" bg-base min-h-screen">
      <PageHeader
        title="How to Fund and Withdraw from Your LTI Account"
        description="Choose from a wide range of secure, fast, and global payment methods to fund your trading account or withdraw your profits. Instant processing available on most major options."
        showCta={true}
        ctaText="Open your Live Account"
        background="gradient"
      />

      <Section padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Deposit Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <Card className="flex flex-col h-full rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-2 hover:scale-[1.02] bg-white">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-5 shadow-inner">
                <PiggyBankIcon className="w-12 h-12" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-extrabold text-2xl text-gray-900 mb-3 tracking-tight">
                  How to Make a <span className="text-primary">Deposit</span>?
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Easily fund your trading account through the LTI client area. Choose from a wide range of secure deposit
                  methods designed to suit every client’s needs and preferences.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Withdraw Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          >
            <Card className="flex flex-col h-full rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-400 transform hover:-translate-y-2 hover:scale-[1.02] bg-white">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 text-primary mb-5 shadow-inner">
                <BanknoteArrowDown className="w-12 h-12" />
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-extrabold text-2xl text-gray-900 mb-3 tracking-tight">
                  How to <span className="text-primary">Withdraw Funds</span>?
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Easily request a withdrawal through the LTI client area or mobile app. We offer a variety of secure withdrawal
                  options designed to suit different client preferences and ensure smooth fund transfers.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-muted-foreground max-w-3xl mx-auto mt-10 leading-relaxed text-center">
          Clients must ensure sufficient available balance before submitting a withdrawal request. Requests that exceed the
          available balance or fail to meet account requirements may be delayed or declined.
        </p>
      </Section>

      <ModernPaymentsFeatures />
    </main>
  );
}

