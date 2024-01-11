'use client'
import {useState} from 'react'

export default function CreateWorkItem() {

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        storyPoints: -1,
        workItemStatus: 'New',
        children: [], 
        linked: [] 
      });

    
    // Handle form input changes
    const handleInputChange = (e : any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e : React.FormEvent) => {
        e.preventDefault();
        
        await fetch("../../../api/postWorkItem", {
            method: "POST",
            headers: {
              "Content-type": "application/json"
            },
            body: JSON.stringify(formData),
          }); 
    };

    return (
        <div>
            <h1 style={{padding: '5px', textAlign: 'center'}}>
                Create New Work Item
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='create-item-container'>
                <label className='form-label' htmlFor="name">Name:</label>
                <input className='form-input'
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />
                </div>
                <div className='create-item-container'>
                <label className='form-label' htmlFor="description">Description:</label>
                <textarea className='form-input'
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
                </div>
                <div className='create-item-container'>
                <label className='form-label' htmlFor="storyPoints">Story Points:</label>
                <input className='form-input'
                    type="number"
                    id="storyPoints"
                    name="storyPoints"
                    value={formData.storyPoints === -1 ? '' : formData.storyPoints}
                    onChange={handleInputChange}
                />
                </div>
                <div className='create-item-btn'>
                    <button className='form-submit-btn' type="submit">Submit</button>
                </div>
            </form>
        </div>
      )
}