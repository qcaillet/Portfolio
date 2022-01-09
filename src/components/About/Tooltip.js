import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const TooltipSkills = ({icon, text}) => {
   if (text) {
    return (
      <OverlayTrigger
        placement="right"
        delay={{ show: 250, hide: 400 }}
         overlay={<Tooltip id="button-tooltip-2">{text}</Tooltip>}
      >     
        {icon} 
      </OverlayTrigger>
    );
   } else {
     return null;
   }
};

export default TooltipSkills;
