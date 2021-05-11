import Vue from 'vue';
import Vuex from 'vuex';
import newProjModule from '@/store/newProjModule';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        newProjModule,
    },
});
