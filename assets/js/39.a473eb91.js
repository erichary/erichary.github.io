(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{470:function(t,e,s){"use strict";s.r(e);var i={props:["about-me-time"],data:()=>({time:"正在努力加载时间……"}),mounted(){setTimeout(()=>{this.dateTime()},2e3)},methods:{dateTime(){this.timeFormate(),setTimeout(()=>{this.dateTime()},1e3)},timeFormate(){let t=new Date,e=t.getFullYear(),s=t.getMonth()+1,i=t.getDate(),o=t.getHours(),a=t.getMinutes(),n=t.getSeconds(),l=t.getDay();o<10&&(o="0"+o),a<10&&(a="0"+a),n<10&&(n="0"+n),this.time="现在是\t"+e+"年"+s+"月"+i+"日\t"+o+":"+a+":"+n+"\t"+["星期天","星期一","星期二","星期三","星期四","星期五","星期六"][l]}}},o=s(2),a=Object(o.a)(i,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("感受清风轻拂，畅享自然清新。")]),t._v(" "),e("p",[t._v("微风，是生活中的点点滴滴，是心灵中的一处净土。让我们在繁忙的生活中，停下脚步，感受清风的吹拂，感受生活的美好。让清风带走烦恼，留下宁静与美好。让我们与清风同行，追逐自然的节奏，品味生活的清新与美好。")]),t._v(" "),e("p",[t._v(t._s(t.time))])]),e("p",[t._v("整理中……")])])}),[],!1,null,null,null);e.default=a.exports}}]);