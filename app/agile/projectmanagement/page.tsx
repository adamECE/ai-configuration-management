'use client'
import ProjectBtn from '@/app/components/projectManagement/ProjectBtn';
import React, {useState, useEffect} from 'react'

export default function ProjectManagement() {

  const [repos, setRepos] = useState([]); 

  useEffect(() => {
    // Replace with the URL of the API you want to call
    fetch('https://api.github.com/users/AdamECE/repos')
      .then((response) => response.json())
      .then((result) => setRepos(result))
      .catch((error) => console.error('Error:', error));
  }, []);

  repos.map((repo : any, index) => (console.log(repo.name)))

  return (
    <div className='test-me'>
      <h1>Projects:</h1>
        <div className="project-btns-container">
          {repos.map((repo : any, index : number) => 
            (<ProjectBtn key={index} name={repo.name}/>)
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