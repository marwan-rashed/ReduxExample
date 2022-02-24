import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK } from './types';

export const addTask = (title, description) => {
    return {
        type: ADD_TASK,
        payload: {
            title,
            description,
        }
    }
}