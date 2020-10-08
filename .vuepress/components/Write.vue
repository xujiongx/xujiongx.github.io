<template>
  <div id="write" ref="write"></div>
</template>

<script>
export default {
  name: "write",
  props: {
    text: {
      default: "Hello Word",
      type: String,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.writing(this.text, this.$refs.write);
  },
  methods: {
    writing(text, dom) {
      let index = 0;
      let write = setInterval(() => {
        if (index < text.length) {
          dom.innerHTML =
            dom.innerHTML.replace(/span-animation/g, "") +
            `<span class="span-animation">${text[index]}</span>`;
          ++index;
        }
      }, 200);
    },
  },
};
</script>

<style>
#write {
  font-family: "隶书";
  background-color: antiquewhite;
}
#write::after {
  content: "__";
  animation: blink 0.2s infinite;
}
.span-animation {
  display: inline-block;
  animation: dance 0.2s;
}

@keyframes blink {
  form {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes dance {
  0% {
    opacity: 0;
    transform: translateY(300px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
