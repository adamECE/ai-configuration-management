'use client'
import React from 'react';
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// styling imports
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { IconType } from 'react-icons'

// TODO remove 
import { GrOverview } from 'react-icons/gr'

export default function SidebarButton({
    name, 
    dropDownState, 
    dropDownNames, 
    dropDownSetters,
    inputIcon} : {
    name: string,
    dropDownState: boolean, 
    dropDownNames: string[],
    dropDownSetters: any, 
    inputIcon: IconType,
}) {

    const { push } = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    let IconComponent : IconType = inputIcon;  

    const iconStyles = {
        fill:  isHovered ? '#0D74F5' : 'white',
        width: '80%',
        height: '80%',
        display: 'flex',
        margin: 'auto',
    }

    const handleModifyDropdown = (e: any) => {
        e.preventDefault(); 
        
        const index = dropDownNames.indexOf(name); 

        if (index !== -1 && index < dropDownSetters.length) {
            dropDownSetters[index](!dropDownState); 

            for(let i = 0; i < dropDownSetters.length; i++){
                if (i !== index) {
                    dropDownSetters[i](false); 
                }
            }
        }

        push('/'+name.toLowerCase());
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    return (
        <div className="tab-container" 
                data-tooltip-id={name}
                data-tooltip-content={name}
                data-tooltip-place="right"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleModifyDropdown}>
            {IconComponent && <IconComponent style={iconStyles}/>}
            <Tooltip style={{height:'20px'}} id={name}/>
        </div>          
    )
}