// storing all global variable
const memoryCost = document.getElementById('extra-memory-cost')
const storageCost = document.getElementById('extra-storage-cost')
const deliveryCost = document.getElementById('delivery-charge')

const promoInput = document.getElementById('promo-input')
const promoBtn = document.getElementById('promo-btn');
const finalTotal = document.getElementById('final-total');
//calculate product price
function calculateProductCost(btnId,productTotal,cost){
    const btn = document.getElementById(btnId);
    btn.addEventListener('click',function(){
        const previousProductPrice = document.getElementById(productTotal);
        previousProductPrice.innerText = cost
        const previousProductNumber = previousProductPrice.innerText
        calculateTotalCost(cost,previousProductNumber);
    })  
}
//calling function with valid parameter
calculateProductCost('16GB-memory-btn','extra-memory-cost',180);
calculateProductCost('8GB-memory-btn','extra-memory-cost',0);
calculateProductCost('512GB-ssd-btn','extra-storage-cost',100);
calculateProductCost('1TB-ssd-btn','extra-storage-cost',180);
calculateProductCost('256GB-ssd-btn','extra-storage-cost',0);
calculateProductCost('free-delivery-btn','delivery-charge',0);
calculateProductCost('charge-delivery-btn','delivery-charge',20);
//for calculating total price
function calculateTotalCost(){
    const total = document.getElementById('total-price');
    const mainPrice = document.getElementById('best-price');
    const extraMemoryCost  = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliveryCost = Number(deliveryCost.innerText) 
    const mainPriceTotal = Number(mainPrice.innerText) 
    const grandTotal = mainPriceTotal+extraMemoryCost + extraStorageCost + extraDeliveryCost;
    total.innerText = grandTotal;
    finalTotal.innerText = grandTotal;
    const totalCost = Number(total.innerText)
    return totalCost;
}
//for cupon code
promoBtn.addEventListener('click',function(){
        if(promoInput.value == 'stevekaku'){
        const totalPrice = calculateTotalCost();
        console.log(totalPrice)
        const promoCalculation = totalPrice - (totalPrice *20) / 100 
        finalTotal.innerText = promoCalculation;
    }
    promoInput.value = '';
});    