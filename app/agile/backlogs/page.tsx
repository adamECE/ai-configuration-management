'use client'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'
import FeatureItem from './FeatureItem'

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper(props: WrapperProps) {
  return <div>{props.children}</div>;
}

export default function Backlogs() {

  const { push } = useRouter();
  const [featureName, setFeatureName] = useState("")
  const [showEnterFeatureName, setShowEnterFeatureName] = useState(false); 
  const [featureItemsArray, setFeatureItemsArray] = useState<any[]>([]);      

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
            (item : {type : string}) => item.type === 'Feature');
        console.log(allFeatures)
        setFeatureItemsArray(allFeatures)
      })
      .catch(error => {console.error(error)})
    }

    fetchGetWorkItems();
  }, [])

  const handleCreateNewFeature = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setShowEnterFeatureName(true);
  }

  const handleFeatureNameSubmit = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    setShowEnterFeatureName(false);

    // create new feature work item 

    // redirect to this feature's page
  }

  return (
    <div>
      <button className="create-item-btn" onClick={handleCreateNewFeature}> Create New Feature</button>
      {showEnterFeatureName && 
        <div style={{margin:'1.2rem', height:'2.0rem'}}>
          <input
            onChange={e => setFeatureName(e.target.value)}
            value={featureName}
            style={{height:'30px', width: '500px', margin:'0.5rem'}}
            placeholder="Enter Feature Name"
          />
          <button 
            onChange={handleFeatureNameSubmit}
            style={{height:'30px', margin:'0.5rem'}}
          >
            Create Feature
          </button>
        </div>
      } 

      <div>
        {featureItemsArray.map((item : any) => 
          ( <FeatureItem key={item.id} name={item.name} /> )
        )}
      </div>
    </div>
  )
}