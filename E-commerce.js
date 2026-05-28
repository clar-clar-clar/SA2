function showPage(num) {
    document.querySelectorAll('.page')
    .forEach(page => page.classList.remove('active'));

    document.getElementById('page' + num)
    .classList.add('active');
}

function buyAlert() {
  alert("Thank you for your purchase!");
}

function selectAlert() {
  alert("Cookie added to cart!");
}