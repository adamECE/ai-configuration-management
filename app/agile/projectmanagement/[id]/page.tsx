'use client'

import React, {useState, useEffect} from 'react'
import { usePathname, useRouter } from 'next/navigation';
import DirItemBtn from '@/app/components/projectManagement/DirItemBtn';

export default function ScriptPath() {

  const [repoItems, setRepoItems] = useState([]);
  const pathname = usePathname(); 
  const pathnameParts = pathname.split('/');
  const projectName = pathnameParts.pop();
  const [githubPath, setGithubPath] = useState('https://api.github.com/repos/adamECE/'+projectName+'/contents');
  // for some reason projectName can't be assigned 
  let currentPaths : any = [projectName]; 

  useEffect(() => {
    fetch(githubPath)
      .then((response) => response.json())
      .then((result) => setRepoItems(result))
      .catch((error) => console.error('Error:', error));
  }, [githubPath]);

  return (
    <div>
      <h1>Hello PM</h1>
      <div className="dir-items-container">
          {currentPaths.map((item : any, index : number) => (
              <DirItemBtn key={index} name={item} 
                githubPath={githubPath} setGithubPath={setGithubPath} 
                currentPaths={currentPaths}/>
              )
          )}
          {repoItems.map((item : any, index : number) => (
              <DirItemBtn key={index} name={item.name} 
                githubPath={githubPath} setGithubPath={setGithubPath} 
                currentPaths={currentPaths}/>
              )
          )}
      </div>
    </div>
  )
}

/*
  const [myText, setMyText] = useState("");

  useEffect(() => {
    // Replace with the URL of the API you want to call
    fetch('https://api.github.com/repos/adamECE/exampleRepo/contents/Scripts/exampleScript.py')
      .then((response) => response.json())
      .then((result) => setMyText(atob(result.content)))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Hello home</h1>
      <pre>{myText}</pre>
    </div>
  )
*/