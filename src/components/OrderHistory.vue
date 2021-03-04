<template>
  <div>
      <div>
          <h3>
              {{orderNumber}}     {{date}}
          </h3>
          <p>
              total ordersumma {{total}}

          </p>
      </div>


  </div>
</template>

<script>
export default {
    props:{
        orderNumber: String,
        date: String,
        total: Number,
    },
    
    computed:{
       
    }
}
</script>

<style scoped>
h3{
    font-family: sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 120%;

    color: rgba(255, 255, 255, 0.7);
}
p{
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 120%;

    color: rgba(255, 255, 255, 0.5);
}

</style>
