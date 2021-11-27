var N=Object.defineProperty,y=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(n,t,a)=>t in n?N(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,w=(n,t)=>{for(var a in t||(t={}))k.call(t,a)&&b(n,a,t[a]);if(g)for(var a of g(t))E.call(t,a)&&b(n,a,t[a]);return n},x=(n,t)=>y(n,C(t));import{r as l,b as h,p as U,t as S,j as e,P as I,a as i,u as A,B as L,c as v,d as O,R as _,e as j}from"./vendor.3257a139.js";const B=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(r){if(r.ep)return;r.ep=!0;const s=a(r);fetch(r.href,s)}};B();function M(){return l.exports.createElement("svg",{viewBox:"0 0 288 288",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},l.exports.createElement("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:76.81,x2:211.16,y1:211.17,y2:76.81},l.exports.createElement("stop",{offset:.21,stopColor:"#fff"}),l.exports.createElement("stop",{offset:.42,stopColor:"#fff",stopOpacity:0}),l.exports.createElement("stop",{offset:.59,stopColor:"#fff",stopOpacity:0}),l.exports.createElement("stop",{offset:.81,stopColor:"#fff"})),l.exports.createElement("path",{d:"m88.46 216a16.45 16.45 0 0 0 12.46-5.71l112.56-130.57a16.42 16.42 0 0 0 -13.94-7.72 16.46 16.46 0 0 0 -12.41 5.65l-113.13 129.8a16.46 16.46 0 0 0 14.46 8.55z",fill:"url(#a)"}),l.exports.createElement("path",{d:"m88.46 216a16.46 16.46 0 0 0 7.54-1.83v-109l87.45 104.94a16.44 16.44 0 0 0 12.64 5.89h3.45a16.46 16.46 0 0 0 16.46-16.46v-111.08a16.46 16.46 0 0 0 -16.46-16.46 16.36 16.36 0 0 0 -7.54 1.81v109.05l-87.45-104.94a16.44 16.44 0 0 0 -12.64-5.92h-3.45a16.46 16.46 0 0 0 -16.46 16.46v111.08a16.46 16.46 0 0 0 16.46 16.46z",fill:"#fff"}))}const R="development",d="challenge-7.vladkens.testnet";function P(n){switch(n){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:d,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:`${{}.HOME}/.near/validator_key.json`,walletUrl:"http://localhost:4000/wallet",contractName:d};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:d,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:d,masterAccount:"test.near"};default:throw Error(`Unconfigured environment '${n}'. Can be configured in src/config.js.`)}}const m=P(R);console.log(m);async function T(n=[],t=[]){const a=await h.connect(w({deps:{keyStore:new h.keyStores.BrowserLocalStorageKeyStore}},m)),c=new h.WalletConnection(a,null),r=await new h.Contract(c.account(),m.contractName,{viewMethods:n,changeMethods:t}),s=c.getAccountId();window.walletConnection=c,window.contract=r,window.accountId=s}function V(){window.walletConnection.requestSignIn(m.contractName)}function $(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}const p={async get_candidates(){const n=await window.contract.get_candidates(),t={};for(let a of n)t[a[0]]=a[1].votes;return t},async vote(n){return window.contract.vote({candidate:n}).then(t=>!0,t=>!1)},async add_candidate(n){return window.contract.add_candidate({candidate:n}).then(t=>!0,t=>!1)}},W=()=>e("div",{className:"hero min-h-screen bg-base-200",children:e("div",{className:"text-center hero-content",children:i("div",{className:"max-w-lg",children:[i("h1",{className:"mb-5 text-5xl font-bold",children:["Welcome to",e("br",{}),e("a",{href:"https://twitter.com/hashtag/NEARvember",target:"_blank",className:"text-red-400 rounded px-1 hover:underline",children:"#NEARvember"}),"!"]}),i("p",{className:"mb-5 text-2xl",children:["This is Challenge 8 app.",e("br",{}),"You can suggest & vote for the next US President!"]}),e("button",{className:"btn btn-primary",onClick:V,children:"Get Started"})]})})}),q=({onClick:n})=>{const[t,a]=l.exports.useState(!1),[c,r]=l.exports.useState(""),s=async()=>{const o=c.trim();o.length!==0&&(a(!0),await n(o),r(""),a(!1))};return e("div",{className:"form-control",children:i("div",{className:"relative",children:[e("input",{type:"text",placeholder:"Add Candidate",className:"w-full pr-16 input input-primary input-bordered",onChange:o=>r(o.target.value),value:c}),e("button",{className:v("absolute top-0 right-0 rounded-l-none btn btn-primary",t?"loading":""),onClick:s,children:"add"})]})})},z=({children:n,onClick:t})=>{const[a,c]=l.exports.useState(!1),r=async()=>{c(!0),await t(),c(!1)};return e("button",{className:v("btn btn-accent btn-sm",a?"loading":""),onClick:r,children:n})},D=()=>{const[n,t]=l.exports.useState({}),a=A();l.exports.useEffect(()=>{p.get_candidates().then(t)},[]);const c=async o=>{if(!await p.vote(o)){a.show(`You already voted for ${o}!`);return}const f=await p.get_candidates();t(f)},r=async o=>{if(!await p.add_candidate(o)){a.show(`Candidate "${o}" already in elections list!`);return}const f=await p.get_candidates();t(f)},s=Object.entries(n).map(o=>({name:o[0],votes:o[1]})).sort((o,u)=>u.votes-o.votes);return i("div",{children:[i("div",{className:"navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between items-center text-lg",children:[i("div",{children:[e("div",{className:"w-12 h-12 mr-2",children:e(M,{})}),"Hi,\xA0",e("span",{className:"font-bold",children:window.accountId}),"!"]}),e("div",{className:"",children:e("button",{className:"btn btn-link text-white ml-2",onClick:$,children:"Logout"})})]}),e("div",{className:"flex flex-col justify-center items-center",children:i("div",{className:"w-full max-w-2xl",children:[e("div",{className:"mb-4 w-full",children:e(q,{onClick:r})}),i("table",{className:"table w-full",children:[e("thead",{children:i("tr",{children:[e("th",{}),e("th",{className:"text-center",children:"Candidate"}),e("th",{className:"text-center",children:"Votes"}),e("th",{className:"w-48"})]})}),e("tbody",{children:s.map((o,u)=>i("tr",{children:[e("th",{children:u+1}),e("td",{className:"text-center",children:o.name}),e("td",{className:"text-center",children:o.votes}),e("td",{className:"flex justify-center w-48",children:e(z,{onClick:()=>c(o.name),children:"Vote!"})})]},o.name))})]})]})})]})},G=({style:n,message:t,close:a})=>i("div",{className:"alert alert-error justify-start",style:n,children:[e(L,{className:"w-6 mr-2"}),e("label",{children:t})]}),H=()=>{const n={position:U.BOTTOM_CENTER,timeout:4e3,transition:S.SCALE};return e(I,x(w({template:G},n),{children:e(l.exports.Suspense,{fallback:"Loading...",children:window.walletConnection.isSignedIn()?e(D,{}):e(W,{})})}))};window.Buffer=O.Buffer;const K=async()=>{await T(["get_candidates"],["vote","add_candidate"]),_.render(e(j.StrictMode,{children:e(H,{})}),document.getElementById("root"))};K();