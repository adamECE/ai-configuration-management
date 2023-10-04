'use client'
import SingleBoard from './SingleBoard'
import React, {useState, useEffect} from 'react';

export default function Boards() {
  const [allWorkItems,  setAllWorkItems]  = useState([]); // Do I need this? 
  const [newItems,      setNewItems]      = useState([]);
  const [activeItems,   setActiveItems]   = useState([]);
  const [inReviewItems, setInReviewItems] = useState([]);
  const [closedItems,   setClosedItems]   = useState([{ name:'test', id:12345, description:'whatever', storyPoints:3, workItemStatus:'Closed' }]);
  const [blockedItems,  setBlockedItems]  = useState([]);
  
  const allItems    = [newItems, activeItems, inReviewItems, closedItems, blockedItems]; 
  const setAllItems = [setNewItems, setActiveItems, setInReviewItems, setClosedItems, setBlockedItems]; 

  useEffect(() => {
    // TODO: Change this so each does an async call on refresh. 
    // This should help with load times (shouldn't matter for now)
    fetch("../api/getWorkItems", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(res => res.json())
    .then(data => {
      
      const allNewStories = data.workItems.filter(
        (item : {workItemStatus : string}) => item.workItemStatus === 'New');
      setNewItems(allNewStories);

      const allActiveStories = data.workItems.filter(
        (item : {workItemStatus : string}) => item.workItemStatus === 'Active');
      setActiveItems(allActiveStories); 

      const allInReviewStories = data.workItems.filter(
        (item : {workItemStatus : string}) => item.workItemStatus === 'In Review');
      setInReviewItems(allInReviewStories); 

      const allClosedStories = data.workItems.filter(
        (item : {workItemStatus : string}) => item.workItemStatus === 'Closed');
      setClosedItems(allClosedStories); 

      const allBlockedStories = data.workItems.filter(
        (item : {workItemStatus : string}) => item.workItemStatus === 'Blocked');
      setBlockedItems(allBlockedStories); 
      
      console.log(allNewStories);
    })
    .catch(error => {console.error(error)})
  }, []);

  return (
    <div>
      <h1 style={{width:"100%", margin:"10px 0px 0px 0px", textAlign:"center"}}>Boards</h1>
      <div className='boards-container'>
        <SingleBoard name={'New'}       allItems = {allItems} setAllItems={setAllItems}/>
        <SingleBoard name={'Active'}    allItems = {allItems} setAllItems={setAllItems}/>
        <SingleBoard name={'In Review'} allItems = {allItems} setAllItems={setAllItems}/>
        <SingleBoard name={'Closed'}    allItems = {allItems} setAllItems={setAllItems}/>
        <SingleBoard name={'Blocked'}   allItems = {allItems} setAllItems={setAllItems}/>
      </div>
    </div>
  )
}
