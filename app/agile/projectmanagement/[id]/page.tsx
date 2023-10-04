'use client'

import React, {useState, useEffect} from 'react'
import { usePathname, useRouter } from 'next/navigation';
import DirItemBtn from '@/app/components/projectManagement/DirItemBtn';

export default function ScriptPath() {

  const [repoItems, setRepoItems] = useState([]);
  const [isRepoItem, setIsRepoItem] = useState(false); 
  const [fileContent, setFileContent] = useState('');
  const pathname = usePathname(); 
  const pathnameParts = pathname.split('/');
  const projectName = pathnameParts.pop();
  const [githubPath, setGithubPath] = useState('https://api.github.com/repos/adamECE/'+projectName+'/contents');
  // for some reason projectName can't be assigned 
  let currentPaths : any = [projectName]; 

  // code styles 
  const codeStyles = {
    border:'solid 2px white',
    width: '100%', 
    margin: '5px',
    padding: '5px',
    backgroundColor: 'black',
    color: 'white',
    left: '20px',
  }

  const dirContainerStyles = {
    margin: 'auto',
    left: '20px',
    padding: 'none',
    width: '95%'
  } 

  useEffect(() => {
    fetch(githubPath)
      .then((response) => response.json())
      .then((result : any) => { 
        console.log(result); 
        if (Array.isArray(result)) {
          setRepoItems(result); 
          setIsRepoItem(true);
        } else { 
          setFileContent(atob(result.content));
          setIsRepoItem(false); 
          console.log('type is object')
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [githubPath]);

  return (
    <div>
      <div style={dirContainerStyles}>
          {isRepoItem && repoItems.map((item : any, index : number) => (
              <DirItemBtn key={index} name={item.name} 
                githubPath={githubPath} setGithubPath={setGithubPath} 
                currentPaths={currentPaths}/>
              )
          )}
          {!isRepoItem && <pre style={codeStyles}>{fileContent}</pre>}
      </div>
    </div>
  )
}