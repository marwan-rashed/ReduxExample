import { ADD_TASK, COMPLETE_TASK, REMOVE_TASK} from './types';

const initialState = {
    tasks: []
};

let lastId = 1;

const tasksReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            const newState = {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: lastId++,
                        title: action.payload.title,
                        description: action.payload.description,
                        completed: false
                    }
                ]
            }
            return newState;
        case COMPLETE_TASK:

        case REMOVE_TASK:

        default:
            return state;
    }
};

export default tasksReducer;