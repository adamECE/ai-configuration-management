'use client'
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SidebarButton({name, dropDownState, dropDownNames, dropDownSetters} : {
    name: string,
    dropDownState: boolean, 
    dropDownNames: string[],
    dropDownSetters: any 
}) {

    const { push } = useRouter();
   
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
    
    return (
        <div className="tab-container"  onClick={handleModifyDropdown}>
            <h3>{name}</h3>
        </div>          
    )
}