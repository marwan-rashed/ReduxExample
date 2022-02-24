import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from './types';

const initialState = {
    tasks: [
        {title: 'Test Task', description: 'Task from initial state object'},
    ],
    completedTasks: []
};

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:

        case COMPLETE_TASK:

        case REMOVE_TASK:

        default:
            return state;
    }
};

export default tasksReducer;