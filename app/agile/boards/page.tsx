'use client'
import SingleBoard from './SingleBoard'
import React, {useState, useEffect} from 'react';

export default function Boards() {
  const [newItems,      setNewItems]      = useState([]);
  const [activeItems,   setActiveItems]   = useState([]);
  const [inReviewItems, setInReviewItems] = useState([]);
  const [closedItems,   setClosedItems]   = useState([]);
  const [blockedItems,  setBlockedItems]  = useState([]);
  
  const allItems    = [newItems, activeItems, inReviewItems, closedItems, blockedItems]; 
  const setAllItems = [setNewItems, setActiveItems, setInReviewItems, setClosedItems, setBlockedItems]; 

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
        
        const allNewStories = data.workItems.filter(
          (item : {workItemStatus : string, type : string}) => 
          item.workItemStatus === 'New' && item.type === 'Story');
        setNewItems(allNewStories);
  
        const allActiveStories = data.workItems.filter(
          (item : {workItemStatus : string, type : string}) => 
          item.workItemStatus === 'Active' && item.type === 'Story');
        setActiveItems(allActiveStories); 
  
        const allInReviewStories = data.workItems.filter(
          (item : {workItemStatus : string, type : string}) => 
          item.workItemStatus === 'In Review' && item.type === 'Story');
        setInReviewItems(allInReviewStories); 
  
        const allClosedStories = data.workItems.filter(
          (item : {workItemStatus : string, type : string}) => 
          item.workItemStatus === 'Closed' && item.type === 'Story');
        setClosedItems(allClosedStories); 
  
        const allBlockedStories = data.workItems.filter(
          (item : {workItemStatus : string, type : string}) => 
          item.workItemStatus === 'Blocked' && item.type === 'Story');
        setBlockedItems(allBlockedStories); 
        
        console.log(data);
  
      })
      .catch(error => {console.error(error)})
    }

    fetchGetWorkItems(); 
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
