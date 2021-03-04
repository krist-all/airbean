<template>
  <div>
    <b>{{ timeRemaining }} </b>minuter
  </div>
</template>

<script>
export default {
  props: [
    'orderTime'
  ],
  data() {
    return {
      timerCount: 13,
      timeRemaining: 0,
    };
  },
  created(){
    const date = new Date()
    const currentTime = date.getTime()
    
    let time  = Math.floor(((this.orderTime/60000)-(currentTime/60000)))
    
    
      this.timeRemaining=   (this.timerCount+time)>=0?(this.timerCount+time):0
  },

  watch: {
    timeRemaining: {
      handler() {

    
    setInterval(()=>{
      const date = new Date()
    const currentTime = date.getTime()
    let time  = Math.floor(((this.orderTime/60000)-(currentTime/60000)))
    
      this.timeRemaining=   (this.timerCount+time)>=0?(this.timerCount+time):0
    }, 5000)
    
    
      },
      immediate: true, 
    },
  },
};
</script>

<style scoped></style>
