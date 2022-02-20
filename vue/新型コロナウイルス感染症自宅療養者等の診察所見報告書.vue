 <template>
   <div>
     <div class='controller'>
       <div v-enter-to-next-input:first>
         <div class='ui divider horizontal'>
           状態
        </div>
         <div class='ui segments block'>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.診察日' label='診察日は？' title='' type='yyyymmdd'></dat-value>
                 <dat-value v-model='param.宛先' label='宛先は？' ref='first'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               連絡
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.紹介目的' label='紹介目的'></dat-value>
                 <dat-value v-model='param.高次医療機関での診察_入院調整を依頼します' label='診察・入院調整の依頼'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               内容
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.傷病名' label='傷病名'></dat-value>
                 <dat-value v-model='param.受診種別' label='受診種別は？' :values="['電話WEB診療','外来受診','往診']"></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted' v-if="param.受診種別 == '往診'">
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.同日同一建物内の別患者の診療の有無' label='別患者の診療の有無'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.陽性確定後の診察Ｎ回目' label='陽性確定後の診察Ｎ回目' :min='0' :max='100' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.既往歴及び家族歴' label='既往歴及び家族歴'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.聴診所見異常あり' label='聴診所見異常あり'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted' v-if="param.聴診所見異常あり">
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-value v-model='param.聴診所見' label='聴診所見'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-text  v-model='param.症状経過及び検査結果_治療経過_現在の処方_備考' label='経過詳細' placeholder='症状経過&#10;検査結果&#10;治療経過&#10;現在処方&#10;備考など' ref='multiline'></dat-text>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.解熱剤の使用８時間以内' label='８時間以内の解熱剤使用'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               ＢＴ
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.体温' label='体温' :min='0' :max='50' :step='.1' :empty='0'></dat-value>
                 <dat-value v-model='param.酸素飽和度' label='酸素飽和度' :min='0' :max='100' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.酸素投与Ｌ' label='酸素投与Ｌ' :min='0' :max='100' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.呼吸数' label='呼吸数' :min='0' :max='60' :step='1' :empty='0'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               胸部
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.胸部レントゲン撮影種別' label='撮影'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted' v-if="param.胸部レントゲン撮影種別.length > 0">
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-value v-model='param.胸部レントゲン撮影所見' label='胸部レントゲン撮影の所見'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               血液
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.採血検査種別' label='種別'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted' v-if="param.採血検査種別.length > 0">
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-value v-model='param.採血検査所見' label='採血'></dat-value>
                 <dat-value v-model='param.採血ＷＢＣ' label='ＷＢＣ' :min='0' :max='99999' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.採血リンパ球数' label='ＬＹＭ' :min='0' :max='99999' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.採血ＬＤＨ' label='ＬＤＨ' :min='0' :max='99999' :step='1' :empty='0'></dat-value>
                 <dat-value v-model='param.採血ＣＲＰ' label='ＣＲＰ' :min='0' :max='999' :step='.1' :empty='0'></dat-value>
                 <dat-value v-model='param.採血Ｄダイマ' label='Ｄダイマ' :min='0' :max='99999' :step='.1' :empty='0'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic green'>
             <div class="ui label floating point right pointing green">
               備考
            </div>
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-value v-model='param.その他所見' label='その他所見'></dat-value>
              </dat-gui>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class='document'>
    </div>
     <div class='portal'>
       <portal to='pdf'>
         <iframe class='pdf' ref='iframe'>
        </iframe>
      </portal>
    </div>
  </div>
