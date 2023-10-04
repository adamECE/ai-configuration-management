

export default function BoardItem({item, items, setItems, boardName} : {
    item: any,
    items: string[],
    setItems: any,
    boardName: string 
}) {

    const handleOnDrag = (e : React.DragEvent, item : any) => {
        e.dataTransfer.setData("item", JSON.stringify(item)); 
        e.dataTransfer.setData("id", item.id); 
        e.dataTransfer.setData("boardName", boardName); 
    }

  return (
    <div className='board-item' 
        draggable='true' 
        onDragStart={(e) => handleOnDrag(e, item)}
        style={{alignItems:'center', display:'flex', flexDirection:'column', backgroundColor:'#201F1E'}}>
        <h3 style={{fontSize: '14px', textAlign:'left', margin:'10px 0px 0px 0px', padding:'1px', width:'80%', height:'100%'}}>
          {item.id}
        </h3>
        <h3 style={{fontSize: '16px', textAlign:'left', margin:'0px', padding:'0px', width:'80%', height:'100%'}}>
          {item.name}
        </h3>
        <h3 style={{fontSize: '14px', textAlign:'left', margin:'2px', padding:'0px', width:'80%', height:'100%'}}>
          Story Points: {item.storyPoints}
        </h3>
    </div>
  )
}
