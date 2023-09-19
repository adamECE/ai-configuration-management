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
        "name": "Pipelines", 
        "items": ["TODO"]
    }, 
    {
        "name": "Other", 
        "items": ["TODO"]
    }, 
];

export default function SidebarButtonDropdown({name, dropdownVisibile} : {
    name: string,
    dropdownVisibile: boolean
}) {

    return (
        <div className="sidebar-dropdown-container">
        {dropdownVisibile && (
            allTabs.find((tab : any)=>tab.name===name).items.map((item) => (
                <SidebarItem key={name + item} itemName={item} itemRoot={name}/>
            ))
        )} 
        </div>          
    )
}