(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),i=n.n(c),o=(n(23),n(3)),l=n(4),u=n(9),s=n(6),d=n(5),h=(n(24),n(25),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Editor"},r.a.createElement("p",null,"Editor"),r.a.createElement("textarea",{defaultValue:this.props.defaultValue,onChange:this.props.onChange,id:"editor",rows:"20",cols:"50"}))}}]),n}(r.a.Component)),p=(n(26),n(16)),m=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).md=new p.a,a}return Object(l.a)(n,[{key:"getRawMarkup",value:function(){return{__html:this.md.render(this.props.defaultValue)}}},{key:"render",value:function(){return r.a.createElement("div",{className:"Previewer"},r.a.createElement("p",null,"Previewer"),r.a.createElement("div",{className:"content",id:"preview",dangerouslySetInnerHTML:this.getRawMarkup()}))}}]),n}(r.a.Component),A=n(17),f=n.n(A),v=(n(27),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={input:unescape("%23%20H1%20Title%0A%0A%23%23%20H2%20Title%0A%0A%3Chttp%3A//freecodecamp.org/%3E%0A%0Ainline%20%60code%60%0A%0A%60%60%60%0Afunction%28%29%20%7B%0A%20%20const%20%3D%20%22A%20code%20block%22%3B%0A%7D%0A%60%60%60%0A%0A1.A%20list%20item%0A%0A%3EA%20blockquote%0A%0A%21%5BAlt%20text%5D%28http%3A//tiny.cc/cd0soz%29%0A%0A**Bolded%20text**")},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target.value,n=f.a.sanitize(t);this.setState({input:n})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{onChange:this.handleChange,defaultValue:this.state.input}),r.a.createElement(m,{defaultValue:this.state.input}))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1f539475.chunk.js.map