'use client'
import { useRouter } from 'next/navigation';


export default function Backlogs() {

  const { push } = useRouter();

  const epicStyles = {fontSize:'20px'}; 

  const handleCreateNewItem = (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); 
    push('/agile/backlogs/createWorkItem');
  }

  return (
    <div>

      <button className="create-item-btn" onClick={handleCreateNewItem}> Create New Item</button>
      <div className="backlogs-container"> 
        <button className="epic-btn" style={epicStyles}>Phase 1</button>
        <button className="epic-btn" style={epicStyles}>Phase 2</button>
        <button className="epic-btn" style={epicStyles}>Phase 3</button>
      </div>
    </div>
  )
}


/*
    <button onClick={handleSubmit}>
      Click Me POST
    </button>
    <button onClick={handleSubmitGET}>
      Click Me GET 
    </button>

  const tempChildsChild = {
    name: "childchild",
    id: 8907,
    description: 'this is the childs child',
    storyPoints: 3,
    workItemStatus: "Active"
  }

  const tempChild = {
    name: "child",
    id: 56748723,
    description: 'this is the child',
    storyPoints: 3,
    workItemStatus: "Active",
    children: [tempChildsChild.id]
  }

  const tempItem = {
    name: "parent",
    id: 1125566,
    description: 'this is the parent',
    storyPoints: 3,
    workItemStatus: "Active",
    children:  [tempChild.id],
  }

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    const res = await fetch("../api/postWorkItem", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(tempItem),
    });

    const { msg, success } = await res.json();
    console.log(msg);
    console.log(success)
  };

  const handleSubmitGET = async (e : any) => {
    await fetch("../api/getWorkItems", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(data => {console.log(data)})
    .catch(error => {console.error(error)})
  }

*/