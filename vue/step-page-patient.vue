 <template>
   <div>
     <div class='ui segment block'>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.患者の氏名' label='氏名' id='患者の氏名'></dat-value>
        </dat-gui>
      </div>
    </div>
     <div class='ui segment block blue'>
       <div class="ui label floating tip right pointing blue">
         患者
      </div>
       <div class='content fitted'>
         <dat-gui>
           <dat-value v-model='value.患者の氏名カナ' label='氏名カナ' placeholder='カタカナ'></dat-value>
           <dat-value v-model='value.患者の職業' label='職業'></dat-value>
           <dat-value v-model='value.患者の性別' label='性別' :values="dat.values.sex"></dat-value>
           <dat-value :option="date('患者の生年月日')" :raw='false' v-model='value.患者の生年月日' label='生年月日' placeholder='YYYY/MM/DD'></dat-value>
           <dat-value v-model='value.患者のＩＤ' label='ＩＤ'></dat-value>
           <dat-value v-model='value.患者の年齢' label='年齢' readonly></dat-value>
           <dat-value v-model='value.患者の年齢のヶ月目' label='年齢のヶ月' readonly></dat-value>
        </dat-gui>
      </div>
    </div>
                    <div class='ui segment block'>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value :option="zip('患者の住所の郵便番号')" v-model='value.患者の住所の郵便番号' label='郵便番号' id='患者の住所の郵便番号' placeholder='半角数字'></dat-value>
                       </dat-gui>
                     </div>
                   </div>
                    <div class='ui segment block' v-show='_.keys(住所候補を患者の住所の郵便番号から).length > 0'>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value label='住所一覧' v-model='dat.temp.address1' :values='住所候補を患者の住所の郵便番号から' @finishchange='test2' placeholder='半角数字'></dat-value>
                       </dat-gui>
                     </div>
                   </div>
                    <div class='ui segment block blue'>
                      <div class="ui label floating tip right pointing blue">
                        住所
                     </div>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value v-model='value.患者の住所の都道府県' label='都道府県' :values="jpPrefecture.getAll('pref', 'name')" placeholder='半角数字'></dat-value>
                          <dat-value v-model='value.患者の住所の市区町村' label='市区町村' placeholder='全角'></dat-value>
                          <dat-value v-model='value.患者の住所の町域番地' label='町域番地' placeholder='全角'></dat-value>
                          <dat-value v-model='value.患者の住所の建物号室' label='建物号室' placeholder='全角'></dat-value>
                          <dat-value :option="phone('患者の住所の電話番号')" v-model='value.患者の住所の電話番号' label='電話番号'></dat-value>
                       </dat-gui>
                     </div>
                   </div>

                  <div class='ui segment block'>
                    <div class='content fitted'>
                      <dat-gui>
                        <dat-value v-model='value.患者の保護者の氏名' label='氏名'></dat-value>
                     </dat-gui>
                   </div>
                 </div>
                  <div class='ui segment block'>
                    <div class='content fitted'>
                      <dat-gui>
                        <dat-value :option="zip('患者の保護者の住所の郵便番号')" v-model='value.患者の保護者の住所の郵便番号' label='郵便番号' id='患者の保護者の郵便番号' placeholder='半角数字'></dat-value>
                     </dat-gui>
                   </div>
                 </div>
                  <div class='ui segment block'>
                    <div class='content fitted'>
                      <dat-gui>
                        <dat-value label='住所一覧' v-model='dat.temp.address2' :values='住所候補を患者の保護者の住所の郵便番号から' @finishchange='test3' placeholder='半角数字'></dat-value>
                     </dat-gui>
                   </div>
                 </div>
                  <div class='ui segment block blue'>
                    <div class='ui label floating tip right pointing blue'>
                      保護
                   </div>
                    <div class='content fitted'>
                      <dat-gui>
                        <dat-value v-model='value.患者の保護者の読み仮名' label='氏名カナ' ></dat-value>
                        <dat-value v-model='value.患者の保護者の続柄' label='続柄' ></dat-value>
                        <dat-value v-model='value.患者の保護者の住所の都道府県' label='都道府県' :values="prefs" placeholder='半角数字'></dat-value>
                        <dat-value v-model='value.患者の保護者の住所の市区町村' label='市区町村' placeholder='全角'></dat-value>
                        <dat-value v-model='value.患者の保護者の住所の町域番地' label='町域番地' placeholder='全角'></dat-value>
                        <dat-value v-model='value.患者の保護者の住所の建物号室' label='建物号室' placeholder='全角'></dat-value>
                        <dat-value v-model='value.患者の保護者の住所カナ' label='住所カナ' ></dat-value>
                        <dat-value :option="phone('患者の保護者の電話番号')" v-model='value.患者の保護者の電話番号' label='連絡先'></dat-value>
                     </dat-gui>
                   </div>
                 </div>


                    <div class='ui segment block'>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value :option="zip('患者の居所の郵便番号')" v-model='value.患者の居所の郵便番号' label='郵便番号' id='患者の居所の郵便番号' placeholder='半角数字'></dat-value>
                       </dat-gui>
                     </div>
                   </div>
                    <div class='ui segment block' v-show='_.keys(住所候補を患者の居所の郵便番号から).length > 0'>
                      <div class="ui label floating tip right pointing blue">
                        選択
                     </div>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value label='住所一覧' v-model='dat.temp.address3' :values='住所候補を患者の居所の郵便番号から' @finishchange='test1' placeholder='半角数字'></dat-value>
                       </dat-gui>
                     </div>
                   </div>

                    <div class='ui segment block blue'>
                      <div class="ui label floating tip right pointing blue">
                        居所
                     </div>
                      <div class='content fitted'>
                        <dat-gui>
                          <dat-value v-model='value.患者の居所の都道府県' label='都道府県' :values="jpPrefecture.getAll('pref', 'name')" placeholder='半角数字'></dat-value>
                          <dat-value v-model='value.患者の居所の市区町村' label='市区町村' placeholder='全角'></dat-value>
                          <dat-value v-model='value.患者の居所の町域番地' label='町域番地' placeholder='全角'></dat-value>
                          <dat-value v-model='value.患者の居所の建物号室' label='建物号室' placeholder='全角'></dat-value>
                          <dat-value :option="phone('患者の居所の電話番号')" v-model='value.患者の居所の電話番号' label='電話番号'></dat-value>
                       </dat-gui>
                     </div>
                   </div>










  </div>
