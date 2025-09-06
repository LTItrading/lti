import { motion } from 'framer-motion';
import { CreditCard, Building2, Smartphone, Wallet, Clock, Shield, ChevronDown } from 'lucide-react';
import { PageHeader } from '@/components/layout/PageHeader';
import { Section } from '@/components/layout/Section';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CTAStrip } from '@/components/ui/cta-strip';

const paymentMethods = [
  { icon: CreditCard, name: 'Credit/Debit Cards', desc: 'Visa, Mastercard' },
  { icon: Building2, name: 'Bank Transfer', desc: 'Wire transfer, ACH , Bankwire ,Multibanco,PagoEfectivo ,SafetyPay ,Boleto ,LATAM Cash' },
  { icon: Smartphone, name: 'UPI', desc: 'UPI ,Google Pay' },
  { icon: Wallet, name: 'E-Wallets', desc: 'PayPal, Skrill, Neteller ,M-Pesa ,WeChat Pay ,PIX ,Airtel Money ,Alipay ,Binance Pay ,MoMo (MTN) ,ePay.bg' },
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
        description="Secure, fast, and global payment options with instant processing on most methods. Your funds are protected with bank-grade security."
        showCta={true}
        ctaText="Open your Live Account"
        background="gradient"
      />

      {/* Payment Methods Carousel */}
      <Section padding="lg">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
            Supported Payment Methods
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose from a wide range of secure payment options
          </p>
        </div>

 <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
>
  {paymentMethods.map((method, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="text-center hover:shadow-elegant transition-all duration-300 border border-border rounded-3xl h-full flex flex-col justify-center">
        <CardContent className="pt-6 flex flex-col items-center">
          <method.icon className="w-12 h-12 text-brand mb-4" />
          <h3 className="font-semibold text-ink mb-2">{method.name}</h3>
          <p className="text-sm text-muted-foreground">{method.desc}</p>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</motion.div>
      </Section>

      {/* How To Sections */}
      <Section background="muted" padding="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Deposits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="h-full border border-border rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-ink flex items-center">
                  <Clock className="w-5 h-5 text-brand mr-2" />
                  How to Make a Deposit?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Fund your trading account quickly and securely through the client area.
                </p>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Log into your client portal or mobile app
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Navigate to the "Deposit" section
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Choose your preferred payment method
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Enter the deposit amount and confirm
                  </li>
                </ol>
                <div className="bg-brand/5 border border-brand/20 rounded-xl p-4 mt-6">
                  <p className="text-sm text-ink">
                    <strong>Wide Methods Available:</strong> Cards, bank transfers, UPI, e-wallets, and more local payment options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Withdrawals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="h-full border border-border rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-ink flex items-center">
                  <Shield className="w-5 h-5 text-brand mr-2" />
                  How to Withdraw Funds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  Request withdrawals easily through the client area or mobile app.
                </p>
                <ol className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">1</span>
                    Access the "Withdrawal" section in your client portal
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">2</span>
                    Select withdrawal method and amount
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">3</span>
                    Verify your identity if required
                  </li>
                  <li className="flex items-start">
                    <span className="bg-brand text-brand-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">4</span>
                    Confirm and submit your request
                  </li>
                </ol>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-6">
                  <p className="text-sm text-amber-800">
                    <strong>Important:</strong> Ensure sufficient available balance or requests may be delayed/declined.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section padding="lg">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-ink mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Get answers to common questions about funding and withdrawals
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-2xl px-6 bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-ink">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </Section>

      <CTAStrip
        title="Ready to Fund Your Account?"
        description="Start trading with secure, instant deposits and fast withdrawals."
        variant="brand"
      />
    </main>
  );
}