<template>
  <div class="lotto">
    <div>
      <div>당첨 숫자</div>
      <div id="결과창">
        <lotto-ball v-for="ball in winBalls" :key="ball" :number="ball" />
      </div>
    </div>
    <div v-if="redo">
      <div>보너스</div>
      <lotto-ball v-if="bonus" :number="bonus" />
      <button @click="onClickRedo">One more!</button>
    </div>
  </div>
</template>

<script>
import LottoBall from "./LottoBall";
const timeOuts = [];
function getWinNumber() {
  console.log("getWinNumbers");
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}
export default {
  components: { LottoBall },
  data() {
    return {
      winNumbers: getWinNumber(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumber();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeOuts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 1000);
      }
      timeOuts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 7000);
    },
  },

  mounted() {
    this.showBalls();
  },
  beforeDestroy() {
    timeOuts.forEach((t) => {
      clearTimeout(t);
    });
  },
  watch: {
    bonus(value, oldValue) {
      if (value === null) {
        this.showBalls();
        console.log(value, oldValue);
      }
    },
  },
};
</script>

<style scoped>
.lotto {
  display: flex;
}
</style>
