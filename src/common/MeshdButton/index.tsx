import React from "react";
import { MeshdButtonComponent } from "./style";


export default function MeshdButton (props: {title: string, callback: any, sx?: any}) {

    const {title, callback, sx} = props;


    return (
        <MeshdButtonComponent sx={{...sx}} onClick={callback}>
            {title}
        </MeshdButtonComponent>
    )
}