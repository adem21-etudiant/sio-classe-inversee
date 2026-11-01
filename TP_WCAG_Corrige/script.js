const email = document.getElementById('email');
document.getElementById('resa').addEventListener('submit', e => {
  e.preventDefault();
  const err = document.getElementById('err');
  if (!email.validity.valid || !email.value) {
    email.setAttribute('aria-invalid','true');
    err.textContent = 'Adresse e-mail invalide : saisissez une adresse du type nom@exemple.fr';
    email.focus();
  } else { email.removeAttribute('aria-invalid'); err.textContent = ''; }
});
const same = document.getElementById('same'), shipping = document.getElementById('shipping');
same.addEventListener('change', () => { shipping.hidden = same.checked; });
shipping.hidden = same.checked;
document.getElementById('prefs').addEventListener('click', e => {
  const b = e.target.closest('button[data-dir]'); if (!b) return;
  const li = b.closest('li'), d = Number(b.dataset.dir);
  const t = d < 0 ? li.previousElementSibling : li.nextElementSibling; if (!t) return;
  d < 0 ? t.before(li) : t.after(li); b.focus();
});