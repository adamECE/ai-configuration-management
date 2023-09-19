'use client'
import { useRouter } from 'next/navigation';

export default function ProjectBtn({name} : {
    name: string
}) {

  const router = useRouter(); 

  const handleProjectBtn = () => {
    router.push(`/agile/projectmanagement/${name}`)
  }

  return (
    <button className='project-btn' onClick={handleProjectBtn}>
      {name}
    </button>
  )
}