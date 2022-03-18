 <template>
   <div>
     <div class="ui label floating tip right pointing teal">
       設定
    </div>
     <div class='content fitted'>
       <dat-gui>
         <dat-value v-model='value.debounce' label='入力をＰＤＦに反映' :values='debounce'></dat-value>
         <dat-folder name='カラー'>
           <dat-color v-model='value.color.text' label='文字色'></dat-color>
           <dat-color v-model='value.color.mark' label='塗潰色'></dat-color>
        </dat-folder>
         <dat-folder name='フォント'>
           <dat-value v-model='value.fontname' label='ファミリ' :values='_.keys(fonts)'></dat-value>
        </dat-folder>
      </dat-gui>
    </div>
  </div>
</template>
 <script>
   module.exports={
     props:{
       value:{
         type:Object,
         default:{
         }
       }
     },
     data:function(){
       return{
         debounce:{
           '０.５秒間入力がなければ反映':500,
           '１.０秒間入力がなければ反映':1000,
           '１.５秒間入力がなければ反映':1500
         },
         fonts:{
           'あずきフォント':'1.21.ttf',
           'うずらフォント':'1.00.ttf',
           'Ｎちはやフォント+':'1.2.1.ttf',
           '851手書き雑フォント':'0.883.ttf',
           'M+2VM+IPAG circle Regular':'1.011.ttf'
         }
       }
     }
   }
</script>
 <style>
</style>