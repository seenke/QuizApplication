(function(e){function t(t){for(var r,o,i=t[0],u=t[1],a=t[2],d=0,f=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&f.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==s[u]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},1061:function(e,t,n){},"1f7a":function(e,t,n){"use strict";var r=n("1061"),s=n.n(r);s.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=n("1fe4"),c=n("5f5b"),o=(n("f9e3"),n("2dd8"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[this.index<10?n("div",{attrs:{id:"quizContainer"}},[n("Header",{attrs:{currentIndex:e.index,correct:e.correct_num,incorrect:e.incorrect_num}}),n("b-container",{staticClass:"bv-example-row"},[n("b-row",[n("b-col",{attrs:{sm:"6",offset:"3"}},[e.questions.length?n("QuestionBox",{attrs:{currentQuestion:e.questions[e.index],next:e.next,correct:e.correct_num,incorrect:e.incorrect_num},on:{submited:e.fixScore}}):e._e()],1)],1)],1)],1):e._e()])}),i=[],u=(n("d3b7"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:""}},[n("b-nav-item",{attrs:{disabled:""}},[n("b",[e._v("Fancy Quiz App ")])]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Current question: "+e._s(e.currentIndex+1)+" / 10")]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Correct answers: "+e._s(e.correct))]),n("b-nav-item",{attrs:{disabled:""}},[e._v("Incorrect answers: "+e._s(e.incorrect))])],1)],1)}),a=[],l=(n("a9e3"),{props:{currentIndex:Number,correct:Number,incorrect:Number}}),d=l,f=n("2877"),h=Object(f["a"])(d,u,a,!1,null,null,null),p=h.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-jumbotron",{attrs:{header:"",lead:"Bootstrap v4 Components for Vue.js 2"},scopedSlots:e._u([{key:"lead",fn:function(){return[e._v(" "+e._s(e.currentQuestion.question)+" ")]},proxy:!0}])},[n("hr",{staticClass:"my-4"}),e._l(e.answers,(function(t,r){return n("p",{key:t,on:{click:function(t){return e.selectAnswer(r)}}},[n("b-list-group-item",{class:{selected:e.selectedIndex===r&&null===e.answerCorrectness,correct:!0===e.answerCorrectness&&e.correctIndex===r,incorrect:!1===e.answerCorrectness&&r===e.selectedIndex},attrs:{button:"",disabled:!0===e.submited}},[e._v(" "+e._s(t)+" ")])],1)})),n("b-button",{attrs:{variant:"primary",disabled:null==e.selectedIndex||e.submited},on:{click:e.submitAnswer}},[e._v(" Submit ")]),n("b-button",{attrs:{variant:"success",href:"#",disabled:!1===e.submited},on:{click:e.next}},[e._v("Next")])],2)],1)},m=[],v=(n("99af"),n("c975"),n("2909")),x={props:{currentQuestion:Object,next:Function,correct:Number,incorrect:Number},data:function(){return{selectedIndex:null,shuffledAnswers:[],correctIndex:null,answerCorrectness:null,submited:!1}},watch:{currentQuestion:{immediate:!0,handler:function(){this.selectedIndex=null,this.shuffleAnswers(),this.submited=!1,this.answerCorrectness=null}}},computed:{answers:function(){var e=Object(v["a"])(this.currentQuestion.incorrect_answers);return e.push(this.currentQuestion.correct_answer),e}},methods:{selectAnswer:function(e){this.submited||(this.answerCorrectness=null,this.selectedIndex=e,console.log(e))},shuffle:function(e){var t,n,r;for(r=e.length-1;r>0;r--)t=Math.floor(Math.random()*(r+1)),n=e[r],e[r]=e[t],e[t]=n;return e},shuffleAnswers:function(){var e=[].concat(Object(v["a"])(this.currentQuestion.incorrect_answers),[this.currentQuestion.correct_answer]);this.shuffledAnswers=this.shuffle(e),this.correctIndex=this.shuffledAnswers.indexOf(this.currentQuestion.correct_answer)},submitAnswer:function(){var e=!1;this.submited=!0,this.selectedIndex==this.correctIndex&&(e=!0),e?++this.correct:++this.incorrect,this.$emit("submited",this.correct,this.incorrect),this.answerCorrectness=e}}},_=x,w=(n("1f7a"),Object(f["a"])(_,b,m,!1,null,"f56edd46",null)),y=w.exports,g={name:"App",components:{Header:p,QuestionBox:y},watch:{index:{immediate:!0}},methods:{next:function(){this.index++},fixScore:function(e,t){this.correct_num=e,this.incorrect_num=t}},data:function(){return{questions:[],index:0,correct_num:0,incorrect_num:0}},mounted:function(){var e=this;fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple",{method:"get"}).then((function(e){return e.json()})).then((function(t){e.questions=t.results}))}},j=g,O=(n("034f"),Object(f["a"])(j,o,i,!1,null,null,null)),I=O.exports;r["default"].use(c["a"]),r["default"].use(s["a"]),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(I)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.5fdc90da.js.map