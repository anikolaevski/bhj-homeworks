const status = {
  clicks: 0,
  speed: 0,
  started: null
};

const clickerCounter = document.getElementById('clicker__counter');
const clickerSpeed = document.getElementById('clicker__speed');

document.getElementById('cookie').onclick = function() {
  const currentTime = Date.now();
  status.clicks += 1;
  if (!status.started) {
    status.started = currentTime;
  } else {
    status.speed = status.clicks / (currentTime - status.started) * 1000;
  }
  clickerCounter.textContent = status.clicks.toString();
  clickerSpeed.textContent = (Math.round(status.speed * 100) / 100).toString();
}
