'use client'

export default function DirItemBtn({name, githubPath, setGithubPath, currentPaths} : {
    name          : string,
    githubPath    : string,
    setGithubPath : any, 
    currentPaths  : string[] 
}) {

  const handleProjectBtn = () => {
    setGithubPath(githubPath + '/' + name); 
  }

  return (
    <button className='project-btn' onClick={handleProjectBtn}>
      {name}
    </button>
  )
}