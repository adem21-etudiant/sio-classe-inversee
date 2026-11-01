function go(p){ location.hash = p; }
function check(){ document.getElementById('err').textContent = 'E-mail invalide'; }
let dragged;
document.querySelectorAll('#prefs li').forEach(li => {
  li.addEventListener('dragstart', () => dragged = li);
  li.addEventListener('dragover', e => e.preventDefault());
  li.addEventListener('drop', () => li.before(dragged));
});