</template>
 <script>
   module.exports={
     watch:{
       '共通.患者の住所の郵便番号':{
         handler:function(code){
           this.補完.患者の住所一覧を郵便番号から = _(zip.lookup(code)).reduce((o,p)=>{
             o[p.pref+p.city+p.town]=JSON.stringify(p)
             return o
           },{})
         }
       },
       '共通.患者の居所の郵便番号':{
         handler:function(code){
           this.補完.患者の居所一覧を郵便番号から.values = _(zip.lookup(code)).reduce((o,p)=>{
             o[p.pref+p.city+p.town]=JSON.stringify(p)
             return o
           },{})
         }
       },
       '共通.患者の保護者の住所の郵便番号':{
         handler:function(code){
           this.補完.患者の保護者の住所一覧を郵便番号から.values = _(zip.lookup(code)).reduce((o,p)=>{
             o[p.pref+p.city+p.town]=JSON.stringify(p)
             return o
           },{})
         }
       }
     },
     mounted:function(){
       $.fn.autoKana2('#患者の氏名',null,{katakana:true,emptyInputCallback:()=>{this.value.患者の氏名カナ=''},addRubyCallback:(text)=>this.value.患者の氏名カナ+=text})
     },
     computed:{
       prefs:function(){
         return jpPrefecture.getAll('pref', 'name')
       },
       jpPrefecture:function(){
         return window['jpPrefecture']
       },

       住所候補を患者の住所の郵便番号から:function(){
         return _(zip.lookup(this.value.患者の住所の郵便番号)).reduce((o,p)=>{
           o[p.pref+p.city+p.town]=JSON.stringify(p)
           return o
         },{})
       },
       住所候補を患者の居所の郵便番号から:function(){
         return _(zip.lookup(this.value.患者の居所の郵便番号)).reduce((o,p)=>{
           o[p.pref+p.city+p.town]=JSON.stringify(p)
           return o
         },{})
       },
       住所候補を患者の保護者の住所の郵便番号から:function(){
         return _(zip.lookup(this.value.患者の保護者の住所の郵便番号)).reduce((o,p)=>{
           o[p.pref+p.city+p.town]=JSON.stringify(p)
           return o
         },{})
       },
     },
     methods:{
       zip:function(name){
         return{
           cleave:{
             blocks:[3,4],
             delimiter:'-',
             numericOnly:true
           }
         }
       },
       date:function(name){
         return{
           cleave:{
             date:true,
             delimiter:'/',
             datePattern: ['Y','m','d']
           }
         }
       },
       phone:function(name){
         var arr = phone.get(this.value[name])
         return{
           cleave:{
             numericOnly:true,
             delimiters:['(', ')', ' ','-'],
             blocks:arr.length > 1 ? [0,arr[0],0,arr[1],4] : [0,3,0,4,4]
           }
         }
       },


       test1:function(o){
         console.dir(o)
         var lookup = JSON.parse(o)
         this.value.患者の居所の都道府県 = lookup.pref
         this.value.患者の居所の市区町村 = lookup.city
         this.value.患者の居所の町域番地 = lookup.town
       },
       test2:function(o){
         var lookup = JSON.parse(o)
         this.value.患者の住所の都道府県 = lookup.pref
         this.value.患者の住所の市区町村 = lookup.city
         this.value.患者の住所の町域番地 = lookup.town
       },
       test3:function(o){
         var lookup = JSON.parse(o)
         this.value.患者の保護者の住所の都道府県 = lookup.pref
         this.value.患者の保護者の住所の市区町村 = lookup.city
         this.value.患者の保護者の住所の町域番地 = lookup.town
       },
     },
     data:function(){
       return{
         dat:{
           temp:{
             address1:'',
             address2:'',
             address3:''
           },
           values:{
             sex:['男','女'],
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