import React, { useState } from "react";
import accordionData from "../../constants/accordion.data";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [Index, setIndex] = useState(false);

  const data = accordionData
  return (
    <div className="flex flex-col justify-center items-center md:mx-30 p-16 rounded-xl h-auto py-20">
      {data.map((data) => {
        return (
          <AccordionUI
            title={data.question}
            Id={data.id}
            children={data.steps}
            Index={Index}
            setIndex={setIndex}
          ></AccordionUI>
        );
      })}
    </div>
  );
};
export default Accordion;