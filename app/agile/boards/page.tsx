'use client'
import SingleBoard from './SingleBoard'
import React, {useState, useEffect} from 'react';

export default function Boards() {
  const [newItems,      setNewItems]      = useState([{name:"myItem", id: 123}, {name:"myItem2", id: 122}]);
  const [activeItems,   setActiveItems]   = useState([{name:"otherItem", id: 456}]);
  const [inReviewItems, setInReviewItems] = useState([{name:"myItem", id: 111}]);
  const [closedItems,   setClosedItems]   = useState([{name:"myItem", id: 222}]);
  const [blockedItems,  setBlockedItems]  = useState([{name:"myItem", id: 333}]);
  
  const allItems    = [newItems, activeItems, inReviewItems, closedItems, blockedItems]; 
  const setAllItems = [setNewItems, setActiveItems, setInReviewItems, setClosedItems, setBlockedItems]; 

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
