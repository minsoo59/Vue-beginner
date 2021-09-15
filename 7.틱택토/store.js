import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//ES2015 문법 object dynamic property
// 다른파일에서 쓸 수 있게 export 모듈로 만들것
// 오타나기 쉽기 때문에 변수로 빼둔것
export const SET_WINNER = "SET_WINNER"; // import { SET_WINNER } from './store'
export const CLICK_CELL = "CLICK_CELL";
export const CHANGE_TURN = "CHANGE_TURN";
export const RESET_GAME = "RESET_GAME";
export const NO_WINNER = "NO_WINNER";
export default new Vuex.Store({
  // import store from "./store";
  state: {
    tableData: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ],
    turn: "o",
    winner: "",
  }, // vue의 data와 비슷
  getters: {}, // vue의 computed와 비슷
  mutations: {
    [SET_WINNER](state) {
      state.winner = winner;
    },
    [CLICK_CELL](state, { row, cell }) {
      Vue.set(state.tableData[row], cell, state.turn);
    },
    [CHANGE_TURN](state) {
      state.turn = state.turn === "o" ? "x" : "o";
    },
    [RESET_GAME](state) {
      state.turn = "o";
      state.tableData = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ];
    },
    [NO_WINNER](state) {
      state.winner = "";
    },
  }, // state를 수정할 때 사용, 동기적으로
  actions: {}, // 비동기를 사용할때, 또는 여러 mutation을 연달아 실행할때
});