</template>
 <script>
   module.exports={
     props:{
       common:{
         type:Object,
         default:function(){
           return {}
         }
       },
       hospital:{
         type:Object,
         default:function(){
           return{}
         }
       },
       patient:{
         type:Object,
         default:function(){
           return{}
         }
       }
     },
     data:function(){
       return{
         doc:null,
         pdf:null,
         param:{
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
          酸素投与Ｌ:0,
          呼吸数:30,
          胸部レントゲン撮影種別:'',
          胸部レントゲン撮影所見:`両側肺の胸膜下、気管支周囲優位に斑状から結節状の浸潤影`,
          採血検査種別:'',
          採血ＷＢＣ:9800,
          採血リンパ球数:600,
          採血ＬＤＨ:521,
          採血ＣＲＰ:0.9,
          採血Ｄダイマ:5.2,
          採血検査所見:``,
          その他所見:``,
         }
       }
     },
     methods:{
       clear:function(){
           _.merge(this.param,{
           宛先:'',
           診察日:moment().format('YYYY/MM/DD'),
           受診種別:'外来受診',
           同日同一建物内の別患者の診療の有無:false,
           陽性確定後の診察Ｎ回目:1,
           傷病名:'',
           紹介目的:'',
           高次医療機関での診察_入院調整を依頼します:false,
           既往歴及び家族歴:'',
           症状経過及び検査結果_治療経過_現在の処方_備考:``,
          体温:0,
          解熱剤の使用８時間以内:false,
          聴診所見異常あり:false,
          聴診所見:'',
          酸素飽和度:0,
          酸素投与Ｌ:0,
          呼吸数:0,
          胸部レントゲン撮影種別:'',
          胸部レントゲン撮影所見:``,
          採血検査種別:'',
          採血ＷＢＣ:0,
          採血リンパ球数:0,
          採血ＬＤＨ:0,
          採血ＣＲＰ:0,
          採血Ｄダイマ:0,
          採血検査所見:``,
          その他所見:``,
           })
       },
       getDocument:function(){
         return this.doc
       },
       load:async function(){
         this.doc = await PDFLib.PDFDocument.load(this.pdf)
         this.doc.registerFontkit(fontkit)
         
         var fontGothicJP = await this.doc.embedFont(this.common.font)
         var form = this.doc.getForm()

         /*
          * https://github.com/Hopding/pdf-lib/issues/1152
          */
         var rawUpdateFieldAppearances = form.updateFieldAppearances.bind(form)
         form.updateFieldAppearances = function () {
           return rawUpdateFieldAppearances(fontGothicJP);
         }

         _.each(form.getFields(),(o)=>{
           form.removeField(o)
         })
         
         var page = this.doc.getPages()[0]
             page.setFont(fontGothicJP)
             page.setFontColor(PDFLib.rgb(0,0,0))
         var checkPen = {
           width:7,
           height:7,
           backgroundColor:PDFLib.rgb(1,1,1),
           borderColor:PDFLib.rgb(1,1,1)
         }
         var ellipsePen = {
           backgroundColor:PDFLib.rgb(1,1,1),
           borderColor:PDFLib.rgb(0,0,0)
         }
         var drawCheckBox = function(check,options){
           var checkBox = form.createCheckBox(`some.checkbox.${(Math.random()*1e32).toString(36)}`)
           checkBox.addToPage(page,_.merge(options,checkPen))
           checkBox.enableReadOnly()
           if(check){
             checkBox.check()
           }
         }

         page.drawText(this.param.宛先,{x:40,y:757,size:11})
         page.drawText(this.param.診察日,{x:395,y:744,size:11})

         page.drawText(this.hospital.医師の従事病院または診療所の名称,{x:325,y:717,size:9})
         page.drawText(this.hospital.医師の従事病院または診療所の所在地,{x:325,y:702,size:9})
         page.drawText(this.hospital.医師の従事病院または診療所の電話番号,{x:325,y:687,size:9})
         page.drawText(this.hospital.医師の氏名,{x:325,y:670,size:9})

          try {
  const jpgImageBytes = await fetch(this.hospital.医師の印鑑).then((res) => res.arrayBuffer())
const jpgImage = await this.doc.embedJpg(jpgImageBytes)
const jpgDims = jpgImage.scale(0.5)




page.drawImage(jpgImage, {
  x: 520,
  y: 660,
  width: 24,
  height: 24,
})


          } catch (error) {
            console.error(error);
          }






         page.drawText('診療時間外',{x:390,y:687,size:9})
         page.drawText(this.hospital.医師の従事病院または診療所の時間外の電話番号,{x:442,y:687,size:9})

         page.drawText([this.patient.当該者の氏名,'（',this.patient.当該者の読み仮名,'）'].join(''),{x:84,y:639,size:10})
         page.drawText(this.patient.当該者の性別,{x:362,y:639,size:10})
         page.drawText(this.patient.当該者の住所の電話番号,{x:362,y:619,size:10})

         page.drawText(this.patient.当該者の住所の県市区町村,{x:84,y:624,size:10})
         page.drawText(this.patient.当該者の住所,{x:84,y:610,size:10})

         var d = moment(this.patient.当該者の生年月日)
         if( d.isValid()){
           var  age = moment().age(new Date(this.patient.当該者の生年月日))
           page.drawTextZen(`${d.format('NNNN')}${d.format('yy')}年${d.format('MM')}月${d.format('DD')}日（${_.toString(age.years)}歳${_.toString(age.months)}ヶ月）`,{x:84,y:598,size:10})
         }
         page.drawText(this.patient.当該者の職業,{x:362,y:598,size:10})

         drawCheckBox(true,{
           '電話WEB診療':{x:40,y:575},
           '外来受診':{x:124,y:575},
           '往診': {x:40,y:555}
         }[this.param.受診種別])

         if(this.param.受診種別 == '往診'){
           drawCheckBox(true,this.param.同日同一建物内の別患者の診療の有無 ? {x:277,y:555} : {x:318,y:555})
         }
         
         page.drawText(jaconv.toZen(`${this.param.陽性確定後の診察Ｎ回目}`),{x:480,y:566,size:10})
         page.drawText(this.param.傷病名,{x:84,y:516,size:11})
         page.drawText(this.param.紹介目的,{x:84,y:470,size:12})
         
         drawCheckBox(this.param.高次医療機関での診察_入院調整を依頼します,{x:162,y:450})
         page.drawText(this.param.既往歴及び家族歴,{x:127,y:430,size:10})

         var textField = form.createTextField('custom.text.a')
         textField.setText(this.param.症状経過及び検査結果_治療経過_現在の処方_備考)
         textField.setAlignment(PDFLib.TextAlignment.Left)
         textField.addToPage(page, {
           x:40,
           y:238,
           width:517,
           height:165,
           font:fontGothicJP,
           backgroundColor:PDFLib.rgb(1,1,1),
           borderColor:PDFLib.rgb(1,1,1)
         })
         textField.setFontSize(12)
         textField.enableReadOnly()
         textField.enableMultiline()

         page.drawText(jaconv.toZen(`${this.param.体温}`),{x:158,y:220,size:10})
         page.drawEllipse(_.merge(this.param.解熱剤の使用８時間以内 ? {x:372,y:224,xScale:15,yScale:10} : {x:424,y:224,xScale:15,yScale:10},ellipsePen))
         page.drawEllipse(_.merge(this.param.聴診所見異常あり ? {x:244,y:203,xScale:24,yScale:10} : {x:172,y:203,xScale:24,yScale:10},ellipsePen))
         page.drawText(jaconv.toZen(`${this.param.聴診所見}`),{x:278,y:199,size:10})
         page.drawText(jaconv.toZen(`${this.param.酸素飽和度}`),{x:158,y:178,size:10})
         if(this.param.酸素投与Ｌ > 0){
           page.drawText(jaconv.toZen(`${this.param.酸素投与Ｌ}`),{x:255,y:178,size:10})
         }else{
           page.drawEllipse(_.merge({x:327,y:182,xScale:15,yScale:10},ellipsePen))
         }
         page.drawText(jaconv.toZen(`${this.param.呼吸数}`),{x:482,y:178,size:10})

         if(this.param.胸部レントゲン撮影種別.length > 0){
           page.drawText(jaconv.toZen(`${this.param.胸部レントゲン撮影種別}`),{x:52,y:148,size:10})
           page.drawText(jaconv.toZen(`${this.param.胸部レントゲン撮影所見}`),{x:152,y:154,size:10})
         }else{
           page.drawEllipse(_.merge({x:520,y:158,xScale:20,yScale:10},ellipsePen))
         }

         if(this.param.採血検査種別.length > 0){
           page.drawText(jaconv.toZen(`${this.param.採血検査種別}`),{x:52,y:110,size:10})
           page.drawText(jaconv.toZen(`${this.param.採血ＷＢＣ}`),{x:167,y:121,size:10})
           page.drawText(jaconv.toZen(`${this.param.採血リンパ球数}`),{x:244,y:121,size:10})
           page.drawText(jaconv.toZen(`${this.param.採血ＬＤＨ}`),{x:330,y:121,size:10})
           page.drawText(jaconv.toZen(`${this.param.採血ＣＲＰ}`),{x:404,y:121,size:10})
           page.drawText(jaconv.toZen(`${this.param.採血Ｄダイマ}`),{x:494,y:121,size:10})
           page.drawText(this.param.採血検査所見,{x:194,y:103,size:10})
         }else{
           page.drawEllipse(_.merge({x:530,y:107,xScale:20,yScale:10},ellipsePen))
         }
         page.drawText(this.param.その他所見,{x:152,y:79,size:10})

         this.$refs.iframe.src = URL.createObjectURL(new Blob([await this.doc.save()],{type:'application/pdf'}))
       }
     },
     created:async function(){

       localforage.getItem(this.$router.name).then((o)=>{
         if(o){
           _.merge(this.param,o)
         }
       }).catch(()=>{
         toast.info('error','前回入力された情報の復元に失敗しました')
       })
       this.pdf = await fetch(this.$route.meta.path).then((responce)=>{
         return responce.arrayBuffer()
       })
     },
     mounted:function(){
       this.$watchAll([
         {name:'hospital',options:{deep:true,immediate:true}},
         {name:'patient',options:{deep:true,immediate:true}},
         {name:'param',options:{deep:true,immediate:true}},
       ],_.debounce(async(k,o)=>{
         this.load()
         localforage.setItem(this.$router.name,o)
       },this.common.wait))
       this.$nextTick(()=>{
         $(this.$refs.first.$_controller.__input).focus()
         tabIndent.render(this.$refs.multiline.$_controller.__input)
       })
     }
   }
</script>
 <style>
</style>