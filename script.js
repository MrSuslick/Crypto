// COUNTDOWN
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 10);

function updateCountdown(){
  const now = new Date();
  const diff = targetDate - now;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff / (1000*60*60)) % 24);
  const minutes = Math.floor((diff / (1000*60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}
setInterval(updateCountdown,1000);

// CHART
const ctx = document.getElementById('tokenChart');
new Chart(ctx,{
  type:'line',
  data:{
    labels:['Day 1','Day 5','Day 10','Day 15','Day 20','Day 25'],
    datasets:[{
      label:'Token Price ($)',
      data:[0.05,0.08,0.12,0.20,0.35,0.60],
      borderColor:'#9d4edd',
      backgroundColor:'rgba(157,78,221,0.2)',
      tension:0.4,
      fill:true
    }]
  },
  options:{
    plugins:{legend:{labels:{color:'white'}}},
    scales:{
      x:{ticks:{color:'white'}},
      y:{ticks:{color:'white'}}
    }
  }
});

// PARTICLES
const canvas = document.getElementById("particles");
const ctx2 = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];
for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    radius:Math.random()*2,
    dx:(Math.random()-0.5),
    dy:(Math.random()-0.5)
  });
}

function animate(){
  ctx2.clearRect(0,0,canvas.width,canvas.height);
  ctx2.fillStyle="#9d4edd";
  particles.forEach(p=>{
    ctx2.beginPath();
    ctx2.arc(p.x,p.y,p.radius,0,Math.PI*2);
    ctx2.fill();
    p.x+=p.dx;
    p.y+=p.dy;
  });
  requestAnimationFrame(animate);
}
animate();
