'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import FeatureItem from './../FeatureItem'

export default function FeaturePage() {
  const { push } = useRouter();
  const [storyItemsArray, setStoryItemsArray] = useState<any[]>([]);      


  useEffect(() => {
    async function fetchGetWorkItems() {
      fetch("../api/getWorkItems", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(res => res.json())
      .then(data => {
        const allFeatures = data.workItems.filter(
            (item : {type : string}) => item.type === 'Story');
            setStoryItemsArray(allFeatures)
      })
      .catch(error => {console.error(error)})
    }

    fetchGetWorkItems();
  }, [])

  const handleCreateNewItem = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    push('/agile/backlogs/createWorkItem');
  }

  return (
    <div>
      <button className="create-item-btn" onClick={handleCreateNewItem}> Create New Story</button>

      <div>
        {storyItemsArray.map((item : any) => 
          ( <FeatureItem key={item.id} name={item.name} /> )
        )}
      </div>
    </div>
  )
}