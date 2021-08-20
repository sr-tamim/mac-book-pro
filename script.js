
const subTotalField = document.getElementById('subTotal-price');

document.querySelectorAll('.options').forEach(function (element) {
    element.addEventListener('click', function (event) {
        if (event.target.localName == 'button') {
            this.querySelector('.selected').classList.remove('selected');
            event.target.classList.add('selected');

            updateCost(this.id, event.target.id);
        }
    })
})
function updateCost(product, extraCost) {
    document.getElementById('extra-' + product + '-cost').innerText = extraCost;
    updateSubTotal();
}

function updateSubTotal() {
    const basePrice = 1299;

    let subTotal = basePrice;
    const extraPrices = document.querySelectorAll('.extra-cost');
    for (const value of extraPrices) {
        subTotal += parseFloat(value.innerText);
    }
    subTotalField.innerText = subTotal;
    updateTotal();
}

function updateTotal() {
    const promoField = document.getElementById('promo-input');
    const subTotalAmount = parseFloat(subTotalField.innerText);
    let total;

    if (promoField.value == 'stevekaku') {
        const discount = subTotalAmount * 0.2;
        total = subTotalAmount - discount;
    } else { total = subTotalAmount }

    document.getElementById('total-amount').innerText = total;
    promoField.value = '';
}