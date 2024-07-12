"use strict";(self.webpackChunkurm=self.webpackChunkurm||[]).push([[245],{1245:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=r(3433),s=r(4165),n=r(5861),o=r(4942),i=r(1413),c=r(9439),l=r(2791),d=r(1243),u=r(184);d.Z.defaults.headers.post["Content-Type"]="application/json",d.Z.defaults.withCredentials=!0,d.Z.defaults.crossDomain=!0;var p=function(){var e=(0,l.useState)({role:"student",customOption:""}),t=(0,c.Z)(e,2),r=t[0],p=t[1],h=(0,l.useState)([]),x=(0,c.Z)(h,2),f=x[0],m=x[1],g=(0,l.useState)([]),v=(0,c.Z)(g,2),b=v[0],j=v[1],y=(0,l.useState)(""),k=(0,c.Z)(y,2),C=k[0],Z=k[1],w=(0,l.useState)(!1),_=(0,c.Z)(w,2),S=_[0],A=_[1],I=(0,l.useState)(null),N=(0,c.Z)(I,2),F=N[0],B=N[1],E=(0,l.useState)(null),R=(0,c.Z)(E,2),q=R[0],O=R[1],T=(0,l.useState)([]),D=(0,c.Z)(T,2),W=D[0],z=D[1],G=function(e){var t=e.target,r=t.name,a=t.value;if(p((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,o.Z)({},r,a))})),"customOption"===r){var s=f.find((function(e){return e.name===a}));B(s?s.id:null)}};(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F){e.next=2;break}return e.abrupt("return");case 2:return t={"Content-Type":"application/json"},r={chat_to_user_id:localStorage.getItem("id"),chat_from_user_id:F},e.prev=4,e.next=7,d.Z.post("https://rxk4239.uta.cloud/test_chatto.php",r,{headers:t,withCredentials:!0});case 7:(a=e.sent).data&&"success"===a.data.status&&Array.isArray(a.data.messages)&&(console.log("Previous messages for user ".concat(F,":"),a.data.messages),z(a.data.messages)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.error("Error during the Axios request:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[F]),(0,l.useEffect)((function(){var e=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,a,n;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.role,O(t),a={"Content-Type":"application/json"},e.prev=3,e.next=6,d.Z.post("https://rxk4239.uta.cloud/test_getformdata.php",{role:t},{headers:a,withCredentials:!0});case 6:(n=e.sent).data&&"success"===n.data.status&&Array.isArray(n.data.users)&&m(n.data.users),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Error during the Axios request:",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[r]);var H=function(){var e=(0,n.Z)((0,s.Z)().mark((function e(){var t,r,n,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!F||!C){e.next=24;break}return t={userId:F,message:C},j([].concat((0,a.Z)(b),[t])),e.prev=3,r={chat_from_user_id:localStorage.getItem("id"),chat_to_user_id:F,chat_from_user_role:localStorage.getItem("user"),chat_to_user_role:q,chat_message:C},n={"Content-Type":"application/json"},e.prev=6,e.next=9,d.Z.post("https://rxk4239.uta.cloud/test_chatfrom.php",r,{headers:n,withCredentials:!0});case 9:(o=e.sent).data&&"success"===o.data.status&&Array.isArray(o.data.users)&&m(o.data.users),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.error("Error during the Axios request:",e.t0);case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(3),console.error("Error during the Axios request:",e.t1);case 21:Z(""),e.next=25;break;case 24:console.log("No user selected or no message entered");case 25:case"end":return e.stop()}}),e,null,[[3,18],[6,13]])})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Co-ordinator Chat"}),(0,u.jsxs)("div",{className:"CordMessage",children:[(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),A(!0)},children:[(0,u.jsxs)("div",{className:"select-container",children:[(0,u.jsx)("label",{children:"Role:"}),(0,u.jsxs)("select",{name:"role",value:r.role,onChange:G,children:[(0,u.jsx)("option",{value:"student",children:"Student"}),(0,u.jsx)("option",{value:"admin",children:"Admin"}),(0,u.jsx)("option",{value:"quality-admin",children:"QA Officer"}),(0,u.jsx)("option",{value:"cord",children:"Co-ordinator"}),(0,u.jsx)("option",{value:"faculty",children:"Faculty"})]})]}),(0,u.jsxs)("div",{className:"select-container",children:[(0,u.jsx)("label",{children:"Custom:"}),(0,u.jsxs)("select",{name:"customOption",value:r.customOption,onChange:G,children:[(0,u.jsx)("option",{value:"",children:"Select..."}),f.map((function(e){return(0,u.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]}),(0,u.jsx)("div",{className:"select-container",children:(0,u.jsx)("button",{type:"submit",children:"Start Chat"})})]}),S&&(0,u.jsxs)("div",{className:"chatbot-container",style:{position:"fixed",bottom:"10px",right:"10px",width:"300px",background:"#f9f9f9",boxShadow:"0 0 10px rgba(0, 0, 0, 0.2)",borderRadius:"8px",overflow:"hidden"},children:[(0,u.jsxs)("div",{className:"chat-header",style:{padding:"10px 20px",backgroundColor:"#007BFF",color:"white",display:"flex",justifyContent:"space-between",alignItems:"center"},children:["Chatbot",(0,u.jsx)("button",{onClick:function(){return A(!1)},style:{background:"transparent",border:"none",color:"white",fontSize:"20px",cursor:"pointer"},children:"\xd7"})]}),(0,u.jsxs)("div",{className:"chat-container",style:{maxHeight:"200px",overflowY:"scroll",padding:"10px",borderBottom:"1px solid #ddd"},children:[W.map((function(e,t){var r=localStorage.getItem("id")===e.sender;return(0,u.jsxs)("div",{className:"previous-message",style:{padding:"8px 12px",borderBottom:"1px solid #eee",textAlign:"left",backgroundColor:r?"#007BFF":"white",color:r?"white":"black",borderRadius:"8px",margin:"8px",maxWidth:"70%",float:r?"right":"left",clear:"both"},children:[(0,u.jsxs)("strong",{children:[r?localStorage.getItem("first_name"):q,":"]})," ",e.message]},t)})),b.map((function(e,t){var r=!(localStorage.getItem("id")===e.sender);return(0,u.jsxs)("div",{style:{padding:"8px 12px",borderBottom:"1px solid #eee",textAlign:"left",backgroundColor:r?"#007BFF":"white",color:r?"white":"black",borderRadius:"8px",margin:"8px",maxWidth:"70%",float:r?"right":"left",clear:"both"},children:[(0,u.jsxs)("strong",{children:[r?localStorage.getItem("first_name"):q,":"]})," ",e.message]},t)}))]}),(0,u.jsxs)("div",{className:"chat-input-container",style:{padding:"10px",borderTop:"1px solid #ddd",display:"flex",alignItems:"center"},children:[(0,u.jsx)("input",{type:"text",value:C,onChange:function(e){return Z(e.target.value)},placeholder:"Enter your message...",style:{padding:"10px",flexGrow:"1",marginRight:"10px",borderRadius:"4px",border:"1px solid #ddd"}}),(0,u.jsx)("button",{onClick:H,style:{padding:"10px 15px",backgroundColor:"#007BFF",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Send"})]})]})]})]})}}}]);
//# sourceMappingURL=245.afbe814a.chunk.js.map