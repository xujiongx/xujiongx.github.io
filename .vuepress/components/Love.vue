<template>
  <span id="love">
    <span class="love-left"></span>
    <span class="love-right"></span>
    <span class="love-text">{{ text }}</span>
  </span>
</template>

<script>
export default {
  name: "love",
  props: {
    text: {
      required: false,
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
span {
  display: inline-block;
}
.love-left,
.love-right {
  width: 25px;
  height: 40px;
  background-color: red;
  border-top-left-radius: 12.5px;
  border-top-right-radius: 12.5px;
}

.love-left {
  transform: rotate(-45deg);
}
.love-right {
  transform: translateX(-17.5px) rotate(45deg);
}
.love-text {
  position: relative;
  left: -52px;
  top: -14px;
  font-size: 12px;
}
#love {
  animation: beat 1.2s infinite;
}

@keyframes beat {
  30% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
