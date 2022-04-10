import * as mutationType from './mutation-types.js';

const initialState = {
    workers: [],
}

export default {
    namespaced: true,

    state: {
        ...initialState
    },

    getters:{
         getWorkers(state){
            return state.workers;
         }
    },

    mutations: {
        [mutationType.ADD_WORKER](state, payload) {
            state.workers = [...state.workers, payload];
        },  
        [mutationType.DELETE_WORKER](state, deleteWorkerId) {
            state.workers = state.workers.filter(worker => worker.id !== deleteWorkerId)
        },
        [mutationType.EDIT_WORKER](state, editedWorker) {
            state.workers = state.workers.map(item => (item.id === editedWorker.id ? editedWorker : item))
        },
    },
}

