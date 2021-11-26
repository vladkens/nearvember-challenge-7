var b=Object.defineProperty;var m=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var f=(a,e,r)=>e in a?b(a,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[e]=r,w=(a,e)=>{for(var r in e||(e={}))v.call(e,r)&&f(a,r,e[r]);if(m)for(var r of m(e))N.call(e,r)&&f(a,r,e[r]);return a};import{r as c,b as h,j as g,c as x,a as y,R as C,d as k}from"./vendor.e139cbe9.js";const U=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}};U();function E(){return c.exports.createElement("svg",{viewBox:"0 0 288 288",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},c.exports.createElement("linearGradient",{id:"a",gradientUnits:"userSpaceOnUse",x1:76.81,x2:211.16,y1:211.17,y2:76.81},c.exports.createElement("stop",{offset:.21,stopColor:"#fff"}),c.exports.createElement("stop",{offset:.42,stopColor:"#fff",stopOpacity:0}),c.exports.createElement("stop",{offset:.59,stopColor:"#fff",stopOpacity:0}),c.exports.createElement("stop",{offset:.81,stopColor:"#fff"})),c.exports.createElement("path",{d:"m88.46 216a16.45 16.45 0 0 0 12.46-5.71l112.56-130.57a16.42 16.42 0 0 0 -13.94-7.72 16.46 16.46 0 0 0 -12.41 5.65l-113.13 129.8a16.46 16.46 0 0 0 14.46 8.55z",fill:"url(#a)"}),c.exports.createElement("path",{d:"m88.46 216a16.46 16.46 0 0 0 7.54-1.83v-109l87.45 104.94a16.44 16.44 0 0 0 12.64 5.89h3.45a16.46 16.46 0 0 0 16.46-16.46v-111.08a16.46 16.46 0 0 0 -16.46-16.46 16.36 16.36 0 0 0 -7.54 1.81v109.05l-87.45-104.94a16.44 16.44 0 0 0 -12.64-5.92h-3.45a16.46 16.46 0 0 0 -16.46 16.46v111.08a16.46 16.46 0 0 0 16.46 16.46z",fill:"#fff"}))}const S="development",d="challenge-7.vladkens.testnet";function I(a){switch(a){case"production":case"mainnet":return{networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:d,walletUrl:"https://wallet.near.org",helperUrl:"https://helper.mainnet.near.org",explorerUrl:"https://explorer.mainnet.near.org"};case"development":case"testnet":return{networkId:"testnet",nodeUrl:"https://rpc.testnet.near.org",contractName:d,walletUrl:"https://wallet.testnet.near.org",helperUrl:"https://helper.testnet.near.org",explorerUrl:"https://explorer.testnet.near.org"};case"betanet":return{networkId:"betanet",nodeUrl:"https://rpc.betanet.near.org",contractName:d,walletUrl:"https://wallet.betanet.near.org",helperUrl:"https://helper.betanet.near.org",explorerUrl:"https://explorer.betanet.near.org"};case"local":return{networkId:"local",nodeUrl:"http://localhost:3030",keyPath:`${{}.HOME}/.near/validator_key.json`,walletUrl:"http://localhost:4000/wallet",contractName:d};case"test":case"ci":return{networkId:"shared-test",nodeUrl:"https://rpc.ci-testnet.near.org",contractName:d,masterAccount:"test.near"};case"ci-betanet":return{networkId:"shared-test-staging",nodeUrl:"https://rpc.ci-betanet.near.org",contractName:d,masterAccount:"test.near"};default:throw Error(`Unconfigured environment '${a}'. Can be configured in src/config.js.`)}}const u=I(S);console.log(u);async function L(a=[],e=[]){const r=await h.connect(w({deps:{keyStore:new h.keyStores.BrowserLocalStorageKeyStore}},u)),s=new h.WalletConnection(r,null),o=await new h.Contract(s.account(),u.contractName,{viewMethods:a,changeMethods:e}),n=s.getAccountId();window.walletConnection=s,window.contract=o,window.accountId=n}function _(){window.walletConnection.requestSignIn(u.contractName)}function j(){window.walletConnection.signOut(),window.location.replace(window.location.origin+window.location.pathname)}const t=g.exports.jsx,i=g.exports.jsxs,p={async get_candidates(){const a=await window.contract.get_candidates(),e={};for(let r of a)e[r[0]]=r[1].votes;return e},async vote(a){return window.contract.vote({candidate:a}).then(e=>e,e=>e)},async add_candidate(a){return window.contract.add_candidate({candidate:a}).then(e=>e,e=>e)}},O=()=>t("div",{className:"hero min-h-screen bg-base-200",children:t("div",{className:"text-center hero-content",children:i("div",{className:"max-w-lg",children:[i("h1",{className:"mb-5 text-5xl font-bold",children:["Welcome to",t("br",{}),t("a",{href:"https://twitter.com/hashtag/NEARvember",target:"_blank",className:"text-red-400 rounded px-1 hover:underline",children:"#NEARvember"}),"!"]}),i("p",{className:"mb-5 text-2xl",children:["This is Challenge 8 app.",t("br",{}),"You can suggest & vote for the next US President!"]}),t("button",{className:"btn btn-primary",onClick:_,children:"Get Started"})]})})}),A=({onClick:a})=>{const[e,r]=c.exports.useState(!1),[s,o]=c.exports.useState(""),n=async()=>{r(!0),await a(s),o(""),r(!1)};return t("div",{className:"form-control",children:i("div",{className:"relative",children:[t("input",{type:"text",placeholder:"Add Candidate",className:"w-full pr-16 input input-primary input-bordered",onChange:l=>o(l.target.value),value:s}),t("button",{className:x("absolute top-0 right-0 rounded-l-none btn btn-primary",e?"loading":""),onClick:n,children:"add"})]})})},R=({children:a,onClick:e})=>{const[r,s]=c.exports.useState(!1),o=async()=>{s(!0),await e(),s(!1)};return t("button",{className:x("btn btn-accent btn-sm",r?"loading":""),onClick:o,children:a})},B=()=>{const[a,e]=c.exports.useState({});c.exports.useEffect(()=>{p.get_candidates().then(e)},[]);const r=async n=>{const l=await p.vote(n);console.log(l),p.get_candidates().then(e)},s=async n=>{const l=await p.add_candidate(n);console.log(l),p.get_candidates().then(e)},o=Object.entries(a).map(n=>({name:n[0],votes:n[1]})).sort((n,l)=>l.votes-n.votes);return i("div",{children:[i("div",{className:"navbar mb-2 shadow-lg bg-neutral text-neutral-content flex justify-between items-center text-lg",children:[i("div",{children:[t("div",{className:"w-12 h-12 mr-2",children:t(E,{})}),"Hi,\xA0",t("span",{className:"font-bold",children:window.accountId}),"!"]}),t("div",{className:"",children:t("button",{className:"btn btn-link text-white ml-2",onClick:j,children:"Logout"})})]}),t("div",{className:"flex flex-col justify-center items-center",children:i("div",{className:"w-full max-w-2xl",children:[t("div",{className:"mb-4 w-full",children:t(A,{onClick:s})}),i("table",{className:"table w-full",children:[t("thead",{children:i("tr",{children:[t("th",{}),t("th",{className:"text-center",children:"Candidate"}),t("th",{className:"text-center",children:"Votes"}),t("th",{className:"w-48"})]})}),t("tbody",{children:o.map((n,l)=>i("tr",{children:[t("th",{children:l+1}),t("td",{className:"text-center",children:n.name}),t("td",{className:"text-center",children:n.votes}),t("td",{className:"flex justify-center w-48",children:t(R,{onClick:()=>r(n.name),children:"Vote!"})})]},n.name))})]})]})})]})},M=()=>t(c.exports.Suspense,{fallback:"Loading...",children:window.walletConnection.isSignedIn()?t(B,{}):t(O,{})});window.Buffer=y.Buffer;const P=async()=>{await L(["get_candidates"],["vote","add_candidate"]),C.render(t(k.StrictMode,{children:t(M,{})}),document.getElementById("root"))};P();
