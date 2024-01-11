'use client'
import { useRouter } from 'next/navigation';

export default function FeatureItem({name} : {
    name: string
}) {
    const { push } = useRouter();

    const handleClick = (e : React.MouseEvent<HTMLButtonElement>) => {
        localStorage.setItem('curFeature', name)
        push(`/agile/backlogs/${name.replace(/\s/g, '')}`);
    }

    return (
        <button className="epic-btn" style={{fontSize:'20px'}} onClick={handleClick}>
            {name}
        </button>
      )
}