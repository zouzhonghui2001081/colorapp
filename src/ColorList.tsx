import React, { FC } from "react";
import Color from "./Color";
import {ColorStructure} from "./ColorStructure";


export const ColorList: FC<{colors: ColorStructure[], onRateColor:(id:string, rating:number) =>void}> = ({ colors, onRateColor }) =>
{
    if(!colors.length)
        return <div>No Colors Listed.</div>
    else
        return(
            <div>
                {
                    colors.map(color=>(<Color key={color.id} color={color} onRate={onRateColor} />))
                }
            </div>
        );
}