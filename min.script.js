const getCurrentDate=async()=>{const e=await fetch("http://worldtimeapi.org/api/ip");if(e.ok){return await e.json()}return!0};let abcR="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ0123456789-.",abcS="AaGbCcDdEeFZsgHhIijKkLlMmNnOPopQqRrStuvWxYzyB";const getSAbc=(e=1)=>{const t=e%abcS.length;return abcS.slice(t,abcS.length)+abcS.slice(0,t)},decrypt=(e="1",t=1)=>{const r=getSAbc(t);let n="";for(let t=0;t<e.length;t++){const c=r.indexOf(e[t]);if(!abcR[c])return!1;n+=abcR[c]}return n},getNameStr=e=>{const t=e[0],r=Number(e.slice(1,e.length));if(!r)return!1;let n="";for(let e=0;e<r;e++)n+="*";return t+n},fillForm=e=>{const t=document.getElementsByClassName("person-data");if(2!==t.length)return!1;const r=t[0].getElementsByClassName("person-data-wrap");if(0===r.length)return!1;r[0].lastElementChild.innerHTML=e[0];const n=t[1].getElementsByClassName("attrValue");if(3!==n.length)return!1;let c="";for(let t=1;t<4;t++){const r=getNameStr(e[t]);if(!r)return!1;c+=r+" "}c=c.slice(0,c.length-1),n[0].innerHTML=c,n[1].innerHTML=e[4];const l=e[6].split(".");return 2===l.length&&(n[2].innerHTML=`${l[0]}** ***${l[1]}`,!0)},showBody=()=>document.getElementsByTagName("body")[0].style.display="block",redirect=()=>window.location.href="https://www.google.ru/";window.addEventListener("load",async()=>{const e=window.location.search.slice(1);if(!e)return redirect();const t=await getCurrentDate(),{datetime:r}=t;if(!r)return redirect();const n=new Date(r),c=n.getDate(),l=n.getMonth()+1,a=n.getFullYear(),i=decrypt(e,c+l+a);if(!i)return redirect();const o=i.split("-");return 7!==o.length?redirect():"ПЛАТОН"!==o[5]?redirect():fillForm(o)?void showBody():redirect()});