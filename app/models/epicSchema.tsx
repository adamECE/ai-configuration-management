import mongoose from "mongoose";
import { Schema } from 'mongoose';

const workItemScehma = new Schema({
    // item name 
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true,
        minLength: [2,  'Name must be larger than 2 characters'],
        maxLength: [50, 'Name must be less than 50 characters']
    },

    // work item id for identification 
    id: {
        type: Number,
        required:  [true, 'Id is required'],
        minLength: [20,   'Id must be at least 20 characters']
    },

    // work item description
    description: {
        type: String,
        required: [true, 'Description, even as an empty string, is required'],
        trim: true
    },

    // Current accepted types are: "Story" and "Feature"
    // TODO: Make this an enum
    type: {
        type: String,
        required: [true, 'Type must be Story or Feature'],
        trim: true
    },

    // story points associated with work item, defaulted to unassigned (-1)
    storyPoints: {
        type: Number, 
        required: [true, 'Story points, setting required'],
        trim: true
    },

    // State can be New, Active, In Review, Completed, or Blocked
    workItemStatus: {
        type: String,
        required: [true, 'State should be required, should default to new'],
        trim: true
    },

    children: {
        type: Array<Number>,
        required: [false, 'no children need to be initialized']
    },

    linked: {
        type: Array<Number>,
        required: [false, 'no links need to be initialized']
    }

    // acceptanceCriteria: {
    //     type: String,
    //     required: [true, 'Acceptance Criteria, even as an empty string, is required'],
    //     trim: true
    // },
}, {
    collection: 'WorkItems'
})

const WorkItem = mongoose.models.WorkItem || mongoose.model("WorkItem", workItemScehma);
export default WorkItem; 