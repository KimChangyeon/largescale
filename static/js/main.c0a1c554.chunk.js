(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(28)},20:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),o=(a(20),a(1)),l=a(2),s=a(4),u=a(3),h=a(5),d=(a(6),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.header,r.a.createElement("body",null," ",r.a.createElement("p",null,"Scenario Page.")," "))}}]),t}(n.Component)),p=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.header,r.a.createElement("body",null," ",r.a.createElement("p",null,"About Page.")," "))}}]),t}(n.Component),m=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.header,r.a.createElement("body",null," ",r.a.createElement("p",null,"Feedback Page.")," "))}}]),t}(n.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.header,r.a.createElement("body",null," ",r.a.createElement("p",null,"Language Page.")," "))}}]),t}(n.Component),b=a(9),f=a.n(b),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.props.header,r.a.createElement("body",null," ",r.a.createElement("p",null,"Description Page.")))}}]),t}(n.Component),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).next_stage=function(e){a.props.set_stage(a.props.stage_id+1)},a.next_page=function(e){a.props.set_page(a.props.page_id+1)},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this;switch(this.props.stage[this.props.stage_id]){case"intro":e=r.a.createElement("div",null,this.props.header,r.a.createElement("body",null,r.a.createElement("p",{style:{"font-weight":"bold"}},"This is the prototype of AI Rights Large Scale. This program is based on Moral machine. "),r.a.createElement("p",{style:{"margin-bottom":"30px"}},"We are now conducting research on the possibility of an electronic legal personhood, under which AI and robots would be granted rights and duties similarly to corporations. Now, we are gathering opinions on the issue by promoting a discussion about the topic on Reddit. We would like to invite all of you to check it out and participate. In the threads we created, we have a short video and introduction about the topic for some background on the issue. If you have any comments, feel free to share them in the Reddit threads linked below! Thank you!"),r.a.createElement("div",{className:"ButtonMargin"},r.a.createElement(f.a,{variant:"danger",className:"ButtonWidth",onClick:function(){return t.next_page(1)}}," Start ")),r.a.createElement("div",{className:"ButtonMargin"},r.a.createElement(f.a,{variant:"danger",className:"ButtonWidth",onClick:function(){return t.next_stage(1)}}," View Instructions ")),r.a.createElement("a",{href:"https://ds.kaist.ac.kr"},r.a.createElement("img",{src:"https://cdn-img.microrobotresear.ch/KAIST_logo-01.png",alt:"KAIST_LOGO",style:{"margin-top":"30px",width:"300px",height:"auto"}}))));break;case"discription":e=r.a.createElement("div",null,r.a.createElement(E,{header:this.props.header}));break;default:alert("ERROR")}return r.a.createElement("div",null,e)}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={header:r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("h1",null,"Large Scale"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu"},r.a.createElement("li",null,r.a.createElement("a",{href:"",onClick:function(){return a.goHome()}},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return a.set_page(1)}},"Try")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return a.set_page(2)}},"About")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return a.set_page(3)}},"Feedback")),r.a.createElement("li",null,r.a.createElement("a",{href:"#",onClick:function(){return a.set_page(4)}},"Language")))))),page_id:0,page:["home","scenario","about","feedback","language"],stage_id:0,stage:["intro","discription"],language:0},a.goHome=function(){a.setState({stage_id:0,page_id:0})},a.set_stage=function(e){a.setState({stage_id:e})},a.set_page=function(e){a.setState({page_id:e})},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e;switch(this.state.page[this.state.page_id]){case"home":e=r.a.createElement(O,{header:this.state.header,stage_id:this.state.stage_id,stage:this.state.stage,set_stage:this.set_stage,page_id:this.state.page_id,set_page:this.set_page});break;case"scenario":e=r.a.createElement(d,{header:this.state.header});break;case"about":e=r.a.createElement(p,{header:this.state.header});break;case"feedback":e=r.a.createElement(m,{header:this.state.header});break;case"language":e=r.a.createElement(g,{header:this.state.header});break;default:alert("You don't have to come here.")}return r.a.createElement("div",null,e)}}]),t}(n.Component);c.a.render(r.a.createElement(j,null),document.getElementById("root"))},6:function(e,t,a){}},[[14,1,2]]]);
//# sourceMappingURL=main.c0a1c554.chunk.js.map