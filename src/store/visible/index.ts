/** @description 表示の状態管理を行なう */
import { Getters, Mutations, Actions } from "vuex";
import { S, G, M, A } from "./type";
// ______________________________________________________
//
export const state = (): S => ({
  drawer: false,
  dialog: false
});
// ______________________________________________________
//
/**
 * stateを利用して作られる,vueファイル内で使う値
 */
export const getters: Getters<S, G> = {
  drawer(state) {
    return state.drawer;
  },
  dialog(state) {
    return state.dialog;
  }
};
// ______________________________________________________
//
/**
 * 同期的なstate値の更新
 * payloadはオブジェクト型であるのが望ましい
 */
export const mutations: Mutations<S, M> = {
  /**
   * ナビゲーションバーの表示のon/off
   * @param payload: { bool: boolean }
   */
  chDrawer(state, payload) {
    state.drawer = payload.bool;
  },
  chDialog(state, payload) {
    state.dialog = payload.bool;
  }
};
// ______________________________________________________
//
/**
 * 非同期な処理を行なう
 * @example
 * asyncSetCount(ctx, payload) {
 *   ctx.commit('setCount', { amount: payload.amount })
 * }
 * @literal => `async${Verb}`
 */
export const actions: Actions<S, A, G, M> = {};
