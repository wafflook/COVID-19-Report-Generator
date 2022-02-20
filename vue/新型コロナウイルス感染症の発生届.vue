 <template>
   <div>
     <div class='controller' ref='controller'>
       <div v-enter-to-next-input:report>
         <div class='ui divider horizontal'>
           状態
        </div>
         <div class='ui segments block'>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.報告年月日' comment='報告年月日' label='報告日は？' ref='first'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green'>
             <div class="ui label floating point right pointing green">
               患者
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-folder :name='患者個人 | toZen'>
                   <dat-value v-model='param.当該者の類型' comment='新型コロナウイルスの類型'  label='類型は？' :values="['患者（確定例）','無患者の症状病原体保有者','疑似症患者（*）','感染症死亡者の死体','感染症死亡疑い者の死体']"></dat-value>
                </dat-folder>
                 <dat-folder :name='症状一覧 | toZen'>
                   <dat-value v-model='param.患者の症状.発熱' comment='新型コロナウイルスの症状' label='発熱'></dat-value>
                   <dat-value v-model='param.患者の症状.咳' label='咳'></dat-value>
                   <dat-value v-model='param.患者の症状.咳以外の急性呼吸器の症状' label='咳以外の急性呼吸器の症状'></dat-value>
                   <dat-value v-model='param.患者の症状.肺炎像' label='肺炎像'></dat-value>
                   <dat-value v-model='param.患者の症状.重篤な肺炎' label='重篤な肺炎'></dat-value>
                   <dat-value v-model='param.患者の症状.急性呼吸窮迫症候群' label='急性呼吸窮迫症候群'></dat-value>
                   <dat-value v-model='param.患者の症状.多臓器不全' label='多臓器不全'></dat-value>
                   <dat-value v-model='param.患者の症状.全身倦怠感' label='全身倦怠感'></dat-value>
                   <dat-value v-model='param.患者の症状.頭痛' label='頭痛'></dat-value>
                   <dat-value v-model="param.患者の症状['嘔気/嘔吐']" label='嘔気/嘔吐'></dat-value>
                   <dat-value v-model='param.患者の症状.下痢' label='下痢'></dat-value>
                   <dat-value v-model='param.患者の症状.結膜炎' label='結膜炎'></dat-value>
                   <dat-value v-model="param.患者の症状['嗅覚・味覚障害']" label='嗅覚・味覚障害'></dat-value>
                </dat-folder>
                 <dat-folder :name='疾患一覧 | toZen'>
                   <dat-value v-model='param.重症化のリスク因子.悪性腫瘍' comment='新型コロナウイルスの重症化の因子となる疾患' label='悪性腫瘍'></dat-value>
                   <dat-value v-model="param.重症化のリスク因子['慢性閉塞性肺疾患（COPD）']" label='慢性閉塞性肺疾患'></dat-value>
                   <dat-value v-model='param.重症化のリスク因子.慢性腎臓病' label='慢性腎臓病'></dat-value>
                   <dat-value v-model='param.重症化のリスク因子.高血圧' label='高血圧'></dat-value>
                   <dat-value v-model='param.重症化のリスク因子.糖尿病' label='糖尿病'></dat-value>
                   <dat-value v-model='param.重症化のリスク因子.脂質異常症' label='脂質異常症'></dat-value>
                   <dat-value v-model="param.重症化のリスク因子['肥満（BMI30 以上）']"  label='肥満（BMI30 以上）'></dat-value>
                   <dat-value v-model='param.重症化のリスク因子.喫煙歴' label='喫煙歴'></dat-value>
                </dat-folder>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green'>
             <div class="ui label floating point right pointing green">
               確認
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.患者の症状のその他' label='症状（その他）'></dat-value>
                 <dat-value v-model='param.重症化のリスク因子のその他' label='疾患（その他）'></dat-value>
                 <dat-value v-model="param['患者の酸素飽和度（室内気）']" label='酸素飽和度（室内気）' :min='0' :max='100' :step='1' :empty='0'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green'>
             <div class="ui label floating point right pointing green">
               接種
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.コロナのワクチン１回目の接種' label='１回目の接種' :values="['有り','無し','不明']"></dat-value>
                 <dat-value v-model='param.コロナのワクチン２回目の接種' label='２回目の接種' :values="['有り','無し','不明']"></dat-value>
                 <dat-value v-model='param.コロナのワクチン３回目の接種' label='３回目の接種' :values="['有り','無し','不明']"></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic' v-if="param.コロナのワクチン１回目の接種 == '有り'">
             <div class="ui label floating point right pointing green">
               履歴
            </div>
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-folder :name='壱回目のコロナワクチン接種 | toZen'>
                   <dat-value v-model="param.コロナのワクチン１回目の年齢" label='１回目の年齢' :min='1' :max='125' :step='1' :empty='0'></dat-value>
                   <dat-value v-model='param.コロナのワクチン１回目の製造会社' label='１回目の製造社は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン１回目の種類' label='１回目の種類は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン１回目の接種年月日' label='１回目の接種日は？'  type='yyyymmdd'></dat-value>
                </dat-folder>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic' v-if="param.コロナのワクチン２回目の接種 == '有り'">
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-folder :name='弐回目のコロナワクチン接種 | toZen'>
                   <dat-value v-model="param.コロナのワクチン２回目の年齢" label='２回目の年齢' :min='1' :max='125' :step='1' :empty='0'></dat-value>
                   <dat-value v-model='param.コロナのワクチン２回目の製造会社' label='２回目の製造社は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン２回目の種類' label='２回目の種類は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン２回目の接種年月日' label='２回目の接種日は？'  type='yyyymmdd'></dat-value>
                </dat-folder>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted basic' v-if="param.コロナのワクチン３回目の接種 == '有り'">
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-folder :name='参回目のコロナワクチン接種 | toZen'>
                   <dat-value v-model="param.コロナのワクチン３回目の年齢" label='３回目の年齢' :min='1' :max='125' :step='1' :empty='0'></dat-value>
                   <dat-value v-model='param.コロナのワクチン３回目の製造会社' label='３回目の製造社は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン３回目の種類' label='３回目の種類は？'></dat-value>
                   <dat-value v-model='param.コロナのワクチン３回目の接種年月日' label='３回目の接種日は？'  type='yyyymmdd'></dat-value>
               </dat-folder>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green'>
             <div class="ui label floating point right pointing green">
               感染
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.感染の経路と原因' comment='感染原因・感染経路・感染地域' label='感染源は？' :values="['不明','確定','推定']"></dat-value>
                 <dat-value v-model='param.感染の地域' label='感染域は？' :values="['不明','確定','推定']"></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green' v-if="param.感染の経路と原因 != '不明'">
             <div class="ui label floating point right pointing green">
               経路
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-folder :name='感染原因 | toZen'>
                   <dat-value v-model='param.感染の経路は飛沫か飛沫核' label='飛沫か？'></dat-value>
                   <dat-value v-model='param.感染の経路は接触' label='接触か？'></dat-value>
                   <dat-value v-model='param.感染の経路はその他' label='その他？'></dat-value>
                </dat-folder>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted green' v-if="param.感染の地域 != '不明'">
             <div class="ui label floating point right pointing green">
               地域
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-folder :name='感染地域 | toZen'>
                   <dat-value v-model='param.感染が国内の都道府県名' label='都道府県名'></dat-value>
                   <dat-value v-model='param.感染が国内の都道府県' label='都道府県' :values="['都','道','府','県']"></dat-value>
                   <dat-value v-model='param.感染が国内の市区町村名' label='市区町村名'></dat-value>
                   <dat-value v-model='param.感染が国内の市区町村' label='市区町村' :values="['市','区','町','村']"></dat-value>
                </dat-folder>
                 <dat-folder :name='感染渡航 | toZen'>
                   <dat-value v-model='param.感染が国外' label='感染した国' :values="['','アイスランド','アイルランド','アゼルバイジャン','アフガニスタン','アブハジア','アメリカ','アラブ首長国連邦','アルジェリア','アルゼンチン','アルバニア','アルメニア','アンゴラ','アンティグア・バーブーダ','アンドラ','イエメン','イギリス','イスラエル','イタリア','イラク','イラン','インド','インドネシア','ウガンダ','ウクライナ','ウズベキスタン','ウルグアイ','エクアドル','エジプト','エストニア','エスワティニ（スワジランド）','エチオピア','エリトリア','エルサルバドル','沿ドニエストル','オーストラリア','オーストリア','オマーン','オランダ','ガーナ','カーボベルデ','ガイアナ','カザフスタン','カタール','カナダ','ガボン','カメルーン','韓国','ガンビア','カンボジア','北キプロス','北朝鮮','ギニア','ギニアビサウ','キプロス','キューバ','ギリシャ','キリバス','キルギス','グアテマラ','クウェート','クック諸島','グレナダ','クロアチア','ケニア','コートジボワール','コスタリカ','コソボ','コモロ','コロンビア','コンゴ共和国','コンゴ民主共和国','サウジアラビア','サモア','サントメ・プリンシペ','ザンビア','サンマリノ','シエラレオネ','ジブチ','ジャマイカ','ジョージア','シリア','シンガポール','ジンバブエ','スイス','スウェーデン','スーダン','スペイン','スリナム','スリランカ','スロバキア','スロベニア','セーシェル','赤道ギニア','セネガル','セルビア','セントクリストファー・ネイビス','セントビンセントおよびグレナディーン諸島','セントルシア','ソマリア','ソマリランド','ソロモン諸島','タイ','台湾','タジキスタン','タンザニア','チェコ','チャド','中央アフリカ共和国','中国','チュニジア','チリ','ツバル','デンマーク','ドイツ','トーゴ','ドミニカ共和国','ドミニカ国','トリニダード・トバゴ','トルクメニスタン','トルコ','トンガ','ナイジェリア','ナウル','ナゴルノ・カラバフ','ナミビア','ニウエ','ニカラグア','ニジェール','西サハラ','日本','ニュージーランド','ネパール','ノルウェー','バーレーン','ハイチ','パキスタン','バチカン','パナマ','バヌアツ','バハマ','パプアニューギニア','パラオ','パラグアイ','バルバドス','パレスチナ','ハンガリー','バングラデシュ','東ティモール','フィジー','フィリピン','フィンランド','ブータン','ブラジル','フランス','ブルガリア','ブルキナファソ','ブルネイ','ブルンジ','ベトナム','ベナン','ベネズエラ','ベラルーシ','ベリーズ','ペルー','ベルギー','ポーランド','ボスニア・ヘルツェゴビナ','ボツワナ','ボリビア','ポルトガル','ホンジュラス','マケドニア旧ユーゴスラビア共和国','マーシャル諸島','マダガスカル','マラウイ','マリ','マルタ','マレーシア','ミクロネシア連邦','南アフリカ','南オセチア','南スーダン','ミャンマー','メキシコ','モーリシャス','モーリタニア','モザンビーク','モナコ','モルディブ','モルドバ','モロッコ','モンゴル','モンテネグロ','ヨルダン','ラオス','ラトビア','リトアニア','リビア','リヒテンシュタイン','リベリア','ルーマニア','ルクセンブルク','ルワンダ','レソト','レバノン','ロシア']"></dat-value>
                   <dat-value v-model='param.感染が国外の詳細地域' label='詳細な地域'></dat-value>
                   <dat-value v-model='param.感染が国外への出国日' label='入国日' type='yyyymmdd'></dat-value>
                   <dat-value v-model='param.感染が国外での帰国日' label='出国日' type='yyyymmdd'></dat-value>
                </dat-folder>
              </dat-gui>
            </div>
          </div>
        </div>
         <div class='ui divider horizontal'>
           日付
        </div>
         <div class='ui segments block'>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.初診年月日' comment='新型コロナウイルスの初診年月日' label='初診年月日は？' ></dat-value>
                 <dat-value v-model="param['診断（検案（※））年月日']" comment='新型コロナウイルスの診断年月日' label='診断年月日は？' ></dat-value>
                 <dat-value v-model='param.感染したと推定される年月日' comment='新型コロナウイルスの感染年月日' label='感染年月日は？' ></dat-value>
                 <dat-value v-model='param.発病年月日' comment='新型コロナウイルスの発病年月日' label='発病年月日は？' ></dat-value>
                 <dat-value v-model='param.死亡年月日' comment='新型コロナウイルスの死亡年月日' label='死亡年月日は？' ></dat-value>
              </dat-gui>
            </div>
          </div>
        </div>
         <div class='ui divider horizontal'>
           検査
        </div>
         <div class='ui segments block'>
           <div class='ui segment block fitted'> 
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.検出の検体の採取日' label='採取日は？' type='yyyymmdd'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted orange'>
             <div class="ui label floating point right pointing orange">
               検査
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.検出の種類' label='検出法は？' :values="['分離・同定による病原体の検出','検体から核酸増減法（ＰＣＲ法・ＬＡＭＰ法など）','抗原定性検査による病原体の抗原の検出','抗原定量検査による病原体の抗原の検出']"></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <div v-switch='param.検出の種類'>
                 <div v-case="'分離・同定による病原体の検出'">
                   <dat-gui>
                     <dat-value v-model='param.検出の検体' label='検体種は？' :values="['喀痰','気管吸引液','肺胞洗浄液','咽頭拭い液','鼻腔吸引液','鼻腔拭い液','鼻咽頭拭い液','便','唾液','剖検材料','その他']"></dat-value>
                  </dat-gui>
                </div>
                 <div v-case="'検体から核酸増減法（ＰＣＲ法・ＬＡＭＰ法など）'">
                   <dat-gui name='検体から核酸増減法（ＰＣＲ法・ＬＡＭＰ法など）'>
                     <dat-value v-model='param.検出の検体' label='検出の検体' :values="['喀痰','気管吸引液','肺胞洗浄液','咽頭拭い液','鼻腔吸引液','鼻腔拭い液','鼻咽頭拭い液','便','唾液','剖検材料','その他']"></dat-value>
                  </dat-gui>
                </div>
                 <div v-case="'抗原定性検査による病原体の抗原の検出'">
                   <dat-gui>
                     <dat-value v-model='param.検出の検体' label='検出の検体' :values="['鼻腔拭い液','鼻咽頭拭い液']"></dat-value>
                  </dat-gui>
                </div>
                 <div v-case="'抗原定量検査による病原体の抗原の検出'">
                   <dat-gui>
                     <dat-value v-model='param.検出の検体' label='検出の検体' :values="['鼻腔拭い液','鼻咽頭拭い液','唾液']"></dat-value>
                  </dat-gui>
                </div>
              </div>
            </div>
          </div>
           <div class='ui segment block fitted' v-show="param.検出の検体 == 'その他'">
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.検出の検体のその他' label='検体種は？（その他）'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted orange'>
             <div class="ui label floating point right pointing orange">
               入院
            </div>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.重症度' comment='新型コロナウイルスの重症度' label='重症度は？' :values="['軽症','中等症Ⅰ','中等症Ⅱ','重症']"></dat-value>
                 <dat-value v-model='param.入院の必要性の有無' label='必要ですか？'></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted' v-if="patient.当該者の性別 == '女'">
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.妊娠の有無' label='妊娠してますか？'></dat-value>
              </dat-gui>  
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted'>
               <dat-gui>
                 <dat-value v-model='param.免疫の機能の低下有無' label='免疫は低下してますか？'></dat-value>
                 <dat-value v-model='param.届出時点の入院有無' label='現時点で入院してますか？' ></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted'>
             <div class='content fitted' v-if='param.届出時点の入院有無'>
               <dat-gui>
                 <dat-value v-model='param.入院年月日' label='入院年月日' ></dat-value>
              </dat-gui>
            </div>
          </div>
           <div class='ui segment block fitted orange'>
             <div class="ui label floating point right pointing orange">
               備考
            </div>
             <div class='content fitted'>
               <dat-gui expand>
                 <dat-value v-model='param.特例の診療の有無' label='特例の診療の有無' ref='特例の診療の有無'></dat-value>
                 <dat-text v-model='param.メモ' label='メモ'></dat-text>
              </dat-gui>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div class='portal'>
       <portal to='debug' @mount='debugPortaled'>
         <div class='ui accordion' ref='accordion'>
           <div class='title'>
             <div class='ui divider horizontal active'>
               LIST
            </div>
          </div>
           <div class='content active'>
             <div class='ui segment fitted'>
               <vue-obj-table v-model='param'>
              </vue-obj-table>
            </div>
          </div>
           <div class='title'>
             <div class='ui divider horizontal'>
               JSON
            </div>
          </div>
           <div class='content'>
             <div class='ui segment fitted'>
               <vue-json-pretty
                 :data='param'
                 :show-line='true'
                 :show-length='true'
                 :show-double-quotes='true'
                 :highlight-selected-node='true'
                 :highlight-mouseover-node='true'>
              </vue-json-pretty>
            </div>
          </div>
        </div>
      </portal>
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
         alt:'新型コロナウイルス感染症の発生届',
         doc:null,
         pdf:null,
         /*
          * 補完入力を利用してスピーディにコーディングするために
          * データを入れ子にしない 例 医師 { 氏名:'', 従事病院または診療所の名称:'' }
          */
         param:{
           ロゴ画像:'https://images.unsplash.com/photo-1516222338250-863216ce01ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=467&q=50',
           報告年月日 :'',
           当該者の類型:'患者（確定例）',
           // 11.症状
           患者の症状:{
             発熱:true,
             咳:true,
             咳以外の急性呼吸器の症状:true,
             肺炎像:true,
             重篤な肺炎:true,
             急性呼吸窮迫症候群:true,
             多臓器不全:true,
             全身倦怠感:true,
             頭痛:true,
             '嘔気/嘔吐':true,
             下痢:true,
             結膜炎:true,
             '嗅覚・味覚障害':true,
           },
           患者の症状なし:false,
           '患者の酸素飽和度（室内気）':0,
           患者の症状のその他:'胸部Ｘ線両肺野スリガラス影',
           // 12.診断方法
           検出の種類:'抗原定性検査による病原体の抗原の検出',
           検出の検体:'鼻咽頭拭い液',
           検出の検体のその他:'',
           検出の検体の採取日:'',
           // 13.年月日
           初診年月日:'2021/08/27',
           '診断（検案（※））年月日':'2021/08/27',
           感染したと推定される年月日:'2021/08/27',
           発病年月日:'2021/08/27',
           死亡年月日:'2021/08/27',
           // 18.感染原因・感染経路・感染地域
           感染の経路と原因:'推定',
           感染の経路は飛沫か飛沫核:'同室者からの咳・くしゃみ',
           感染の経路は接触:'濃厚接触者（父）',
           感染の経路はその他:'',
           感染の地域:'推定',
           感染が国内の都道府県名:'東京',
           感染が国内の都道府県:'都',
           感染が国内の市区町村名:'千代田',
           感染が国内の市区町村:'区',
           感染が国外:'アメリカ',
           感染が国外の詳細地域:'コロラド洲',
           感染が国外への出国日:'2021/08/27',
           感染が国外での帰国日:'2021/08/29',
           コロナのワクチン１回目の接種:'',
           コロナのワクチン１回目の年齢:30,
           コロナのワクチン１回目の接種年月日:'2021/04/19',
           コロナのワクチン１回目の種類:'mRNA',
           コロナのワクチン１回目の製造会社:'ファイザ',
           コロナのワクチン２回目の接種:'',
           コロナのワクチン２回目の年齢:30,
           コロナのワクチン２回目の接種年月日:'2021/05/10',
           コロナのワクチン２回目の種類:'mRNA',
           コロナのワクチン２回目の製造会社:'ファイザ',
           コロナのワクチン３回目の接種:'',
           コロナのワクチン３回目の年齢:30,
           コロナのワクチン３回目の接種年月日:'2022/01/07',
           コロナのワクチン３回目の種類:'mRNA',
           コロナのワクチン３回目の製造会社:'ファイザ',
           // 19.患者の症状のその他感染症のまん延の防止及び当該者の医療のために医師が必要と認める事項
           届出時点の入院有無:true,
           入院年月日:'2021/08/27',
           重症化のリスク因子:{
             悪性腫瘍:true,
             '慢性閉塞性肺疾患（COPD）':true,
             慢性腎臓病:true,
             高血圧:true,
             糖尿病:true,
             脂質異常症:true,
             '肥満（BMI30 以上）':true,
             喫煙歴:true
             },
           重症化のリスク因子のその他:'季節性インフルエンザ',
           免疫の機能の低下有無:true,
           妊娠の有無:true,
           重症度:'軽症',
           入院の必要性の有無:true,
           特例の診療の有無:true,
           メモ:'MEMO:'
         }
       }
     },
     computed:{
       患者個人:function(){
         return `個人（${this.patient.当該者の年齢}歳${this.patient.当該者の性別}）`
       },
       症状一覧:function(){
         return `症状（${_.filter(this.param.患者の症状,Boolean).length}個にチェック）`
       },
       疾患一覧:function(){
         return `疾患（${_.filter(this.param.重症化のリスク因子,Boolean).length}個のチェック）`
       },
       壱回目のコロナワクチン接種:function(){
         接種 = this.param.コロナのワクチン１回目の接種年月日.length > 0
         return `１回目は` + (接種 ? `${this.param.コロナのワクチン１回目の年齢}歳の時：${this.年週日前(this.param.コロナのワクチン１回目の接種年月日)}に${this.param.コロナのワクチン１回目の製造会社} ` : 'なし')
       },
       弐回目のコロナワクチン接種:function(){
         接種 = this.param.コロナのワクチン１回目の接種年月日.length > 0
         return `２回目は` + (接種 ? `${this.param.コロナのワクチン２回目の年齢}歳の時${this.年週日前(this.param.コロナのワクチン２回目の接種年月日)}に${this.param.コロナのワクチン２回目の製造会社}` : 'なし')
       },
       参回目のコロナワクチン接種:function(){
         接種 = this.param.コロナのワクチン３回目の接種年月日.length > 0
         return `３回目は` + (接種 ? `${this.param.コロナのワクチン３回目の年齢}歳の時${this.年週日前(this.param.コロナのワクチン３回目の接種年月日)}に${this.param.コロナのワクチン３回目の製造会社}` : 'なし')
       },
       壱回目のコロナワクチン接種の年齢:function(){
         return moment(this.param.コロナのワクチン１回目の接種年月日,'YYYY/MM/DD').age(new Date(this.patient.当該者の生年月日)).years
       },
       弐回目のコロナワクチン接種の年齢:function(){
         return moment(this.param.コロナのワクチン２回目の接種年月日,'YYYY/MM/DD').age(new Date(this.patient.当該者の生年月日)).years
       },
       参回目のコロナワクチン接種の年齢:function(){
         return moment(this.param.コロナのワクチン３回目の接種年月日,'YYYY/MM/DD').age(new Date(this.patient.当該者の生年月日)).years
       },
       重症化のリスク因子となる疾患等の有無:function(){
         return _.some(this.param.重症化のリスク因子) || this.param.重症化のリスク因子のその他.length > 0
       },
       感染原因:function(){
         飛沫 = this.param.感染の経路は飛沫か飛沫核.length > 0
         接触 = this.param.感染の経路は接触.length > 0
         ほか = this.param.感染の経路はその他.length > 0
         return `原因（${_([(飛沫 ? '飛沫' : ''),(接触 ? '接触' : ''),(ほか ? this.param.感染の経路はその他 : '')]).filter(i=>i.length>0).join('・')}）`
       },
       感染地域:function(){
         return `地域（${this.param.感染が国内の都道府県名}${this.param.感染が国内の都道府県}${this.param.感染が国内の市区町村名}${this.param.感染が国内の市区町村}）`
       },
       感染渡航:function(){
         渡航 = this.param.感染が国外.length > 0
         渡航日数 = moment.duration(moment(this.param.感染が国外での帰国日).diff(this.param.感染が国外への出国日)).asDays()
         return `渡航（${渡航 ?  this.param.感染が国外 + 渡航日数 + '日間' + this.param.感染が国外の詳細地域 : 'なし'}）`
       }
     },
     methods:{
       debugPortaled:function(){
         $(this.$refs.accordion).accordion({
           selector:{
             title:'.title',
             content:'.content'
           }
         })
       },
       clear:function(){
           _.merge(this.param,{
             報告年月日 :'',
             // 11.症状
             患者の症状:{
               発熱:false,
               咳:false,
               咳以外の急性呼吸器の症状:false,
               肺炎像:false,
               重篤な肺炎:false,
               急性呼吸窮迫症候群:false,
               多臓器不全:false,
               全身倦怠感:false,
               頭痛:false,
               '嘔気/嘔吐':false,
               下痢:false,
               結膜炎:false,
               '嗅覚・味覚障害':false,
             },
             患者の症状なし:false,
             '患者の酸素飽和度（室内気）':0,
             患者の症状のその他:'',
             // 12.診断方法
             検出の種類:'抗原定性検査による病原体の抗原の検出',
             検出の検体:'鼻咽頭拭い液',
             検出の検体のその他:'',
             検出の検体の採取日:'',
             // 13.年月日
             初診年月日:'',
             '診断（検案（※））年月日':'',
             感染したと推定される年月日:'',
             発病年月日:'',
             死亡年月日:'',
             // 18.感染原因・感染経路・感染地域
             感染の経路と原因:'不明',
             感染の経路は飛沫か飛沫核:'',
             感染の経路は接触:'',
             感染の経路はその他:'',
             感染の地域:'不明',
             感染が国内の都道府県名:'',
             感染が国内の都道府県:'都',
             感染が国内の市区町村名:'',
             感染が国内の市区町村:'区',
             感染が国外:'',
             感染が国外の詳細地域:'',
             感染が国外への出国日:'',
             感染が国外での帰国日:'',
             コロナのワクチン１回目の接種年月日:'',
             コロナのワクチン１回目の種類:'',
             コロナのワクチン１回目の製造会社:'',
             コロナのワクチン２回目の接種年月日:'',
             コロナのワクチン２回目の種類:'',
             コロナのワクチン２回目の製造会社:'',
             コロナのワクチン３回目の接種年月日:'',
             コロナのワクチン３回目の種類:'',
             コロナのワクチン３回目の製造会社:'',
             // 19.患者の症状のその他感染症のまん延の防止及び当該者の医療のために医師が必要と認める事項
             届出時点の入院有無:false,
             入院年月日:'',
             重症化のリスク因子:{
               悪性腫瘍:false,
               '慢性閉塞性肺疾患（COPD）':false,
               慢性腎臓病:false,
               高血圧:false,
               糖尿病:false,
               脂質異常症:false,
               '肥満（BMI30 以上）':false,
               喫煙歴:false
               },
             重症化のリスク因子のその他:'',
             免疫の機能の低下有無:false,
             妊娠の有無:false,
             重症度:'軽症',
             入院の必要性の有無:false,
             特例の診療の有無:false,
             メモ:''
           })
       },
       getDocument:function(){
         return this.doc
       },
       load:async function(){
         this.doc = await PDFLib.PDFDocument.load(this.pdf)
         
         this.doc.registerFontkit(fontkit)

         var highlightPen = {
           color:PDFLib.rgb.apply(null,_.values(tinycolor(this.common.settings.color.mark).toFloatRgb())),
           opacity:0.5,
           thickness:9
         }
         var highlightCircle = {
           color:PDFLib.rgb.apply(null,_.values(tinycolor(this.common.settings.color.mark).toFloatRgb())),
           opacity:0.5,
           size:5
         }
         
         var fontGothicJP = await this.doc.embedFont(this.common.font)
         var page = this.doc.getPages()[0]
             page.setFont(fontGothicJP)
             page.setFontColor(PDFLib.rgb(0,0,0))
             // 追加項目
             page.drawText('病院の患者の管理ＩＤ',{x:60,y:704,size:9})
             page.drawText('診療時間外の電話番号',{x:60,y:684,size:9})
             page.setFontColor(PDFLib.rgb.apply(null,_.values(tinycolor(this.common.settings.color.text).toFloatRgb())))




          try {
  const jpgImageBytes = await fetch(this.hospital.医師の印鑑).then((res) => res.arrayBuffer())
const jpgImage = await this.doc.embedJpg(jpgImageBytes)
const jpgDims = jpgImage.scale(0.5)




page.drawImage(jpgImage, {
  x: 499,
  y: 692,
  width: 24,
  height: 24,
})


          } catch (error) {
            console.error(error);
          }




         var date = moment(this.param.報告年月日)
             if(date.isValid()){
               page.drawTextZen(date.format('yy'),{x:457,y:734,size:9})
               page.drawTextZen(date.format('MM'),{x:484,y:734,size:9})
               page.drawTextZen(date.format('DD'),{x:511,y:734,size:9})
             }

             // 報告者             
             page.drawText(this.hospital.医師の氏名,{x:290,y:721,size:9})
             page.drawText(this.hospital.医師の従事病院または診療所の名称,{x:290,y:709,size:9})
             page.drawText(this.hospital.医師の従事病院または診療所の所在地,{x:290,y:697,size:9})
             page.drawTextZen(this.hospital.医師の従事病院または診療所の電話番号.split('-')[0] || '',{x:280,y:685,size:9})
             page.drawTextZen(this.hospital.医師の従事病院または診療所の電話番号.split('-')[1] || '',{x:338,y:685,size:9})
             page.drawTextZen(this.hospital.医師の従事病院または診療所の電話番号.split('-')[2] || '',{x:405,y:685,size:9})
             page.drawTextZen(this.patient.当該者のＩＤ,{x:60,y:694,size:9})
             page.drawTextZen(this.hospital.医師の従事病院または診療所の時間外の電話番号.split('-').join('-') || '',{x:60,y:672,size:9})
             // 当該者
             page.drawLine(_.merge(
               {
                 '患者（確定例）'          :{start:{x:70,y:650},end:{x:130,y:650}},
                 '無患者の症状病原体保有者' :{start:{x:145,y:650},end:{x:230,y:650}},
                 '疑似症患者（*）'        :{start:{x:245,y:650},end:{x:315,y:650}},
                 '感染症死亡者の死体'     :{start:{x:325,y:650},end:{x:415,y:650}},
                 '感染症死亡疑い者の死体' :{start:{x:430,y:650},end:{x:530,y:650}}
               }[this.param.当該者の類型],
               highlightPen
             ))
             
             page.drawText(jaconv.toHan(this.patient.当該者の読み仮名),{x:61,y:608,size:9})
             page.drawCircle(_.merge(
               {
                 '男':{x:201,y:612},
                 '女':{x:219,y:612}
               }[this.patient.当該者の性別],
               highlightCircle
             ))
            
         var date = moment(this.patient.当該者の生年月日)
             if(date.isValid()){
               page.drawTextZen(date.format('NNNN'),{x:235,y:622,size:9})
               page.drawTextZen(date.format('yy'),{x:237,y:609,size:9})
               page.drawTextZen(date.format('MM'),{x:268,y:609,size:9})
               page.drawTextZen(date.format('DD'),{x:294,y:609,size:9})
               page.drawTextZen(this.patient.当該者の年齢,{x:340,y:609,size:9})
               page.drawTextZen(this.patient.当該者の年齢のヶ月目,{x:397,y:609,size:9})
             }
             page.drawText(this.patient.当該者の職業,{x:448,y:609,size:9})
             page.drawText([this.patient.当該者の住所の県市区町村,this.patient.当該者の住所].join(''),{x:128,y:594,size:9})
             page.drawText(this.patient.当該者の住所の電話番号.split('-')[0] || '',{x:457,y:595,size:9})
             page.drawText(this.patient.当該者の住所の電話番号.split('-')[1] || '',{x:485,y:595,size:9})
             page.drawText(this.patient.当該者の住所の電話番号.split('-')[2] || '',{x:517,y:595,size:9})
             page.drawText(this.patient.当該者の所在地,{x:140,y:581,size:9})
             page.drawText(this.patient.当該者の所在地の電話番号.split('-')[0] || '',{x:457,y:581,size:9})
             page.drawText(this.patient.当該者の所在地の電話番号.split('-')[1] || '',{x:485,y:581,size:9})
             page.drawText(this.patient.当該者の所在地の電話番号.split('-')[2] || '',{x:517,y:581,size:9})
             // 保護者
             if(_.toNumber(this.patient.当該者の年齢) < 20){
               page.drawText(`${this.patient.当該者の保護者の氏名} （${this.patient.当該者の保護者の読み仮名}）`,{x:61,y:556,size:9})
               page.drawText(this.patient.当該者の保護者の住所,{x:198,y:556,size:9})
               page.drawText(this.patient.当該者の保護者の電話番号.split('-')[0] || '',{x:457,y:556,size:9})
               page.drawText(this.patient.当該者の保護者の電話番号.split('-')[1] || '',{x:485,y:556,size:9})
               page.drawText(this.patient.当該者の保護者の電話番号.split('-')[2] || '',{x:517,y:556,size:9})
             }

             // 患者の症状
             var 患者の症状 = 
             {
               '発熱':{start:{x:91,y:533},end:{x:112,y:533}},
               '咳':{start:{x:137,y:533},end:{x:147,y:533}},
               '咳以外の急性呼吸器の症状':{start:{x:173,y:533},end:{x:273,y:533}},
               '肺炎像':{start:{x:91,y:521},end:{x:121,y:521}},
               '重篤な肺炎':{start:{x:137,y:521},end:{x:184,y:521}},
               '急性呼吸窮迫症候群':{start:{x:200,y:521},end:{x:279,y:521}},
               '多臓器不全':{start:{x:91,y:509},end:{x:138,y:509}},
               '全身倦怠感':{start:{x:155,y:509},end:{x:202,y:509}},
               '頭痛':{start:{x:218,y:509},end:{x:237,y:509}},
               '嘔気/嘔吐':{start:{x:253,y:509},end:{x:297,y:509}},
               '下痢':{start:{x:91,y:497},end:{x:111,y:497}},
               '結膜炎':{start:{x:137,y:497},end:{x:166,y:497}},
               '嗅覚・味覚障害':{start:{x:181,y:497},end:{x:247,y:497}},
             }
             if(this.param.患者の症状なし){
               page.drawLine(_.merge({start:{x:258,y:472},end:{x:296,y:472}},highlightPen))
             }
             _(this.param.患者の症状).pickBy(_.identity).each((check,name)=>{
               page.drawLine(_.merge(患者の症状[name],highlightPen))
             })
             page.drawText(this.param['患者の酸素飽和度（室内気）'].toString(),{x:198,y:481,size:9})
             page.drawText(this.param.患者の症状のその他,{x:129,y:469,size:9})
             // 診断方法
         var date = moment(this.param.検出の検体の採取日)
             switch(this.param.検出の種類){
               case '分離・同定による病原体の検出':
                 page.drawLine(_.merge(
                 {
                   '喀痰':{start:{x:116,y:445},end:{x:137,y:445}},
                   '気管吸引液':{start:{x:143,y:445},end:{x:187,y:445}},
                   '肺胞洗浄液':{start:{x:195,y:445},end:{x:242,y:445}},
                   '咽頭拭い液':{start:{x:248,y:445},end:{x:294,y:445}},
                   '鼻腔吸引液':{start:{x:92,y:432},end:{x:137,y:432}},
                   '鼻腔拭い液':{start:{x:144,y:432},end:{x:189,y:432}},
                   '鼻咽頭拭い液':{start:{x:196,y:432},end:{x:252,y:432}},
                   '便':{start:{x:257,y:432},end:{x:266,y:432}},
                   '唾液':{start:{x:273,y:432},end:{x:293,y:432}},
                   '剖検材料':{start:{x:92,y:419},end:{x:128,y:419}}
                 }[this.param.検出の検体],
                   highlightPen
                 ))
                 page.drawText(this.param.検出の検体のその他,{x:176,y:416,size:9})
                 if(date.isValid()){
                   page.drawTextZen(date.format('MM'),{x:158,y:403,size:9})
                   page.drawTextZen(date.format('DD'),{x:190,y:403,size:9})
                 }
                 page.drawLine(_.merge({start:{x:131,y:394},end:{x:150,y:394}},highlightPen))
                 break
               case '検体から核酸増減法（ＰＣＲ法・ＬＡＭＰ法など）':
                 page.drawLine(_.merge(
                 {
                   '喀痰':{start:{x:116,y:348},end:{x:137,y:348}},
                   '気管吸引液':{start:{x:143,y:348},end:{x:187,y:348}},
                   '肺胞洗浄液':{start:{x:195,y:348},end:{x:242,y:348}},
                   '咽頭拭い液':{start:{x:248,y:348},end:{x:294,y:348}},
                   '鼻腔吸引液':{start:{x:92,y:335},end:{x:137,y:335}},
                   '鼻腔拭い液':{start:{x:144,y:335},end:{x:189,y:335}},
                   '鼻咽頭拭い液':{start:{x:196,y:335},end:{x:252,y:335}},
                   '便':{start:{x:257,y:335},end:{x:266,y:335}},
                   '唾液':{start:{x:273,y:335},end:{x:293,y:335}},
                   '剖検材料':{start:{x:92,y:318},end:{x:128,y:318}}
                 }[this.param.検出の検体],
                   highlightPen
                 ))
                 page.drawText(this.param.検出の検体のその他,{x:172,y:319,size:9})
                 if(date.isValid()){
                   page.drawTextZen(date.format('MM'),{x:157,y:306,size:9})
                   page.drawTextZen(date.format('DD'),{x:188,y:306,size:9})
                 }
                 page.drawLine(_.merge({start:{x:131,y:296},end:{x:150,y:296}},highlightPen))
                 break
               case '抗原定性検査による病原体の抗原の検出':
                 page.drawLine(_.merge(
                 {
                   '鼻腔拭い液'           :{start:{x:120,y:264},end:{x:165,y:264}},
                   '鼻咽頭拭い液'         :{start:{x:173,y:264},end:{x:228,y:264}}
                 }[this.param.検出の検体],
                   highlightPen
                 ))
                 if(date.isValid()){
                   page.drawTextZen(date.format('MM'),{x:157,y:248,size:9})
                   page.drawTextZen(date.format('DD'),{x:188,y:248,size:9}) 
                 }
                 page.drawLine(_.merge({start:{x:131,y:238},end:{x:150,y:238}},highlightPen))
                 break
               case '抗原定量検査による病原体の抗原の検出':
                 page.drawLine(_.merge(
                 {
                   '鼻腔拭い液'           :{start:{x:120,y:216},end:{x:165,y:205}},
                   '鼻咽頭拭い液'         :{start:{x:173,y:205},end:{x:228,y:205}},
                   '唾液'                 :{start:{x:236,y:205},end:{x:255,y:205}},
                 }[this.param.検出の検体],
                   highlightPen
                 ))
                 if(date.isValid()){
                   page.drawTextZen(date.format('MM'),{x:157,y:190,size:9})
                   page.drawTextZen(date.format('DD'),{x:188,y:190,size:9})
                 }
                 page.drawLine(_.merge({start:{x:131,y:180},end:{x:150,y:180}},highlightPen))
                 break
             }
             // 診断日
         var tamp = function(date,y){
         var date = moment(date)
             if(date.isValid()){
               page.drawText(date.format('yy'),{x:221,y:y,size:9})
               page.drawText(date.format('MM'),{x:246,y:y,size:9})
               page.drawText(date.format('DD'),{x:273,y:y,size:9})
             }
           }
             tamp(this.param.初診年月日,127)
             tamp(this.param['診断（検案（※））年月日'],114)
             tamp(this.param['感染したと推定される年月日'],102)
             tamp(this.param['発病年月日'],89)
             tamp(this.param['死亡年月日'],76)
             // 感染
             if(this.param.感染の経路と原因 != '不明'){
               page.drawLine(_.merge(
               {
                 '確定':{start:{x:416,y:518},end:{x:434,y:518}},
                 '推定':{start:{x:444,y:518},end:{x:464,y:518}},
               }[this.param.感染の経路と原因],
                 highlightPen
               ))
               page.drawText(this.param.感染の経路は飛沫か飛沫核,{x:327,y:495,size:9})
               page.drawText(this.param.感染の経路は接触,{x:327,y:475,size:9})
               page.drawText(this.param.感染の経路は接触,{x:364,y:465,size:9})
             }
             if(this.param.感染の地域 != '不明'){
               page.drawLine(_.merge(
               {
                 '確定':{start:{x:380,y:458},end:{x:400,y:458}},
                 '推定':{start:{x:407,y:458},end:{x:427,y:458}}
               }[this.param.感染の経路と原因],
                 highlightPen
               ))
               page.drawText(this.param.感染が国内の都道府県名,{x:372,y:445,size:9})
               page.drawLine(_.merge(
               {
                 '都':{start:{x:399,y:448},end:{x:408,y:448}},
                 '道':{start:{x:408,y:448},end:{x:417,y:448}},
                 '府':{start:{x:417,y:448},end:{x:426,y:448}},
                 '県':{start:{x:426,y:448},end:{x:435,y:448}}
               }[this.param.感染が国内の都道府県],
                 highlightPen
               ))
               page.drawText(this.param.感染が国内の市区町村名,{x:435,y:445,size:9})
               page.drawLine(_.merge(
               {
                 '市':{start:{x:472,y:448},end:{x:480,y:448}},
                 '区':{start:{x:481,y:448},end:{x:489,y:448}},
                 '町':{start:{x:489,y:448},end:{x:498,y:448}},
                 '村':{start:{x:499,y:448},end:{x:507,y:448}}
               }[this.param.感染が国内の市区町村],
                 highlightPen
               ))
               page.drawText(this.param.感染が国外,{x:355,y:435,size:9})
               page.drawText(this.param.感染が国外の詳細地域,{x:364,y:425,size:9})
             }
         var tamp = function(date,x){
         var date = moment(date)
            if(date.isValid()){
              page.drawText(date.format('yy'),{x:x,y:405,size:9})
              page.drawText(date.format('MM'),{x:x+18,y:405,size:9})
              page.drawText(date.format('DD'),{x:x+36,y:405,size:9})
            }
          }
              tamp(this.param.感染が国外への出国日,397)
              tamp(this.param.感染が国外での帰国日,484)
         var tamp = function(date,y){
         var date = moment(date)
           if(date.isValid()){
             page.drawText(date.format('yy'),{x:377,y:y,size:9})
             page.drawText(date.format('MM'),{x:395,y:y,size:9})
             page.drawText(date.format('DD'),{x:412,y:y,size:9})
           }
         }





              page.drawText(this.param.コロナのワクチン１回目の種類,{x:444,y:365,size:9})
              page.drawText(jaconv.toHan(this.param.コロナのワクチン１回目の製造会社),{x:480,y:365,size:9})
              if(this.param.コロナのワクチン１回目の製造会社.length == 0){
                page.drawLine(_.merge({start:{x:516,y:369},end:{x:534,y:369}},highlightPen))
              }
              tamp(this.param.コロナのワクチン１回目の接種年月日,355)
              if(this.param.コロナのワクチン１回目の接種年月日.length == 0){
                page.drawLine(_.merge({start:{x:440,y:359},end:{x:458,y:359}},highlightPen))
              }

              var func = function(type,y){
                switch(type){
                  case '有り':
                    page.drawCircle(_.merge({x:350,y:y},highlightCircle))
                    break
                  case '無し':
                    page.drawCircle(_.merge({x:408,y:y},highlightCircle))
                    break
                  case '不明':
                    page.drawLine(_.merge({start:{x:422,y:y},end:{x:440,y:y}},highlightPen))
                    break
                }
              }
              
              func(this.param.コロナのワクチン１回目の接種,378)
              func(this.param.コロナのワクチン２回目の接種,348)
              func(this.param.コロナのワクチン３回目の接種,318)

              if(this.param.コロナのワクチン１回目の接種年月日.length > 0){
                page.drawText(_.toString(this.param.コロナのワクチン１回目の接種年月日.length > 0 ? this.壱回目のコロナワクチン接種の年齢 : this.コロナのワクチン１回目の年齢),{x:367,y:375,size:9})
              }
              if(this.param.コロナのワクチン２回目の接種年月日.length > 0){
                page.drawText(_.toString(this.param.コロナのワクチン２回目の接種年月日.length > 0 ? this.弐回目のコロナワクチン接種の年齢 : this.コロナのワクチン２回目の年齢),{x:367,y:345,size:9})
              }
              if(this.param.コロナのワクチン３回目の接種年月日.length > 0){
                page.drawText(_.toString(this.param.コロナのワクチン３回目の接種年月日.length > 0 ? this.参回目のコロナワクチン接種の年齢 : this.コロナのワクチン３回目の年齢),{x:367,y:315,size:9})
              }

              





              page.drawText(this.param.コロナのワクチン２回目の種類,{x:444,y:335,size:9})
              page.drawText(jaconv.toHan(this.param.コロナのワクチン２回目の製造会社),{x:480,y:335,size:9})
              if(this.param.コロナのワクチン２回目の製造会社.length == 0){
                page.drawLine(_.merge({start:{x:516,y:339},end:{x:534,y:339}},highlightPen))
              }
              tamp(this.param.コロナのワクチン２回目の接種年月日,325)
              if(this.param.コロナのワクチン２回目の接種年月日.length == 0){
                page.drawLine(_.merge({start:{x:440,y:329},end:{x:458,y:329}},highlightPen))
              }

              page.drawText(this.param.コロナのワクチン３回目の種類,{x:444,y:305,size:9})
              page.drawText(jaconv.toHan(this.param.コロナのワクチン３回目の製造会社),{x:480,y:305,size:9})
              if(this.param.コロナのワクチン３回目の製造会社.length == 0){
                page.drawLine(_.merge({start:{x:516,y:309},end:{x:534,y:309}},highlightPen))
              }
              tamp(this.param.コロナのワクチン３回目の接種年月日,295)
              if(this.param.コロナのワクチン３回目の接種年月日.length == 0){
                page.drawLine(_.merge({start:{x:440,y:299},end:{x:458,y:299}},highlightPen))
              }
             // その他の症状感染症のまん延の防止及び当該者の医療のために医師が必要と認める事項
             page.drawCircle(_.merge(this.param.届出時点の入院有無 ? {x:412,y:261} : {x:428,y:261},highlightCircle))
             var date = moment(this.param.入院年月日)
             if(date.isValid()){
               page.drawText(date.format('yy'),{x:444,y:246,size:9})
               page.drawText(date.format('MM'),{x:467,y:246,size:9})
               page.drawText(date.format('DD'),{x:493,y:246,size:9})
             }
             page.drawCircle(_.merge(this.重症化のリスク因子となる疾患等の有無 ? {x:478,y:236} : {x:494,y:236},highlightCircle))
             // 重症化のリスク因子
             var 重症化のリスク因子 = 
             {
               悪性腫瘍:{start:{x:330,y:212},end:{x:363,y:212}},
               '慢性閉塞性肺疾患（COPD）':{start:{x:370,y:212},end:{x:464,y:212}},
               慢性腎臓病:{start:{x:473,y:212},end:{x:516,y:212}},
               高血圧:{start:{x:330,y:200},end:{x:354,y:200}},
               糖尿病:{start:{x:362,y:200},end:{x:387,y:200}},
               脂質異常症:{start:{x:395,y:200},end:{x:437,y:200}},
               '肥満（BMI30 以上）':{start:{x:444,y:200},end:{x:512,y:200}},
               喫煙歴:{start:{x:330,y:188},end:{x:354,y:188}},
             }
             _(this.param.重症化のリスク因子).pickBy(_.identity).each((check,name)=>{
               page.drawLine(_.merge(重症化のリスク因子[name],highlightPen))
             })
             page.drawText(this.param.重症化のリスク因子のその他,{x:397,y:185,size:9})
             page.drawCircle(_.merge(this.param.免疫の機能の低下有無 ? {x:494,y:164} : {x:511,y:164},highlightCircle))
             page.drawCircle(_.merge(this.param.妊娠の有無 ? {x:372,y:152} : {x:386,y:152},highlightCircle))
             page.drawLine(_.merge(
             {
               軽症:{start:{x:374,y:127},end:{x:392,y:127}},
               中等症Ⅰ:{start:{x:398,y:127},end:{x:432,y:127}},
               中等症Ⅱ:{start:{x:440,y:127},end:{x:472,y:127}},
               重症:{start:{x:480,y:127},end:{x:498,y:127}}
             }[this.param.重症度],
               highlightPen
             ))
             page.drawCircle(_.merge(this.param.入院の必要性の有無 ? {x:404,y:115} : {x:421,y:115},highlightCircle))
             page.drawCircle(_.merge(this.param.特例の診療の有無 ? {x:359,y:75} : {x:377,y:75},highlightCircle))
             _.each(this.param.メモ.split('\n'),(line,i)=>{
               page.drawText(line,{x:246,y:32 - (i * 10),size:9})
            })
         // 読込
         this.$refs.iframe.src = URL.createObjectURL(new Blob([await this.doc.save()],{type:'application/pdf'}))
       }
     },
     components:{
       'vue-obj-table':'url:vue/vue-obj-table.vue'
     },
     created:async function(){
       localforage.getItem(this.$router.name).then((o)=>{
         if(o){
           _.merge(this.param,o)
         }
       }).catch(()=>{
         toast.info('error','前回入力された情報の復元に失敗しました')
       })
       var 今日 = moment().format('YYYY/MM/DD')
       this.param.報告年月日 = 今日
       this.param.検出の検体の採取日 = 今日
       this.pdf = await fetch(this.$route.meta.path).then((responce)=>{
         return responce.arrayBuffer()
       })
     },
     mounted:function(){
       this.$watchAll([
         {name:'param.患者の症状',options:{deep:true}},
         {name:'param.患者の症状のその他'}
       ],()=>{
         this.param.患者の症状なし = (_.some(this.param.患者の症状,Boolean) ==  false && this.param.患者の症状のその他.length == 0)
       })
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
       })
     }
   }
</script>
 <style>
</style>