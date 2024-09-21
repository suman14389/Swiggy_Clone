import { AccordionSvgDown, AccordionSvgUp } from "./Constants";
import { useState } from "react";

const Accordion = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="border-b-2 border-solid border-gray-300 p-4"    >
                <div className="flex justify-between items-center cursor-pointer" onClick={()=> setIsOpen(!isOpen)}>
                    <h3 className="font-bold">{title} </h3>
                    <img src={isOpen ? AccordionSvgUp : AccordionSvgDown} alt="arrow" className="w-4 h-4"/>
                </div>
                {
                    isOpen && <div>{children}</div>
                }
    </div>)
}

export default Accordion;