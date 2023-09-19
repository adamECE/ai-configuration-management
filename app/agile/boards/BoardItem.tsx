

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
        onDragStart={(e) => handleOnDrag(e, item)}>
        {item.name}
    </div>
  )
}
