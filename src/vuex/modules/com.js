import * as types from '../types';
import axios from 'axios';
import 'babel-polyfill';
/*
通用配置 -(菜单点击效果)

*/

const state={
    Menu:"我是vuex的数据",
    Menu2:"我是vuex的数据"
}

const mutations = {
    [types.Menu](state,res){
        state.Menu = res;
    },
    [types.Menu2](state,res){
        state.Menu2 = res;
    }
}

const actions ={
    getMenuActions({ commit }){
        return new Promise((resolve, reject) => {
              axios.get("../../../static/data.json").then((res) =>{
                    commit(types.Menu2,res.data[0].msg)
                    resolve();
                })
        });
    },
    changeMenu({ commit },str){
         commit(types.Menu,str)
    },
}

const getters = {
    getMenu: state => state.Menu,
    getMenu2: state => state.Menu2,
}
export default {
    state,
    actions,
    getters,
    mutations
}