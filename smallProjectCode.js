const selectionListEl = document.querySelector('#select');
const baseDateEl = document.querySelector('#date');
const btnTransform = document.querySelector('.button');
const resultEl = document.querySelector('.result');
console.log(baseDateEl.value);
console.log(selectionListEl.value);

btnTransform.addEventListener('click', function (e) {
  resultEl.style.opacity = 100;
  const newDate = new Date(baseDateEl.value);
  const newIntl = new Intl.DateTimeFormat(selectionListEl.value).format(
    newDate
  );
  resultEl.textContent = newIntl;
});
