(function(){
  function pad(n){return String(n).padStart(2,'0');}
  const elClock = document.querySelector('[data-clock]');
  const elDate  = document.querySelector('[data-date]');
  if(!elClock || !elDate) return;

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function tick(){
    const d = new Date();
    elClock.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
    elDate.textContent  = `${days[d.getDay()]} ${months[d.getMonth()]} ${d.getDate()} ${d.getFullYear()}`;
  }
  tick();
  setInterval(tick, 1000);
})();