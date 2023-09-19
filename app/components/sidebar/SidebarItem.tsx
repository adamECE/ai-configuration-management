'use client'
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SidebarItem ({itemName, itemRoot} : {
    itemName: string,
    itemRoot: string
}) {

    const { push } = useRouter();

    const handleSidebarItem = (e : any) => {
        e.preventDefault();
        console.log("/" + itemRoot.toLowerCase() + "/" + itemName.toLowerCase().trim().replace(/\s/g, ''));
        push("/" + itemRoot.toLowerCase() + "/" + itemName.toLowerCase().trim().replace(/\s/g, ''))
    }  

    return (
        <div className='sidebar-dropdown-btn' onClick={handleSidebarItem}> 
            {itemName} 
        </div>
    )
}
