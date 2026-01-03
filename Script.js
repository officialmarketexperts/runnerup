let theme = "dark";

function toggleTheme(){
  document.body.className = theme==="dark"?"gold":"dark";
  theme = theme==="dark"?"gold":"dark";
}

function animate(id, end){
  let val = 0;
  let el = document.getElementById(id);
  let int = setInterval(()=>{
    val++;
    el.innerText = val;
    if(val>=end) clearInterval(int);
  },20);
}

animate("campaigns", 32);
animate("clicks", 1280);
animate("revenue", 540);

new Chart(document.getElementById("adsChart"),{
  type:"line",
  data:{
    labels:["Mon","Tue","Wed","Thu","Fri"],
    datasets:[{
      label:"Revenue",
      data:[120,300,250,480,700],
      borderColor:"gold"
    }]
  }
});
