 <template>
   <div v-enter-to-next-input>
     <div class='ui segments block basic'>
       <slot name='header'>
      </slot>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='診察日' label='診察日は？' type='yyyymmdd' ref='first'></dat-value>
             <dat-value v-model='宛先' label='宛先は？'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted teal'>
         <div class="ui label floating point right pointing teal">
           連絡
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='紹介目的' label='紹介目的'></dat-value>
             <dat-value v-model='高次医療機関での診察_入院調整を依頼します' label='診察・入院調整の依頼'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='傷病名' label='傷病名'></dat-value>
             <dat-value v-model='受診種別' label='受診種別は？' :values="['電話WEB診療','外来受診','往診']"></dat-value>
             <dat-value v-model='陽性確定後の診察Ｎ回目' label='陽性確定後の診察Ｎ回目' :min='0' :max='100' :step='1' :empty='0'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted teal'>
         <div class="ui label floating point right pointing teal">
           患者
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='同日同一建物内の別患者の診療の有無' label='別患者の往診の有無'></dat-value>
             <dat-value v-model='既往歴及び家族歴' label='既往歴及び家族歴'></dat-value>
             <dat-text  v-model='症状経過及び検査結果_治療経過_現在の処方_備考' label='経過詳細' placeholder='症状経過&#10;検査結果&#10;治療経過&#10;現在処方&#10;備考など' ref='multiline'></dat-text>
             <dat-value v-model='解熱剤の使用８時間以内' label='８時間以内の解熱剤使用'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='体温' label='体温' :min='0' :max='50' :step='.1' :empty='0'></dat-value>
             <dat-value v-model='呼吸数' label='呼吸数' :min='0' :max='60' :step='1' :empty='0'></dat-value>
             <dat-value v-model='酸素飽和度' label='酸素飽和度' :min='0' :max='100' :step='1' :empty='0'></dat-value>
             <dat-value v-model='酸素投与量' label='酸素投与量' :min='0' :max='100' :step='1' :empty='0'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='聴診所見異常あり' label='聴診所見異常あり'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted teal' v-if="聴診所見異常あり">
         <div class="ui label floating point right pointing teal">
           胸部
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='聴診所見' label='聴診所見'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='胸部レントゲン撮影年月日' label='胸部レントゲン撮影年月日' type='yyyymmdd'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted teal'>
         <div class="ui label floating point right pointing teal">
           胸部
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='胸部レントゲン撮影所見' label='レントゲン撮影の所見'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='採血検査年月日' label='採血検査年月日' type='yyyymmdd'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted teal'>
         <div class="ui label floating point right pointing teal">
           血液
        </div>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='採血ＷＢＣ' label='ＷＢＣ' :min='0' :max='99.9' :step='.1' :empty='0'></dat-value>
             <dat-value v-model='採血リンパ球数' label='ＬＹＭ' :min='0' :max='999.9' :step='.1' :empty='0'></dat-value>
             <dat-value v-model='採血ＬＤＨ' label='ＬＤＨ' :min='0' :max='9999' :step='1' :empty='0'></dat-value>
             <dat-value v-model='採血ＣＲＰ' label='ＣＲＰ' :min='0' :max='99.9' :step='.1' :empty='0'></dat-value>
             <dat-value v-model='採血Ｄダイマ' label='Ｄダイマ' :min='0' :max='99.9' :step='.1' :empty='0'></dat-value>
             <dat-value v-model='採血検査所見' label='その他'></dat-value>
          </dat-gui>
        </div>
      </div>
       <div class='ui segment block fitted'>
         <div class='content fitted'>
           <dat-gui>
             <dat-value v-model='その他所見' label='その他所見'></dat-value>
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
     mounted:function(){
       tabIndent.render(this.$refs.multiline.$_controller.__input)
       $('input.birthday').each(function(i,input){
         new Cleave(input,{delimiter:'-',blocks:[4,2,2]})
       })
       $('input.phone').each(function(i,input){
         new Cleave(input,{delimiter:'-',blocks:[3,4,4]})
       })
       $('input.mmdd').each(function(i,input){
         new Cleave(input,{date:true,datePattern:['m','d']})
       })
       $('input.yymmdd').each(function(i,input){
         new Cleave(input,{date:true,datePattern:['y','m','d']})
       })
       $('input.yyyymmdd').each(function(i,input){
         new Cleave(input,{date:true,datePattern:['Y','m','d']})
       })
       this.$nextTick(()=>{
         $(this.$refs.first.$_controller.__input).focus()
       })
     },
     watch:{
       '$data':{
         deep:true,
         immediate:true,
         handler:_.debounce(function(){
           this.draw()
         },1500)
       }
     },
     methods:{
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
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.mark).toFloatRgb()))
           },
           line:{
             opacity:0.5,
             thickness:9,
             color:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.mark).toFloatRgb()))
           }
         }

         var form = doc.getForm()
         var embedfont = await doc.embedFont(this.$root.font)

         /*
          * https://github.com/Hopding/pdf-lib/issues/1152
          */
         var rawUpdateFieldAppearances = form.updateFieldAppearances.bind(form)
         form.updateFieldAppearances = function () {
           return rawUpdateFieldAppearances(embedfont)
         }

         var page = doc.getPages()[0]
             page.setFontSize(9)
             page.setFont(embedfont)  
             page.drawText('診療時間外',{x:390,y:687,size:9})
             page.setFontColor(PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.text).toFloatRgb())))
             page.drawText(this.宛先,{x:40,y:757,size:11})
         var date = moment(this.$root.共通.患者の生年月日)
          if(date.isValid()){
             page.drawTextZen(moment(this.診察日).format('NNNNyy年MM月DD日'),{x:395,y:744,size:11})
          }
             page.drawText(this.$root.共通.医師の従事病院または診療所の名称,{x:325,y:717,size:9})
             page.drawText(this.$root.共通.医師の従事病院または診療所の所在地,{x:325,y:702,size:9})
             page.drawText(this.$root.共通.医師の従事病院または診療所の電話番号,{x:325,y:687,size:9})
             page.drawText(this.$root.共通.医師の氏名,{x:325,y:670,size:9})
             page.drawText(this.$root.共通.医師の従事病院または診療所の時間外の電話番号,{x:442,y:687,size:9})
             page.drawText(`${this.$root.共通.患者の氏名} ${this.$root.共通.患者の読み仮名}`,{x:84,y:639,size:10})
             page.drawText(this.$root.共通.患者の性別,{x:362,y:639,size:10})
             page.drawText(this.$root.共通.患者の住所の電話番号,{x:362,y:619,size:10})
             page.drawText(this.$root.共通.患者の住所の県市区町村,{x:84,y:624,size:10})
             page.drawText(this.$root.共通.患者の住所,{x:84,y:610,size:10})
         var date = moment(this.$root.共通.患者の生年月日)
          if(date.isValid()){
         var 年齢 = moment().age(new Date(this.$root.共通.患者の生年月日))
             page.drawTextZen(`${date.format('NNNN')}${date.format('yy')}年${date.format('MM')}月${date.format('DD')}日（${_.toString(年齢.years)}歳${_.toString(年齢.months)}ヶ月）`,{x:84,y:598,size:10})
          }
             page.drawText(this.$root.共通.患者の職業,{x:362,y:598,size:10})
             page.drawCheckBox(true,{
               '':{x:0,y:0},
               '電話WEB診療':{x:40,y:575},
               '外来受診':{x:124,y:575},
               '往診': {x:40,y:555}
           }[this.受診種別])
          if(this.受診種別 == '往診'){
            page.drawCheckBox(true,this.同日同一建物内の別患者の診療の有無 ? {x:277,y:555} : {x:318,y:555})
          }
            page.drawTextZen(this.陽性確定後の診察Ｎ回目,{x:480,y:566,size:10})
            page.drawText(this.傷病名,{x:84,y:516,size:11})
            page.drawText(this.紹介目的,{x:84,y:470,size:12})
            page.drawCheckBox(this.高次医療機関での診察_入院調整を依頼します,{x:162,y:450})
            page.drawText(this.既往歴及び家族歴,{x:127,y:430,size:10})
            page.drawTextBox(this.症状経過及び検査結果_治療経過_現在の処方_備考,{
              x:40,
              y:238,
              width:517,
              height:165,
              font:embedfont,
              textColor:PDFLib.rgb.apply(null,_.values(tinycolor(this.$root.設定.listColor.text).toFloatRgb()))
            })
            page.drawTextZen(this.体温,{x:158,y:220,size:10})
            page.drawEllipse(_.merge(this.解熱剤の使用８時間以内 ? {x:372,y:224,xScale:15,yScale:10} : {x:424,y:224,xScale:15,yScale:10},style.ellipse))
            page.drawEllipse(_.merge(this.聴診所見異常あり ? {x:244,y:203,xScale:24,yScale:10} : {x:172,y:203,xScale:24,yScale:10},style.ellipse))
            page.drawTextZen(this.聴診所見,{x:278,y:199,size:10})
            page.drawTextZen(`${this.酸素飽和度}`,{x:158,y:178,size:10})
         if(this.酸素投与量 > 0){
            page.drawTextZen(`${this.酸素投与量}`,{x:255,y:178,size:10})
         }else{
            page.drawEllipse(_.merge({x:327,y:182,xScale:15,yScale:10},style.ellipse))
         }
            page.drawTextZen(this.呼吸数,{x:482,y:178,size:10})
        var date = moment(this.胸部レントゲン撮影年月日)
         if(date.isValid()){
            page.drawText(moment(this.胸部レントゲン撮影年月日).format('NNyy/MM/DD'),{x:57,y:148,size:10})
            page.drawTextZen(this.胸部レントゲン撮影所見,{x:152,y:154,size:10})
         }else if(this.胸部レントゲン撮影年月日.length  == 0){
            page.drawEllipse(_.merge({x:520,y:158,xScale:20,yScale:10},style.ellipse))
         }
        var date = moment(this.採血検査年月日)
         if(date.isValid()){
            page.drawText(moment(this.採血検査年月日).format('NNyy/MM/DD'),{x:57,y:110,size:10})
            page.drawTextZen(`${this.採血ＷＢＣ}`,{x:167,y:121,size:10})
            page.drawTextZen(`${this.採血リンパ球数}`,{x:244,y:121,size:10})
            page.drawTextZen(`${this.採血ＬＤＨ}`,{x:330,y:121,size:10})
            page.drawTextZen(`${this.採血ＣＲＰ}`,{x:404,y:121,size:10})
            page.drawTextZen(`${this.採血Ｄダイマ}`,{x:494,y:121,size:10})
            page.drawText(this.採血検査所見,{x:194,y:103,size:10})
        }else if(this.採血検査年月日.length  == 0){
            page.drawEllipse(_.merge({x:530,y:107,xScale:20,yScale:10},style.ellipse))
        }
            page.drawText(this.その他所見,{x:152,y:79,size:10})
          this.$emit('update',doc) 
       }
     },
     data:function(){
       return{
         宛先:'名古屋市保健所 保健センター所長',
         診察日:'2021/08/27',
         受診種別:'電話WEB診療',
         同日同一建物内の別患者の診療の有無:true,
         陽性確定後の診察Ｎ回目:99,
         傷病名:'COVID-19 感染症',
         紹介目的:'精査・加療・入院',
         高次医療機関での診察_入院調整を依頼します:false,
         既往歴及び家族歴:'高血圧、高尿酸血症、脂質異常症、前立腺肥大症、叔父が心臓病',
         症状経過及び検査結果_治療経過_現在の処方_備考:`　　　発端：入居施設に陽性複数
　陽性確認：２月６日の抗原検査
　　無症状：ＢＴ安定食事も可能
　　　処方：発熱時 x10回分
　　　　　　ムコスタ錠 100mg1錠般
　　　　　　ロキソニン錠 60mg1錠般
　　　解除：何もなければ２月１５日予定
重症化因子：潰瘍性大腸炎
　　行動歴：陽性者の介護
　　接触歴：陽性者（母）の介護
　　移動歴：なし`,
         体温:36.9,
         解熱剤の使用８時間以内:false,
         聴診所見異常あり:true,
         聴診所見:'',
         酸素飽和度:100,
         酸素投与量:0,
         呼吸数:30,
         胸部レントゲン撮影年月日:'2022/01/01',
         胸部レントゲン撮影所見:`両側肺の胸膜下、気管支周囲優位に斑状から結節状の浸潤影`,
         採血検査年月日:'2022/01/01',
         採血ＷＢＣ:4.5,
         採血リンパ球数:30.5,
         採血ＬＤＨ:230,
         採血ＣＲＰ:5.0,
         採血Ｄダイマ:1.3,
         採血検査所見:``,
         その他所見:``
       }
     }
   }
</script>
 <style>
</style>