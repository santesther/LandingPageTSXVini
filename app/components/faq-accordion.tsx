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
        <AccordionItem key={index} value={`item-${index}`} className="border rounded-md mb-4 bg-white">
          <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-800 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

