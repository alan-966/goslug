let abcR="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789-.",abcS="AaGbCcDdEeFZsgHhIijKkLlMmNnOPopQqRrStuvWxYzyB";const getSAbc=(e=1)=>{const t=e%abcS.length;return abcS.slice(t,abcS.length)+abcS.slice(0,t)},decrypt=(e="1",t=1)=>{const n=getSAbc(t);let r="";for(let t=0;t<e.length;t++){const l=n.indexOf(e[t]);if(!abcR[l])return!1;r+=abcR[l]}return r},getNameStr=e=>{const t=e[0],n=Number(e.slice(1,e.length));if(!n)return!1;let r="";for(let e=0;e<n;e++)r+="*";return t+r},fillForm=e=>{const t=document.getElementsByClassName("person-data");if(2!==t.length)return!1;const n=t[0].getElementsByClassName("person-data-wrap");if(0===n.length)return!1;n[0].lastElementChild.innerHTML=e[0];const r=t[1].getElementsByClassName("attrValue");if(3!==r.length)return!1;let l="";for(let t=1;t<4;t++){const n=getNameStr(e[t]);if(!n)return!1;l+=n+" "}l=l.slice(0,l.length-1),r[0].innerHTML=l,r[1].innerHTML=e[4];const c=e[6].split(".");return 2===c.length&&(r[2].innerHTML=`${c[0]}** ***${c[1]}`,!0)},showBody=()=>document.getElementsByTagName("body")[0].style.display="block",redirect=()=>window.location.href="https://www.google.ru/";window.addEventListener("load",async()=>{const e=window.location.search.slice(1);if(!e)return redirect();const t=new Date,n=t.getDate(),r=t.getMonth()+1,l=t.getFullYear(),c=decrypt(e,n+r+l);if(!c)return redirect();const s=c.split("-");return 7!==s.length?redirect():"ПЛАТОН"!==s[5]?redirect():fillForm(s)?void showBody():redirect()});