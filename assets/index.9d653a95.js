import{a as e,s as t,r as n,R as r,b as a}from"./vendor.d2736b2f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const o=t.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
  align-items: center;
`,i=t.p`
  margin-top: 0.5em;
  text-align: center;
  font-size: ${e=>e.size};
  color: ${e=>e.dark?"#34495e":"#ecf0f1"};
`,s=t.input`
  margin-top: 2em;
  font-size: 2em;
  color: #34495e;
  width: 90%;
  padding: 0.5em 1em;
  background-color: #ecf0f1;
  border: 0;
  border-radius: 0.5em;
  &:focus {
    outline: none;
  }
  @media (${"min-width: 768px"}) {
    width: 50%;
  }
`,c=t.p`
  margin-top: 1em;
  text-align: center;
  color: #ecf0f1;
  font-size: 2em;
`,l=t.div`
  position: relative;
  padding: 1em 2em;
  margin-top: 2em;
`,m=t.div`
  position: absolute;
  top: 0.3em;
  bottom: 0;
  left: 70%;
`,d=t.div`
  text-align: center;
`;function u(){const[t,a]=n.exports.useState(""),[u,p]=n.exports.useState({});return r.createElement(r.Fragment,null,r.createElement(o,null,r.createElement(i,{size:"3em"},"Monitor Cuaca ☁️ Terkini"),r.createElement(i,{size:"1.5em"},"Made with ❤️ by ",r.createElement("a",{href:"https://github.com/hachi-nico"},"nico")),r.createElement(s,{type:"text",placeholder:"Masukkan nama kota anda",value:t,onChange:e=>a(e.target.value),onKeyPress:async n=>{if("Enter"===n.key){const n=await(async t=>{try{return(await e.get("https://api.openweathermap.org/data/2.5/weather",{params:{q:t,units:"metric",APPID:"f33a484cf794d08d0148764789aaba32"}})).data}catch(n){return n.response.status}})(t);400===n?p({status:"empty"}):404===n?p({status:"not found"}):(p(n),a(""))}},autoFocus:!0}),"empty"===u.status&&r.createElement(c,null,"Form input masih kosong !!!"),"not found"===u.status&&r.createElement(c,null,"Kota yang dicari tidak ada !!!"),u.sys&&r.createElement(l,null,r.createElement(i,{size:"2em"},u.name),r.createElement(m,null,r.createElement("img",{src:`https://www.countryflags.io/${u.sys.country}/flat/32.png`,alt:"country"})),r.createElement(i,{size:"4em"},`${Math.round(u.main.temp)}`,"° C"),r.createElement(d,null,r.createElement("img",{src:`https://openweathermap.org/img/wn/${u.weather[0].icon}@2x.png`,alt:"weather description"})),r.createElement(i,{size:"1em"},u.weather[0].description))))}a.render(r.createElement(r.StrictMode,null,r.createElement(u,null)),document.getElementById("root"));
