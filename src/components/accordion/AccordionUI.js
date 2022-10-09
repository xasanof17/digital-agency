import React, { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

<<<<<<< HEAD
const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
  const [idState, setIdState] = useState(1);
=======
const AccordionUI = ({ title, main, Id, Index, setIndex }) => {
    const [idState,setIdState] = useState(1)
>>>>>>> 5b2c9b28ccd0742cb4c6b57ba217b13e04edcb10
  const handleSetIndex = (Id) => {
    setIdState(Id);
    Index !== idState && setIndex(Id);
  };

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex  cursor-pointer w-full h-16 items-center p-2 mt-2 bg-white hover:bg-#EDF4FA hover:shadow-lg focus:bg-#EDF4FA  border-t-2 border-seadrive"
      >
        {Index !== Id ? (
          <AiOutlinePlusCircle className="w-6 h-6 group-hover:text-white " />
        ) : (
          <AiOutlineMinusCircle className="w-6 h-6 group-hover:text-white " />
        )}
        <div className="flex group cursor-pointer">
          <div className=" font-semibold pl-10 ">{title}</div>
        </div>
        <div className="flex items-center justify-center pr-10"></div>
      </div>
      {Index === Id && (
        <div className="pl-10 font-semibold  w-3/4 h-auto  rounded-md border-l-2 border-blue-300 mb-2 text-base">
          {main.subject}
          <ol>
<<<<<<< HEAD
            <br />
            <li className="text-sm">{children.step_one}</li>
            <br />
            <li className="text-sm">{children.step_two}</li>
            <br />
            <li className="text-sm">{children.step_three}</li>
=======
            <br/>
            <li className="text-sm">{main.step_one}</li>
            <br/>
            <li className="text-sm">{main.step_two}</li>
            <br/>
            <li className="text-sm">{main.step_three}</li>
>>>>>>> 5b2c9b28ccd0742cb4c6b57ba217b13e04edcb10
          </ol>
        </div>
      )}
    </>
  );
};

export default AccordionUI;
