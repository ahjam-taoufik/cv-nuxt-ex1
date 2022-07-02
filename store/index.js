import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
    },
    actions:{
        setPosts(VueContext,posts){
            VueContext.commit('setPosts',posts)   
        }
    },
    getters:{
        loadedPosts(state){
           return state.loadedPosts
        }
    }
  });
};

export default createStore;