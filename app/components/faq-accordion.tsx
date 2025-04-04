"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  items: FAQItem[]
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="border rounded-md mb-4 bg-gray-50">
          <AccordionTrigger
            className="px-6 py-4 text-left font-medium text-gray-900 hover:no-underline tracking-wide faq-question"
            style={{ fontSize: "22px" }}
          >
            {item.question}
          </AccordionTrigger>
          <AccordionContent
            className="px-6 pb-4 pt-2 text-gray-900 tracking-wide faq-answer text-justify"
            style={{ fontSize: "19px" }}
          >
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

