// change background color of selected button
const allOptions = document.querySelectorAll('.option');
for (const option of allOptions) {
    option.addEventListener('click', function () {
        // remove class from other selected element
        option.parentNode.querySelector('.selected').classList.remove('selected');
        // add class to the clicked element
        option.classList.add('selected');
    });
}

// update prices in price table
function updateCost(product, extraCost) {
    document.getElementById(product + '-cost').innerText = extraCost;
    updateSubTotal();
}

// calculate total price of selected products
function updateSubTotal() {
    const basePrice = 1299;
    let subTotal = basePrice;
    const extraPrices = document.querySelectorAll('.extra-cost');
    for (const value of extraPrices) {
        subTotal += parseFloat(value.innerText);
    }
    document.getElementById('subTotal-price').innerText = subTotal;
    updateTotal();
}

// update total cost by checking promo code
function updateTotal() {
    const promoField = document.getElementById('promo-input');
    const subTotalAmount = document.getElementById('subTotal-price').innerText;

    let total;
    if (promoField.value == 'stevekaku') {
        const discount = subTotalAmount * 0.2;
        total = subTotalAmount - discount;
    } else { total = subTotalAmount }
    document.getElementById('total-amount').innerText = total;
    promoField.value = '';
}