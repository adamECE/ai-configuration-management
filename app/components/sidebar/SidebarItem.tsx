'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import { useState } from 'react'

// styling imports 
import { IconType } from 'react-icons';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

export default function SidebarItem ({itemName, itemRoot, itemIcon} : {
    itemName: string,
    itemRoot: string,
    itemIcon: IconType
}) {

    const { push } = useRouter();

    const [isHovered, setIsHovered] = useState(false);
    let IconComponent : IconType = itemIcon;  

    const iconStyles = {
        fill:  isHovered ? '#0D74F5' : 'white',
        width: '80%',
        height: '80%',
        display: 'flex',
        margin: 'auto',
    }

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleSidebarItem = (e : any) => {
        e.preventDefault();
        // console.log("/" + itemRoot.toLowerCase() + "/" + itemName.toLowerCase().trim().replace(/\s/g, ''));
        push("/" + itemRoot.toLowerCase() + "/" + itemName.toLowerCase().trim().replace(/\s/g, ''))
    }  

    return (
        <div className='sidebar-dropdown-btn' 
             data-tooltip-id={itemName}
             data-tooltip-content={itemName}
             data-tooltip-place="right"
             onClick={handleSidebarItem}
             onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}> 
            {IconComponent && <IconComponent style={iconStyles}/>}
            <Tooltip style={{height:'20px'}} id={itemName}/>
        </div>
    )
}
