 <template>
   <div>
     <table class='ui table very basic celled unstackable selectable sortable block single line'>
       <thead>
         <tr>
           <th>NO</th>
           <th>TITLE</th>
           <th>AUTHOR</th>
        </tr>
      </thead>
       <tbody>
         <tr v-for='o,i in list' v-style:align="'c,l,c'" v-style:width="'3,a,a,a'">
           <td>{{i + 1}}</td>
           <td><a :title='`${o.title}/${o.author}`' :href='o.downloadLink' target='_blank'>{{o.name}}</a></td>
           <td>{{o.version}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 <script>
   module.exports={
     data:function(){
       return{
         list:[
           {
             name:'COVID-19 発生届',
             title:'新型コロナウイルス感染症　発生届',
             author:'福島 銀史郎',
             version:'2021/11/29 18:03',
             downloadLink:'https://www.mhlw.go.jp/bunya/kenkou/kekkaku-kansenshou11/01-shitei-01.html'
           },
           {
             name:'COVID-19 診察所見報告書',
             title:'新型コロナウイルス感染症自宅療養者等の診察所見報告書',
             author:'???',
             version:'???',
             downloadLink:'???'
           },
           {
             name:'ラゲブリオ 同意説明文書',
             title:'ラゲブリオ®カプセル200mgによる治療に係る同意説明文書',
             author:'Nishiyama, Michiyo',
             version:'2022/01/27 11:33',
             downloadLink:'https://www.msdconnect.jp/products/lagevrio/'
           },
           {
             name:'ラゲブリオ 適格性情報チェックリスト',
             title:'ラゲブリオ®カプセル200mg処方にあたっての適格性情報チェックリスト',
             author:'Kojima, Yukari',
             version:'2021/12/27 14:33',
             downloadLink:'https://www.msdconnect.jp/products/lagevrio/'
           }
         ]
       }
     }
   }
</script>
 <style>
</style>