const colorMode = [
  ["#000000","#f0f0f0","#f2f8ff80","#0298c940","#ffffff","#191919","#c3c9cf","#0050f0"],
  ["#ffffff","#202020","#40404040","#00000045","#50505020","#ffffff","#101010","#00beff"]
]

window.onload = () => {
  const el = document.getElementById("darkmode-icon");
  const darkmode_icon = document.getElementById("di-inner");
  const root = document.querySelector(':root');

  let flag = +getCookie("darkmode") || 0;
  toggleDarkMode(flag);

  el.onclick=()=>{
    flag = flag?0:1;
    toggleDarkMode(flag);
    setCookie("darkmode", flag);
  }

  function toggleDarkMode(flag){
    darkmode_icon.innerText=["light_mode","dark_mode"][+flag];
    root.style.setProperty("--bg",`url("../res/Animated Shape${+flag}.svg")`);
    for (let i=0; i<=7; i++){
      root.style.setProperty(`--col${i}`,colorMode[+flag][i]);
    }
  }
}

function setCookie(key, value) {
  document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}; path=/`;
}
function getCookie(name) {
  const key = encodeURIComponent(name) + "=";
  let cookies = document.cookie.split(";");
  const cookie = cookies.find(cookie =>cookie.trim().startsWith(key))
  return cookie?.split("=")?.[1];
}

