/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2020-01-09 10:00:43
 * @LastEditors: wpp
 * @LastEditTime : 2020-02-12 10:41:18
 */
import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './action';
import getters from './getters';
import mutations from './mutations';
import editOpt from './modules/editOpt/index';
import editData from './modules/editData/index';

Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    editOpt,
    editData,
  },
});
