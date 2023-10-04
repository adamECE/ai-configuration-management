import React from 'react';
import SidebarItem from './SidebarItem';
// Storing names locally to make things simpler, since tabs shold be static. 
const allTabs = [
    {
        "name": "Overview", 
        "items": ["Getting Started", "Statistics", "Wiki"]
    },
    {
        "name": "Agile", 
        "items": ["Project Management", "Boards", "Backlogs", "Stories"]
    },
    {
        "name": "Automation", 
        "items": ["Requirements Generation", "User Story Conversion"]
    },
    {
        "name": "Pipelines", 
        "items": ["TODO"]
    }, 
    {
        "name": "Other", 
        "items": ["TODO"]
    }, 
];

export default function SidebarButtonDropdown({name, dropdownVisibile, dropdownIcons} : {
    name: string,
    dropdownVisibile: boolean,
    dropdownIcons: any 
}) {

    return (
        <div className="sidebar-dropdown-container">
        {dropdownVisibile && (
            allTabs.find((tab : any)=>tab.name===name).items.map((item, index) => (
                <SidebarItem key={name + item} 
                                itemName={item} 
                                itemRoot={name}
                                itemIcon={dropdownIcons[index]}/>
            ))
        )} 
        </div>          
    )
}