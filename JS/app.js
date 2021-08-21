
const memoryCost = document.getElementById('extra-memory-cost')
const storageCost = document.getElementById('extra-storage-cost')
const deliveryCost = document.getElementById('delivery-charge')


function calculateProductCost(btnId,productTotal,cost){
    const btn = document.getElementById(btnId);
    btn.addEventListener('click',function(){
        const previousProductPrice = document.getElementById(productTotal);
        previousProductPrice.innerText = cost
        const previousProductNumber = previousProductPrice.innerText
        calculateTotalCost(cost,previousProductNumber);
    })
    
}
calculateProductCost('16GB-memory-btn','extra-memory-cost',180);
calculateProductCost('8GB-memory-btn','extra-memory-cost',0);
calculateProductCost('512GB-ssd-btn','extra-storage-cost',100);
calculateProductCost('1TB-ssd-btn','extra-storage-cost',180);
calculateProductCost('256GB-ssd-btn','extra-storage-cost',0);
calculateProductCost('free-delivery-btn','delivery-charge',0);
calculateProductCost('charge-delivery-btn','delivery-charge',20);

function calculateTotalCost(productCost,productInnerText){
    const total = document.getElementById('total-price');
    const mainPrice = document.getElementById('best-price');
    const finalTotal = document.getElementById('final-total')
    const extraMemoryCost  = Number(memoryCost.innerText);
    const extraStorageCost = Number(storageCost.innerText)
    const extraDeliveryCost = Number(deliveryCost.innerText) 
    const mainPriceTotal = Number(mainPrice.innerText) 
    const grandTotal = mainPriceTotal+extraMemoryCost + extraStorageCost + extraDeliveryCost;
    total.innerText = grandTotal;
    finalTotal.innerText = grandTotal;

}
    const promoInput = document.getElementById('promo-input')
    const promoBtn = document.getElementById('promo-btn');
        promoBtn.addEventListener('click',function(){
            if(promoInput.value = 'stevekaku'){
                const finalTotal = document.getElementById('final-total')
                const finalTotalNumber = parseFloat(finalTotal.innerText);
                finalTotal.innerText = (finalTotalNumber * 80) / 100;
                promoInput.value = '';
            }
        })
    
