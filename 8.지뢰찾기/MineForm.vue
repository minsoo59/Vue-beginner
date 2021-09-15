<template>
  <div>
    <input
      type="number"
      placeholder="cell"
      :value="cell"
      @change="onChangeCell"
    />
    <input type="number" placeholder="row" :value="row" @change="onChangeRow" />
    <input
      type="number"
      placeholder="mine"
      :value="mine"
      @change="onChangeMine"
    />
    <button @click="onClickBtn">submit</button>
  </div>
</template>

<script>
import { START_GAME } from "./store";
export default {
  data() {
    return {
      row: 10,
      cell: 10,
      mine: 20,
    };
  },
  methods: {
    onChangeCell({ target: { value } }) {
      this.cell = value;
    },
    onChangeRow({ target: { value } }) {
      this.row = value;
    },
    onChangeMine({ target: { value } }) {
      this.mine = value;
    },
    onClickBtn() {
      this.$store.commit(START_GAME, {
        row: this.row,
        cell: this.cell,
        mine: this.mine,
      });
    },
  },
};
</script>
