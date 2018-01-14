webpackJsonp([1],{0:function(t,e){},KvaP:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("7+uW"),i=n("sUu7"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var a=n("VU/8")({name:"app"},o,!1,function(t){n("pcmX")},null,null).exports,u=n("/ocq"),r=n("NYxO");s.a.use(r.a);var c=new r.a.Store({state:{questions:[]},mutations:{addQuestion:function(t,e){t.questions.push(e)},removeQuestion:function(t,e){var n=t.questions.filter(function(t){return t.id===e});if(n&&n.length>0){var s=t.questions.indexOf(n[0]);s>-1&&t.questions.splice(s,1)}},clearAll:function(t){t.questions=[]}},getters:{questionCount:function(t){return t.questions.length}}}),d=n("DmT9"),l=n.n(d),v=n("DtRx"),m=n.n(v);s.a.use(r.a);var p=new r.a.Store({state:{socket:null},mutations:{connect:function(t){t.socket=l()("https://clazz-room.herokuapp.com"),t.socket.on("all-questions-sent",function(t){c.commit("clearAll"),t.forEach(function(t){return c.commit("addQuestion",t)})}),t.socket.on("student-question-published",function(t){c.commit("addQuestion",t)}),t.socket.on("student-question-removed",function(t){c.commit("removeQuestion",t)})},newStudentQuestion:function(t,e){e.id=m()(),t.socket.emit("new-student-question",e)},newMCQQuestion:function(t,e){t.socket.emit("new-mcq-question",e)},removeStudentQuestion:function(t,e){t.socket.emit("remove-student-question",e)}}}),f={name:"view-questions",computed:{questions:function(){return c.state.questions}},methods:{removeQuestion:function(t){p.commit("removeStudentQuestion",t)}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h3",{staticClass:"text-secondary"},[t._v("Questions published")]),t._v(" "),n("div",{staticClass:"question-area"},t._l(t.questions,function(e){var s=e.id,i=e.title,o=e.description;return n("div",{key:s,staticClass:"card add-gap bg-dark"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title text-white"},[t._v(t._s(i))]),t._v(" "),n("p",{staticClass:"card-text text-white"},[t._v(t._s(o))])]),t._v(" "),n("button",{staticClass:"btn btn-light rounded-circle",attrs:{type:"button"},on:{click:function(e){t.removeQuestion(s)}}},[n("span",{staticClass:"oi oi-check"})])])}))])])])},staticRenderFns:[]};var b=n("VU/8")(f,h,!1,function(t){n("KvaP")},null,null).exports,q={name:"add-student-question",data:function(){return{question:{title:"",description:""},submited:!1}},methods:{addQuestion:function(){this.submited=!0,this.errors.has("title")||(p.commit("newStudentQuestion",this.question),this.question={title:"",description:""})}}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("h3",{staticClass:"text-secondary"},[t._v("Add new question")]),t._v(" "),n("form",[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"question-title"}},[t._v("Title")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.question.title,expression:"question.title"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",attrs:{type:"text",id:"question-title",name:"title",placeholder:"Enter title"},domProps:{value:t.question.title},on:{input:function(e){e.target.composing||t.$set(t.question,"title",e.target.value)}}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.errors.has("title")||t.submited,expression:"errors.has('title') || submited"}],staticClass:"error"},[t._v("* "+t._s("title field is required"))])]),t._v(" "),n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"question-description"}},[t._v("Description")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.question.description,expression:"question.description"}],staticClass:"form-control",attrs:{id:"question-description",rows:"4"},domProps:{value:t.question.description},on:{input:function(e){e.target.composing||t.$set(t.question,"description",e.target.value)}}})]),t._v(" "),n("button",{staticClass:"btn btn-dark btn-block btn-lg",attrs:{type:"button"},on:{click:t.addQuestion}},[t._v("\n          Publish\n        ")])])])])])},staticRenderFns:[]};var w=n("VU/8")(q,_,!1,function(t){n("nU3B")},null,null).exports,C={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("h3",{staticClass:"text-secondary"},[this._v("Clazz Room")]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("button",{staticClass:"btn btn-dark btn-block big-button",attrs:{type:"button big-button"},on:{click:this.openViewQuestionsPage}},[this._v("\n        Lecturer\n      ")]),this._v(" "),e("button",{staticClass:"btn btn-dark btn-block big-button",attrs:{type:"button big-button"},on:{click:this.openAddQuestionPage}},[this._v("\n        Student\n      ")])])])])},staticRenderFns:[]};var g=n("VU/8")({name:"dash-board",methods:{openAddQuestionPage:function(){this.$router.push("/student/add-question")},openViewQuestionsPage:function(){this.$router.push("/teacher/view-questions")}}},C,!1,function(t){n("SHHD")},"data-v-4b2e6694",null).exports;s.a.use(u.a);var k=new u.a({routes:[{path:"/teacher/view-questions",name:"ViewQuestions",component:b},{path:"/student/add-question",name:"AddStudentQuestion",component:w},{path:"/",name:"DashBoard",component:g}]});s.a.config.productionTip=!1,s.a.use(i.a),new s.a({el:"#app",router:k,template:"<App/>",components:{App:a}}),p.commit("connect")},SHHD:function(t,e){},nU3B:function(t,e){},pcmX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.a47f876dc21c120f5375.js.map