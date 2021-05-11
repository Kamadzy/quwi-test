import axios from 'axios';
const base_URL = 'https://api.quwi.com/v2';
export default {
    state: {
        projects: [
            { id: 1, title: 'proj1' },
            { id: 2, title: 'proj2' },
            { id: 3, title: 'proj3' },
        ],
        token: '',
    },
    mutations: {
        ADD_PROJECT(state, payload) {
            const newProj = {
                id: Date.now(),
                title: payload,
            };
            state.projects.push(newProj);
        },
    },
    getters: {
        getAllProjects: (state) => state.projects,
    },
    actions: {
        addProject({ commit }, payload) {
            commit('ADD_PROJECT', payload);
        },
        async getToken({ commit }, payload) {
            const resp = await axios.post(`${base_URL}/auth/login`, {
                body: payload,
            });
        },
    },
};
