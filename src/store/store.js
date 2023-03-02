import { createStore } from "vuex";

const store = createStore({
    state: {
        UserData: [],
    },
    mutations: {
        setUsers(state, UserData) {
            state.UserData = UserData;
        },
    },
    actions: {
        async fetchAllUsers(context) {
            try {
                const response = await fetch("https://reqres.in/api/users");
                const data = await response.json();
                context.commit("setUsers", data);
            } catch (err) {
                return console.error(err);
            }
        },

    },
    getters: {
    UserData(state) {
        return state.UserData;
    },
},
})

export default store;