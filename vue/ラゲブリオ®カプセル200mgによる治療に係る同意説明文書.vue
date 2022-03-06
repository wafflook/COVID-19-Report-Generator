 <template>
   <div v-enter-to-next-input>
  
       <slot name='header'>
      </slot>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='処方箋交付年月日' label='処方箋交付日' type='yyyymmdd' ref='first'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted blue'>
         <div class="ui label floating point right pointing blue">
           処方
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='本剤について' label='本剤について'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted blue' v-if="$root.共通.患者の性別 == '女'">
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='女性の場合は以下についてチェックしてください' label='女性の場合'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted blue' >
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='同意及び情報提供に関する特記事項' label='特記事項'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted blue'>
         <div class='content fitted'>
           <canvas ref='canvas' width='281' height='82' style='height:100px;width:360px;display:block;'></canvas>
        </div>
         <a class='ui label corner' @click='clear'>
           <i class='icon earser'></i>
        </a>
      </div>
       <slot name='footer'>
      </slot>

  </div>
</template>
 <script>
   module.exports={
     mixins:[pdf],
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
       this.pad = new SignaturePad(this.$refs.canvas,{
              minWidth:0.1,
              maxWidth:1,
              throttle:0,
              dotSize:1,
              minDistance:0
            })
       this.pad.addEventListener("endStroke", _.debounce(() => {
              this.署名 = this.pad.toDataURL('image/png')
            },1500))
       this.$nextTick(()=>{
         $(this.$refs.first.$_controller.__input).focus()
       })
     },
     methods:{
       clear:function(){
         this.$toast_confirm('warning','全ての入力をクリアしますか？',()=>{
           _.merge(this.$data,{
              署名:null,
              記入日:'',
              処方箋交付年月日:'',
              本剤について:false,
              女性の場合は以下についてチェックしてください:false,
              同意及び情報提供に関する特記事項:false
           })
         })
       },
       draw:async function(){

     var doc = await PDFLib.PDFDocument.load(await fetch(`${this.$options.name}.pdf`).then(r=>r.arrayBuffer()))
         doc.registerFontkit(fontkit)
     
         var style = {
           ellipse:{
             borderColor:PDFLib.rgb(0,0,0),
             backgroundColor:PDFLib.rgb(1,1,1)
           },
           circle:{
             size:5,
             opacity:0.5,
             thickness:9,
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.pdfLib.settings.color.mark).toFloatRgb()))
           },
           line:{
             opacity:0.5,
             thickness:9,
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.pdfLib.settings.color.mark).toFloatRgb()))
           }
         }

         var form = doc.getForm()
         var embedfont = await doc.embedFont(this.$root.pdfLib.font)

        var page = doc.getPages()[2]
            page.setFontSize(11)
            page.setFont(embedfont)
            page.setFontColor(PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.pdfLib.settings.color.text).toFloatRgb())))
         if(this.本剤について){
            page.drawCheckBox(true,{x:59,y:709})
         }
         if(this.女性の場合は以下についてチェックしてください){
            page.drawCheckBox(true,{x:59,y:574})
         }
         if(this.同意及び情報提供に関する特記事項){
            page.drawCheckBox(true,{x:59,y:484})
         }

            if(this.署名){
              const jpgImage = await doc.embedPng(this.署名)
              const jpgDims = jpgImage.scale(0.5,0.5)

              page.drawImage(jpgImage, {
                x: 174,
                y: 325,
                width:jpgDims.width,
                height:jpgDims.height
              })
            }

            page.drawText(this.$root.共通.患者の住所,{x:135,y:310})
        var date = moment(this.記入日)
         if(date.isValid()){
            page.drawTextZen(date.format('yy'),{x:426,y:327})
            page.drawTextZen(date.format('MM'),{x:464,y:327})
            page.drawTextZen(date.format('DD'),{x:498,y:327})
         }

            page.drawText(this.$root.共通.医師の氏名,{x:135,y:122})
            page.drawText(this.$root.共通.医師の従事病院または診療所の名称,{x:135,y:98})
            page.drawText(this.$root.共通.医師の従事病院または診療所の電話番号,{x:415,y:98})
        var date = moment(this.記入日)
         if(date.isValid()){
            page.drawTextZen(date.format('yy'),{x:415,y:122})
            page.drawTextZen(date.format('MM'),{x:452,y:122})
            page.drawTextZen(date.format('DD'),{x:486,y:122})
         }

        var page = doc.getPages()[3]
            page.setFontSize(11)
            page.setFont(embedfont)
            page.setFontColor(PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.pdfLib.settings.color.text).toFloatRgb())))


         if(this.本剤について){
            page.drawCheckBox(true,{x:59,y:705})
         }
         if(this.女性の場合は以下についてチェックしてください){
            page.drawCheckBox(true,{x:59,y:569})
         }
         if(this.同意及び情報提供に関する特記事項){
            page.drawCheckBox(true,{x:59,y:479})
         }


            if(this.署名){
              const jpgImage = await doc.embedPng(this.署名)
              const jpgDims = jpgImage.scale(0.5,0.5)

              page.drawImage(jpgImage, {
                x: 174,
                y: 325,
                width:jpgDims.width,
                height:jpgDims.height
              })
            }
            page.drawText(this.$root.共通.患者の住所,{x:135,y:310})
        var date = moment(this.記入日)
         if(date.isValid()){
            page.drawTextZen(date.format('yy'),{x:426,y:327})
            page.drawTextZen(date.format('MM'),{x:464,y:327})
            page.drawTextZen(date.format('DD'),{x:498,y:327})
         }

            page.drawText(this.$root.共通.医師の氏名,{x:135,y:122})
            page.drawText(this.$root.共通.医師の従事病院または診療所の名称,{x:135,y:98})
            page.drawText(this.$root.共通.医師の従事病院または診療所の電話番号,{x:415,y:98})
        var date = moment(this.記入日)
         if(date.isValid()){
            page.drawTextZen(date.format('yy'),{x:415,y:122})
            page.drawTextZen(date.format('MM'),{x:452,y:122})
            page.drawTextZen(date.format('DD'),{x:486,y:122})
         }


         this.$emit('update',doc)

       }
     },
     data:function(){
       return{
         tab:{
           info:{
             title:'ラゲブリオ®カプセル200mgによる治療に係る同意説明文書',
             author:'Nishiyama, Michiyo',
             version:'2022/01/27 11:33',
             description:'',
             link:'https://www.msdconnect.jp/products/lagevrio/'
           }
         },

         署名:null,
         記入日:'1991/11/07',
         処方箋交付年月日:'1991/11/07',
         本剤について:true,
         女性の場合は以下についてチェックしてください:true,
         同意及び情報提供に関する特記事項:true
       }
     }
   }
</script>
 <style>
</style>