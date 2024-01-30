"use client"
import React from 'react'
import { Tooltip , TooltipContent , TooltipProvider , TooltipTrigger } from '../components/ui/tooltip'
import { ActionTooltipProps } from '../types/index.ts'
import Actiontooltip from './action-tooltip.tsx';

const Actiontooltip = ({ label , children , side , align }:Actiontooltip) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
            {children}
        </TooltipTrigger>
        <TooltipContent side={side} align={align}>
            <p className='font-semibold text-sm capitalize'>
                {label.toLowerCase()}
            </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Actiontooltip
