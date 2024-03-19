import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Faqs = () => {
return (
    <div className="max-w-md w-full">
    <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
        <AccordionTrigger>NextAuth Available</AccordionTrigger>
        <AccordionContent>
        Yes
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Database added?</AccordionTrigger>
        <AccordionContent>
            Yes, NeonDb Was Interated to save and manage registered users
        </AccordionContent>
    </AccordionItem>
    </Accordion>
</div>
)
}

export default Faqs