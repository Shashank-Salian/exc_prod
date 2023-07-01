import{h as p,o as s,E as C,I as N,a as E,b as w,i as V,c as I,r as b,B as U}from"./utils-f1dc011d.js";const D="_container_g6mgu_1",k="_heading_g6mgu_21",R="_loginText_g6mgu_29",q="_msgField_g6mgu_37",O="_submitBtn_g6mgu_65",j="_switchContainer_g6mgu_73",z="_switchBtn_g6mgu_81",c={container:D,heading:k,loginText:R,msgField:q,submitBtn:O,switchContainer:j,switchBtn:z},A=H=>{const o=[{id:"signupName",type:"text",isValid:()=>o[0].value.length>=2,value:"",placeholder:"Name"},{id:"signupEmail",type:"email",isValid:()=>V(o[1].value),value:"",placeholder:"Email"},{id:"signupUsername",type:"text",isValid:()=>I(o[2].value),value:"",placeholder:"Username"},{id:"signupPassword",type:"password",isValid:()=>o[3].value.length>=8,value:"",placeholder:"Password"},{id:"signupConfirmPassword",type:"password",isValid:()=>o[4].value===o[3].value,value:"",placeholder:"Confirm password"}],g=[{id:"loginUsername",type:"text",isValid:()=>V(g[0].value)||I(g[0].value),value:"",placeholder:"Username or Email"},{id:"loginPassword",type:"password",isValid:()=>g[1].value.length>=8,value:"",placeholder:"Password"}],[l,v]=p(!1),[B,u]=p(!1),[d,y]=p(o),[m,_]=p(g),[f,r]=p({message:"",type:"normal"}),F=(e,a)=>{console.log(a),y(n=>{const i=[...n];return i[a].value=e.currentTarget.value,i})},P=(e,a)=>{_(n=>{const i=[...n];return i[a].value=e.currentTarget.value,i}),console.log(m[a].value)},L=async(e,a,n,i)=>{console.log(e,a,n,i);const t=new FormData;t.append("fullName",e),t.append("email",a),t.append("userName",n),t.append("password",i);try{const h=await(await b("/api/users/signup/",t,"POST")).json();if(console.log(h),h.ok){r({message:h.message,type:"success"}),v(!1),y(o),_(g);return}r({message:h.message,type:"error"})}catch(S){r({message:"Something went wrong",type:"error"}),console.log(S)}},T=async(e,a)=>{try{const n=new FormData;n.append("userName",e),n.append("password",a);const t=await(await b("/api/users/login/",n,"POST")).json();if(console.log(t),t.ok){r({message:t.message,type:"success"}),location.pathname="/";return}r({message:t.message,type:"error"})}catch(n){r({message:"Something went wrong",type:"error"}),console.log(n)}},$=async e=>{if(e.preventDefault(),e.stopImmediatePropagation(),l&&d.every(a=>a.isValid())){u(!0),await L(d[0].value,d[1].value,d[2].value,d[3].value).catch(()=>{}),u(!1);return}if(m.every(a=>a.isValid())){u(!0),await T(m[0].value,m[1].value).catch(()=>{}),u(!1);return}r({message:"Entered data is not valid",type:"error"})},x=()=>{r({message:"",type:"normal"}),v(e=>!e)};return s("div",{className:`drop-shadow ${c.container}`,children:[s("div",{className:c.heading,children:[s("p",{className:c.loginText,children:l?"Sign up to":"Log in to"}),s(C,{width:"120",color:"var(--white)"})]}),s("form",{action:`/api/users/${l?"signup":"login"}`,method:"POST",onSubmit:$,children:[s("div",{className:"mt-40",children:l?d.map((e,a)=>s(N,{id:e.id,type:e.type,placeholder:e.placeholder,name:`form-${e.id}`,required:!0,value:e.value,onInput:n=>F(n,a),isValid:e.isValid(),className:"mt-30 fw",whiteLbl:!0},a)):s(E,{children:[m.map((e,a)=>s(N,{id:e.id,name:`form-${e.id}`,type:e.type,placeholder:e.placeholder,value:e.value,required:!0,onInput:n=>P(n,a),isValid:e.isValid(),className:"mt-30 fw",whiteLbl:!0},a)),s(w,{className:"mt-10",color:"transp",type:"button",children:"Forgot password ?"})]})}),s("p",{className:`mt-20 mb-20 ${c.msgField}`,"data-type":f.type,children:f.message}),s(w,{className:`mb-30 ${c.submitBtn}`,size:"large",color:"orange",type:"submit",loading:B,children:l?"Sign up":"Log in"}),s("div",{className:c.switchContainer,children:[l?"Already have an account ?":"New here ?",s(w,{className:`${c.switchBtn}`,color:"transp",type:"button",onClick:x,children:l?"Log In":"Sign Up"})]})]})]})},M="_container_2nmez_1",W={container:M},G=()=>s("div",{className:W.container,children:s(A,{})});U(s(G,{}),document.getElementById("root"));