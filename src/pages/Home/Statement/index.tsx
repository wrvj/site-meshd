import React, { useEffect, useRef, useState } from "react";
import { StatementSectionContainer } from "./style";
import Fade from "@mui/material/Fade";
import useOnScreen from "../../../Utils/UseOnScreen";
import Collapse from "@mui/material/Collapse";

const animTimeout = 500;
export default function StatementSection() {
  const [animOrder, setAnimOrder] = useState<number>(0);
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  useEffect(()=>{
    isVisible && setAnimOrder(prev=>prev+1);
  }, [isVisible])

  return (
    <StatementSectionContainer>
      <div className="wraper" >
        <Fade in={animOrder>0} timeout={animTimeout} onEntered={()=>setAnimOrder(p=>p+1)}>
          <h1 className="mission-title">Everything starts in 3d!</h1>
        </Fade>

        <Fade in={animOrder>1} timeout={animTimeout} onEntered={()=>setAnimOrder(p=>p+1)}>
          <h2 className="mission-slug">
            From simple daily products to your clothes, the building you are in,
            your car and, of course, all over the entertainment industry.
          </h2>
        </Fade>

        <Fade in={animOrder>2} timeout={animTimeout} onEntered={()=>setAnimOrder(p=>p+1)}>
          <p ref={ref}>
            3D techniques have been used in the design process of products of
            all kinds for decades, and it continues to be a powerful tool for
            that. But over the last few years, 3D has grown to be much more than
            a mean of prototyping physical goods. The world is quickly becoming
            more virtual, and so should your business. Meshd can be your
            partner, providing you and your company tailor-made 3D solutions,
            from traditional ones like product and architecture rendering, to 3D
            for virtual (VR) and augmented (VR) reality, games, animations, and
            even for future: the metaverse.
          </p>
        </Fade>
      </div>
    </StatementSectionContainer>
  );
}
