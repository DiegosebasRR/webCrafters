import TitleSection from "@/components/TitleSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { questions } from "@/data/questions";

const Questions = () => {
  return (
    <div className=" max-w-screen-xl m-auto px-10">
      <p className="text-center font-semibold text-lg mb-[-2rem]">
        Preguntas frecuentes{" "}
      </p>
      <TitleSection title="Todo lo que necesitas saber" />
      <div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, key) => (
            <AccordionItem key={key} value={`item-${key}`}>
              <AccordionTrigger>{question.pregunta}</AccordionTrigger>
              <AccordionContent>{question.respuesta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Questions;
