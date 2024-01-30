import React from 'react'
import { Plus } from 'lucide-react'
import Actiontooltip from '../action-tooltip.tsx';

const NavigationAction = () => {
  return (
    <div>
      <Actiontooltip side="right" align="center" label="Add a Playground">
      <button className="group flex items-center">
        <div className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-backgroundcdark:bg-neutral-700 group-hover:bg-rose-500">
      <Plus className="group-hover:text-whitw transition tsxt-rose-500" size={25}/>
        </div>
      </button>
      </Actiontooltip>
    </div>
  )
}

export default NavigationAction
