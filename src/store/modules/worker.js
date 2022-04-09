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
        addWorker(state, payload) {
            state.workers = [...state.workers, payload];
        },  
        deleteWorke(state, deleteWorkerId) {
            state.workers = state.workers.filter(worker => worker.id !== deleteWorkerId)
        },
        editWorker(state, editedWorker) {
            state.workers = state.workers.map(item => (item.id === editedWorker.id ? editedWorker : item))
        }  
    },
}

