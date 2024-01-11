
import { json } from "node:stream/consumers";
import BoardItem from "./BoardItem"

const names = ['New', 'Active', 'In Review', 'Closed', 'Blocked']; 

export default function SingleBoard({name, allItems, setAllItems} : {
    name: string
    allItems: any 
    setAllItems: any 
}) {
    const currentBoardIndex = names.indexOf(name);     
    let items = allItems[currentBoardIndex];
    let setItems = setAllItems[currentBoardIndex];
    const handleOnDrop = (e : React.DragEvent) => {
        // grab item from dataTransfer
        let droppedItemStr = e.dataTransfer.getData("item") as string;
        let pastBoardName = e.dataTransfer.getData("boardName") as string;
        let droppedItem = JSON.parse(droppedItemStr); 
        let tempItems = items.slice(); 

        console.log(droppedItem)
        
        // reset item list 
        tempItems.push(droppedItem); 
        setItems(tempItems);
        
        // remove item from original list
        const pastBoardIndex = names.indexOf(pastBoardName);
        const pastBoardItems = allItems[pastBoardIndex].slice(); 
        setAllItems[pastBoardIndex](pastBoardItems.filter(
            (item:any) => item.id !== droppedItem.id)
        ) 

        // Update items state in db 
        fetch("../api/updateWorkItem", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
              "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                _id: droppedItem._id,
                workItemStatus: name
            })
          })
          .then( res => res.json() )
          .then( data => console.log(data))
    }
    
    const handleDragOver = (e : React.DragEvent) => {
        e.preventDefault(); 
    } 

  return (
    <div className='board-container' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        <h1 style={{margin:"10px 0px 40px 0px", width:"100%", textAlign:'center'}}>{name}</h1>
        {items.map((item : any) => 
            ( <BoardItem 
                key={item.id} 
                item={item} 
                items={items} 
                setItems={setItems}
                boardName={name}
            />)
        )}
    </div>
  )
  //
}
