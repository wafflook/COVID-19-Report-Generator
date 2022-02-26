 <template>
   <div>
     <table class='block table ui fixed celled single line unstackable very basic'>
       <thead>
         <tr>
           <th>no</th>
           <th>name</th>
           <th>value</th>
        </tr>
      </thead>
       <tbody>
         <tr v-for='result,name,n in debug'>
           <td>{{n+1}}</td>
           <td>{{name.split('.')[1]}}</td>
           <td>{{result}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 <script>
   module.exports={
     computed:{
       debug:function(){
         return flattie(this.value)
       }
     },
     props:{
       value:{
         type:Object,
         default:{}
       }
     }
   }
</script>
 <style>
   .vue-obj-table .ui.table>thead>tr>th:nth-child(1),
   .vue-obj-table .ui.table>tbody>tr>td:nth-child(1){
     width:27px;
     text-align:center;
   }
   .vue-obj-table .ui.table>tbody>tr>td:nth-child(3){
     word-break:break-all;
   }
</style>