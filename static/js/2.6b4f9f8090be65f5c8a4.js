webpackJsonp([2],{"1Pov":function(t,e){},qQMd:function(t,e){},uLSO:function(t,e,a){t.exports=a.p+"static/img/clock1.cdaa1f3.png"},uZcP:function(t,e,a){t.exports=a.p+"static/img/clock.f81e3e8.png"},yRhF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("uk2G"),i={name:"demo6",data:function(){return{canvas:{width:630,height:830},R:0}},mounted:function(){this.resizefun()},destroyed:function(){},methods:{resizefun:function(){var t=this;o().listenTo(document.body,function(e){var a=.35*e.clientWidth,o=.75*e.clientHeight;t.canvas={width:a,height:o},t.$nextTick(function(){console.log("Size: "+t.canvas.width+"px"+t.canvas.height),t.drawCoolClock(),console.log("canvas尺寸: "+t.$refs.coolClockCanvas.width+"px"+t.$refs.coolClockCanvas.height)})})},drawCoolClock:function(){var t=this.$refs.coolClockCanvas,e=t.getContext("2d"),a=this.canvas.width/2,o=this.canvas.height/2;this.R=this.canvas.width/2.5,e.clearRect(0,0,t.width,t.height),this.drawScale0(e,a,o,this.R),this.drawScale1(e,a,o,this.R),this.drawScale2(e,a,o,this.R),this.drawScale3(e,a,o,this.R),this.drawScale4(e,a,o,this.R),this.drawScale5(e,a,o,this.R),this.drawScale6(e,a,o,this.R),this.drawScale7(e,a,o,this.R),this.drawScale8(e,a,o,this.R),this.drawScale9(e,a,o,this.R),this.drawScale10(e,a,o,this.R)},drawScale0:function(t,e,o,i,s){t.save(),t.beginPath(),t.arc(e,o,1.26*i,0,2*Math.PI),t.clip(),(s=new Image).src=a("uLSO"),s.style.width="100%",console.log("clockImg",s),t.strokeStyle="#343F4A",t.lineWidth=6,t.beginPath(),t.arc(e,o,1.8*i,0,2*Math.PI,!0),t.stroke(),t.closePath(),t.fillStyle="#292934",t.fill(),t.rotate(1/3*2*Math.PI/60),s.onload=function(){t.drawImage(s,-80,-60)},t.restore()},drawScale1:function(t,e,a,o){t.save(),t.strokeStyle="#343F4A",t.lineWidth=6,t.beginPath(),t.arc(e,a,o,0,2*Math.PI,!0),t.stroke(),t.closePath(),t.fillStyle="#292934",t.fill(),t.restore()},drawScale2:function(t,e,a,o){for(var i=0;i<720;i++){var s=.5*i-90,r=e+Math.cos(s*Math.PI/180)*o*.98,n=a+Math.sin(s*Math.PI/180)*o*.98,l=e+Math.cos(s*Math.PI/180)*o*.93,c=a+Math.sin(s*Math.PI/180)*o*.93;t.strokeStyle="#245274",t.save(),t.beginPath(),t.lineWidth=1,t.lineCap="round",t.moveTo(r,n),t.lineTo(l,c),t.stroke(),t.closePath(),t.restore()}},drawScale3:function(t,e,a,o){for(var i=0;i<720;i++){var s=.5*i-90,r=e+Math.cos(s*Math.PI/180)*o*.91,n=a+Math.sin(s*Math.PI/180)*o*.91,l=e+Math.cos(s*Math.PI/180)*o*.8,c=a+Math.sin(s*Math.PI/180)*o*.8;t.strokeStyle="#245274",t.save(),t.beginPath(),t.lineWidth=1,t.lineCap="round",t.moveTo(r,n),t.lineTo(l,c),t.stroke(),t.closePath(),t.restore()}},drawScale4:function(t,e,a,o){t.save(),t.strokeStyle="#343F4A",t.lineWidth=6,t.beginPath(),t.arc(e,a,.77*o,0,2*Math.PI,!0),t.stroke(),t.closePath(),t.fillStyle="#292934",t.fill(),t.restore()},drawScale5:function(t,e,a,o){t.save(),t.strokeStyle="#343F4A",t.lineWidth=6,t.beginPath(),t.arc(e,a,.66*o,0,2*Math.PI,!0),t.stroke(),t.closePath(),t.fillStyle="#292934",t.fill(),t.restore()},drawScale6:function(t,e,a,o){for(var i=0;i<720;i++){var s=.5*i-90,r=e+Math.cos(s*Math.PI/180)*o*.64,n=a+Math.sin(s*Math.PI/180)*o*.64,l=e+Math.cos(s*Math.PI/180)*o*.58,c=a+Math.sin(s*Math.PI/180)*o*.58;t.strokeStyle="#245274",t.save(),t.beginPath(),t.lineWidth=1,t.lineCap="round",t.moveTo(r,n),t.lineTo(l,c),t.stroke(),t.closePath(),t.restore()}},drawScale7:function(t,e,a,o){for(var i=0;i<720;i++){var s=.5*i-90,r=e+Math.cos(s*Math.PI/180)*o*.54,n=a+Math.sin(s*Math.PI/180)*o*.54,l=e+Math.cos(s*Math.PI/180)*o*.43,c=a+Math.sin(s*Math.PI/180)*o*.43;t.strokeStyle="#292934",t.strokeStyle=i>0&&i<99?"#836B27":i>103&&i<359?"#4CC2CE":i>369&&i<712?"rgb(108,40,46)":"#292934",t.save(),t.beginPath(),t.lineWidth=3,t.lineCap="round",t.moveTo(r,n),t.lineTo(l,c),t.stroke(),t.closePath(),t.restore()}},drawScale8:function(t,e,a,o){t.save(),t.strokeStyle="#343F4A",t.lineWidth=6,t.beginPath(),t.arc(e,a,.39*o,0,2*Math.PI,!0),t.stroke(),t.closePath(),t.fillStyle="#292934",t.fill(),t.restore()},drawScale9:function(t,e,a,o){t.save();var i=t.createLinearGradient(0,60,60,0);i.addColorStop("0","rgba(255,255,255,1)"),i.addColorStop("0.1","rgba(255,255,255,.4)"),i.addColorStop("0.2","rgba(255,255,255,.3)"),i.addColorStop("0.4","rgba(255,255,255,.25)"),i.addColorStop("0.6","rgba(255,255,255,.2)"),i.addColorStop("0.8","rgba(255,255,255,.15)"),i.addColorStop("1.0","rgba(255,255,255,0)"),t.strokeStyle=i,t.lineWidth=6,t.beginPath(),t.arc(e,a,.33*o,0,Math.PI,!1),t.stroke(),t.closePath(),t.restore()},drawScale10:function(t,e,a,o){t.save(),t.beginPath(),t.font=.21*o+"px MicrosoftYaHei",t.fillStyle="#B4B4B4",t.fill(),t.fillText("24",1*e,.94*a),t.closePath(),t.beginPath(),t.font=.089*o+"px MicrosoftYaHei",t.fillStyle="#6C6C6C",t.fill(),t.fillText("报警总数",1*e,1.1*a),t.closePath(),t.restore()}}},s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"coolClockWrapbox",staticClass:"coolClockWrap"},[e("canvas",{ref:"coolClockCanvas",attrs:{width:this.canvas.width,height:this.canvas.height}}),this._v(" "),e("div",{staticStyle:{display:"none"}},[e("img",{ref:"conf0",attrs:{src:a("uZcP")}})])])},staticRenderFns:[]};var r={name:"page6",components:{demo6:a("VU/8")(i,s,!1,function(t){a("qQMd")},"data-v-6c2ee866",null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"page6"}},[e("demo6")],1)},staticRenderFns:[]};var l=a("VU/8")(r,n,!1,function(t){a("1Pov")},"data-v-1a10d9ce",null);e.default=l.exports}});
//# sourceMappingURL=2.6b4f9f8090be65f5c8a4.js.map