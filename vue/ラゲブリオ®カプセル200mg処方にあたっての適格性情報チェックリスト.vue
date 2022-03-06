 <template>
   <div v-enter-to-next-input>
     <div class='ui segments block basic'>
       <slot name='header'>
      </slot>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model="this['同意及び情報提供に関する特記事項']" label='特記事項' ref='first'></dat-value>
             <dat-value v-model="this['SARS-CoV-2による感染症']" label='SARS-CoV-2感染症ですか'></dat-value>
             <dat-value v-model="this['禁忌事項_本剤の成分に対し過敏症の既往歴のある患者ではない']" label='成分に過敏症有無'></dat-value>
             <dat-value v-model="this['禁忌事項_妊婦又は妊娠している可能性のある女性ではない']" label='妊娠していない'></dat-value>
             <dat-value v-model="this['SARS-CoV-2による感染症']" label='SARS-CoV-2による感染症'></dat-value>
             <dat-value v-model="this['SARS-CoV-2による感染症の重症化リスク因子_１つ以上を有する']" label='重症化リスク因子有無'></dat-value>
             <dat-value v-model="this['患者又は代諾者からの同意取得']" label='同意されていますか'></dat-value>
          </dat-gui>
        </div>
      </div>
       <slot name='footer'>
      </slot>
    </div>
  </div>
</template>
 <script>
   module.exports={
     watch:{
       '$data':{
         deep:true,
         immediate:true,
         handler:_.debounce(function(){
           this.draw()
         },1500)
       }
     },
     mounted:function(){
       this.$nextTick(()=>{
         $(this.$refs.first.$_controller.__input).focus()
       })
     },
     methods:{
       clear:function(){
         this.$toast_confirm('warning','全ての入力をクリアしますか？',()=>{
           _.merge(this.$data,{
            同意及び情報提供に関する特記事項:false,
            'SARS-CoV-2による感染症':false,
            禁忌事項_本剤の成分に対し過敏症の既往歴のある患者ではない:false,
            禁忌事項_妊婦又は妊娠している可能性のある女性ではない:false,
            'SARS-CoV-2による感染症の重症化リスク因子_１つ以上を有する':false,
            '患者又は代諾者からの同意取得':false
           })
         })
       },
       draw:async function(){
     var doc = await PDFLib.PDFDocument.load(await fetch(`${this.$options.name}.pdf`).then(r=>r.arrayBuffer()))
         doc.registerFontkit(fontkit)

            var page = doc.getPages()[1]
            page.setFontSize(11)
                var embedfont = await doc.embedFont(this.$root.font)
            page.setFont(embedfont)

         var style = {
           ellipse:{
             borderColor:PDFLib.rgb(0,0,0),
             backgroundColor:PDFLib.rgb(1,1,1)
           },
           circle:{
             size:5,
             opacity:0.5,
             thickness:9,
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.mark).toFloatRgb()))
           },
           line:{
             opacity:0.5,
             thickness:9,
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.mark).toFloatRgb()))
           }
         }

            
            page.setFontColor(PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.text).toFloatRgb())))

     
            page.drawText(this.$root.共通.医師の従事病院または診療所の名称,{x:185,y:620})
            page.drawText(this.$root.共通.医師の従事病院または診療所の所在地,{x:185,y:600})
            page.drawText(this.$root.共通.医師の氏名,{x:185,y:565})
        var phne = this.$root.共通.医師の従事病院または診療所の電話番号.split('-')
            page.drawTextZen(phne[0] || '',{x:210,y:537})
            page.drawTextZen(phne[1] || '',{x:285,y:537})
            page.drawTextZen(phne[2] || '',{x:365,y:537})

        var date = moment(this.処方箋交付年月日)
         if(date.isValid()){
            page.drawTextZen(date.format('NNNNyy'),{x:255,y:406})
            page.drawTextZen(date.format('MM'),{x:335,y:406})
            page.drawTextZen(date.format('DD'),{x:395,y:406})
         }

        var date = moment(this.$root.共通.患者の生年月日)
         if(date.isValid()){
            page.drawTextZen(`${this.$root.共通.患者の年齢}`,{x:275,y:377})
            page.drawTextZen(`${this.$root.共通.患者の年齢のヶ月目}ヶ月`,{x:325,y:377})
         }
            page.drawCheckBox(true,this['SARS-CoV-2による感染症'] ? {x:225,y:352} : {x:225,y:332})
            page.drawCheckBox(this['禁忌事項_本剤の成分に対し過敏症の既往歴のある患者ではない'],{x:225,y:309})
            page.drawCheckBox(this['禁忌事項_妊婦又は妊娠している可能性のある女性ではない'],{x:225,y:289})
            page.drawCheckBox(true,this['SARS-CoV-2による感染症の重症化リスク因子_１つ以上を有する'] ? {x:225,y:268} : {x:225,y:188})
            page.drawCheckBox(this['患者又は代諾者からの同意取得'],{x:225,y:142})
              this.$emit('update',doc)
       }
     },
     data:function(){
       return{
         同意及び情報提供に関する特記事項:true,
         'SARS-CoV-2による感染症':true,
         禁忌事項_本剤の成分に対し過敏症の既往歴のある患者ではない:true,
         禁忌事項_妊婦又は妊娠している可能性のある女性ではない:true,
         'SARS-CoV-2による感染症の重症化リスク因子_１つ以上を有する':false,
         '患者又は代諾者からの同意取得':true
       }
     }
   }
</script>
 <style>
</style>