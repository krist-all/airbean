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

</style>
