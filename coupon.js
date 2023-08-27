

document.getElementById('btn-coupon').addEventListener('click', function(){
    const couponField = document.getElementById('user-coupon');
    const coupon = couponField.value;
   
    if(coupon === 'SELL200'){
       const discountElementPrice = document.getElementById('total-price');
       const discountPriceString = discountElementPrice.innerText;
       const discountPrice = parseFloat(discountPriceString);
         if(discountPrice>=200){
       const setDiscountPrice = discountPrice *(1-.2/1);


       const myDiscount = discountPrice - setDiscountPrice;
 
 
        const setTotalDiscountPrice = document.getElementById('new-price').innerText = setDiscountPrice.toFixed(2);

        const setTotalDiscount = document.getElementById('discount-price').innerText = myDiscount.toFixed(2);
    
    }
       
    }else{
       alert('Please enter valid coupon')
    }
    couponField.value = "";
 })

 const button = document.getElementById('home-reload');
 button.addEventListener('click', function(){
    
    window.location.reload();
 })