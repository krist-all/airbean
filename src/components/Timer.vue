<template>
  <div>
    <b>{{ timerCount }} </b>minuter
  </div>
</template>

<script>
export default {
  data() {
    return {
      timerCount: 13,
    };
  },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 60000);
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
};
</script>

<style scoped></style>
