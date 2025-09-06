import { motion } from 'framer-motion';
import { CreditCard, Building2, Smartphone, Wallet, Clock, Shield, ChevronDown ,PiggyBankIcon,  BanknoteArrowDown} from 'lucide-react';
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
        <ModernPaymentsFeatures />
      <Section padding="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"> {/* Added max-w-4xl and mx-auto for better centering */}
          {paymentMethods.slice(0, 2).map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-primary-50"> {/* Enhanced hover effect */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary shrink-0 mb-4"> {/* Icon styling */}
                  <method.icon className="w-8 h-8" /> {/* Icon size */}
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{method.name}</h3> {/* Adjusted heading for professionalism */}
                  <p className="text-base text-gray-700">{method.desc}</p> {/* Paragraph directly after h3 */}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

    


    </main>
  );
}

