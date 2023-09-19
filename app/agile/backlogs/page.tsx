'use client'
import styles from './page.module.css'

export default function Home() {

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const name = "my story";
    const id = 1235;
    const description = 'my description';
    const storyPoints = 3; 
    const workItemStatus = "New"; 

    const res = await fetch("../api/workItem", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        id,
        description,
        storyPoints,
        workItemStatus
      }),
    });

    const { msg, success } = await res.json();
    console.log(msg);
    console.log(success)
  };

  return (
    <div style={{height:"100px"}}>
      <button onClick={handleSubmit}>
        Click Me 
      </button>
    </div>
  )
}
