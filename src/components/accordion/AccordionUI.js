import React,{useState} from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

const AccordionUI = ({ title, children, Id, Index, setIndex }) => {
    const [idState,setIdState] = useState(1)
  const handleSetIndex = (Id) => {
    setIdState(Id)
    Index !== idState && setIndex(Id);
  }

  return (
    <>
      <div
        onClick={() => handleSetIndex(Id)}
        className="flex  cursor-pointer w-full h-16 items-center p-2 mt-2 bg-white hover:bg-#EDF4FA hover:shadow-lg focus:bg-#EDF4FA  border-b-2 border-seadrive"
      >
         {Index !== Id ? (
            <AiOutlinePlusCircle className="w-6 h-6 group-hover:text-white " />
          ) : (
            <AiOutlineMinusCircle className="w-6 h-6 group-hover:text-white " />
          )}
        <div className="flex group cursor-pointer">
          <div className=" font-semibold pl-10 ">
            {title}
          </div>
        </div>
        <div className="flex items-center justify-center pr-10">
         
        </div>
      </div>
      {Index === Id && (
        <div className="pl-10  font-semibold  w-3/4 h-auto  rounded-md p-4 border-l-2 border-blue-300 mb-2 text-base">
          {children.subject}
          <ol>
            <br/>
            <li className="text-sm">{children.step_one}</li>
            <br/>
            <li className="text-sm">{children.step_two}</li>
            <br/>
            <li className="text-sm">{children.step_three}</li>
          </ol>
        </div>
      )}
    </>
  );
};

export default AccordionUI;