"use client"
import Link from "next/link";
import { useState } from 'react';

export default function CurPathLink({
        name,
        pathname 
    } : {
        name: string,
        pathname: string
    }) {

    const displayName = name.charAt(0).toUpperCase() + 
                        name.slice(1)  + " \\";

    const linkStyles = {
        display: 'flex',
        fontWeight: 600,     
        padding: '0.25rem',  
        color: '#4299e1',    
        fontSize: '1.5rem',  
        height: '100%',

        };
                          

    return (
        <Link href={pathname.slice(0, pathname.indexOf(name) + name.length)} style={linkStyles}>
            {displayName}
        </Link>
    );
  }