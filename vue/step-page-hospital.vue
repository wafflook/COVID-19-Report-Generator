 <template>
   <div>
     <div class='ui segment block'>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.病院の名称' label='名称' id='病院の名称'></dat-value>
        </dat-gui>
      </div>
    </div>
     <div class='ui segment block blue'>
       <div class='ui label floating tip right pointing blue'>
         病院
      </div>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.病院の名称カナ' label='名称カナ'></dat-value>
           <dat-value v-model='value.病院の住所' label='住所' id='病院の住所'></dat-value>
           <dat-value v-model='value.病院の住所カナ' label='住所カナ'></dat-value>
           <dat-value :option="phone('病院の連絡先')" v-model='value.病院の連絡先' label='連絡先' placeholder='半角数字'></dat-value>
           <dat-value :option="phone('病院の連絡先の時間外')" v-model='value.病院の連絡先の時間外' label='連絡先の時間外' placeholder='半角数字'></dat-value>
        </dat-gui>
      </div>
    </div>
  </div>
</template>
 <script>
   module.exports={
     mounted:function(){
       $.fn.autoKana2('#病院の名称',null,{katakana:true,emptyInputCallback:()=>{this.value.病院の名称カナ=''},addRubyCallback:(text)=>this.value.病院の名称カナ+=text})
       $.fn.autoKana2('#病院の住所',null,{katakana:true,emptyInputCallback:()=>{this.value.病院の住所カナ=''},addRubyCallback:(text)=>this.value.病院の住所カナ+=text})
     },
     methods:{
       phone:function(name){
         var arr = phone.get(this.value[name])
         return{
           cleave:{
             numericOnly:true,
             delimiters:['(', ')', ' ','-'],
             blocks:arr.length > 1 ? [0,arr[0],0,arr[1],4] : [0,3,0,4,4]
           }
         }
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
</style>