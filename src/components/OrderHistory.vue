<template>
  <div class="history-line">
      <div>
          <h3>
              <span class="id">
                  {{orderNumber}}</span> <span class="date">    {{date}}</span>
          </h3>
          <p>
              total ordersumma <span class="total">{{total}}</span>
          </p>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        orderNumber: String,
        date: String,
        total: String,
    }
}
</script>

<style scoped>

.history-line{
border-bottom: 1px solid rgba(255, 255, 255, 0.08);
padding-top: 12px;
}
h3{
margin: 0;
display: flex;
justify-content: space-between;
font-family: 'Work Sans', sans-serif;
}
h3 .id{
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 1.2;

color: rgba(255, 255, 255, 0.7);
}
h3 .date{  
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 1.2;
text-align: right;

color: rgba(255, 255, 255, 0.7);
}
p{
font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 120%;
margin: 0;
margin-top: 8px;
color: rgba(255, 255, 255, 0.5);
padding-bottom: 12px;
display: flex;
justify-content: space-between;
}
p .total{
margin-left: auto;
}
</style>
