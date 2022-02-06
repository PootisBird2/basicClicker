const buttonElement = document.getElementById('secret-button');
const moneyText = document.getElementById('moneyDisplay');
let money = 0;

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
      domElement.style.display = 'block';
    } else {
      domElement.style.display = 'none';
    }
}
 
buttonElement.addEventListener('click', () => {
  money++;
  moneyText.textContent = money;
});