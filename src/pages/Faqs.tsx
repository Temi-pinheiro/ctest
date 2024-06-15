import { useState } from 'react';
import { FaqAccordion } from '../components';

export const FaqsPage = () => {
  const skinCareFAQs = [
    {
      question: 'What makes your skin care products unique?',
      answer:
        'Our skin care products are formulated with high-quality, natural ingredients that are carefully selected for their effectiveness and gentleness on the skin. We prioritize using organic and sustainably sourced components whenever possible.',
    },
    {
      question: 'Are your products suitable for sensitive skin?',
      answer:
        'Yes, our products are designed to be suitable for all skin types, including sensitive skin. We avoid using harsh chemicals, artificial fragrances, and other potential irritants that may cause discomfort or adverse reactions.',
    },
    {
      question: 'Are your products cruelty-free?',
      answer:
        'Absolutely. We are committed to being a cruelty-free brand and do not test our products on animals at any stage of product development or manufacturing. We also ensure that our suppliers adhere to the same ethical standards.',
    },
    {
      question: 'How should I choose the right products for my skin type?',
      answer:
        'We recommend taking our online skin assessment quiz, which will help you identify your skin type and concerns. Based on your results, we will provide personalized product recommendations tailored to your specific needs.',
    },
    {
      question: 'What is your return policy?',
      answer:
        'We want you to be completely satisfied with your purchase. If for any reason you are not happy with a product, you can return it within 30 days of purchase for a full refund or exchange, provided that the product is unused and in its original packaging.',
    },
    {
      question: 'How long does shipping take?',
      answer:
        'We process orders within 1-2 business days, and shipping times vary depending on your location. For domestic orders within the United States, you can expect to receive your package within 3-5 business days. International shipping may take 7-14 business days.',
    },
    {
      question: 'Do you offer samples?',
      answer:
        'Yes, we offer sample kits that allow you to try our best-selling products before committing to full-size versions. Our sample kits are available for purchase on our website, and they include a variety of our most popular skincare items.',
    },
    {
      question: 'What is your approach to sustainability?',
      answer:
        'We are dedicated to minimizing our environmental impact and promoting sustainability. We use eco-friendly packaging materials, such as recycled and recyclable plastics and paper. Additionally, we partner with organizations that support conservation efforts and environmental initiatives.',
    },
  ];
  const [activeQuestion, setActiveQuestion] = useState('');

  return (
    <div className='flex md:min-h-screen flex-col pt-20'>
      <div className='max-w-[1040px] mx-auto w-full px-6 flex flex-col md:mt-20 gap-y-6 max-md:pb-10'>
        <h1 className='text-3xl max-md:pt-4 md:text-[64px] font-semibold '>
          Frequently Asked Questions
        </h1>
        <div className='mt-6 md:mt-10 flex flex-col gap-y-7 '>
          {skinCareFAQs.map((faq) => (
            <FaqAccordion
              key={faq.question}
              title={faq.question}
              answer={faq.answer}
              isOpen={activeQuestion == faq.question}
              setIsOpen={setActiveQuestion}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
