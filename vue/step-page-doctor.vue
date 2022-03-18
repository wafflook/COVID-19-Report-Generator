 <template>
   <div>
     <div class='ui segment block'>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.医師の氏名' label='氏名' id='医師の氏名'></dat-value>
        </dat-gui>
      </div>
    </div>
     <div class='ui segment block blue'>
       <div class='ui label floating tip right pointing blue'>
          医師
      </div>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.医師の診療科' label='診療科'></dat-value>
           <dat-value v-model='value.医師の氏名カナ' label='氏名カナ' placeholder='カタカナ'></dat-value>
        </dat-gui>
      </div>
    </div>
  </div>
</template>
 <script>
   module.exports={
     mixins:[wizardPage],
     mounted:function(){
       $.fn.autoKana2('#医師の氏名',null,{katakana:true,emptyInputCallback:()=>{this.value.医師の氏名カナ=''},addRubyCallback:(text)=>this.value.医師の氏名カナ+=text})
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