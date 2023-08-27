let totalTextPrice = 0;


function handleClickById(target){
    const selectedItemContainer = document.getElementById('selected-items')
   const textName = target.childNodes[1].childNodes[7].innerText;
   const li = document.createElement('li');
   li.innerText = textName;
   selectedItemContainer.appendChild(li);



// console.log(target.childNodes[1].childNodes[9].innerText.split(" ")[0]);

   const textPrice = target.childNodes[1].childNodes[9].innerText.split(" ")[0];
    totalTextPrice = parseFloat(totalTextPrice) + parseFloat(textPrice);

 

   
    const setTotalPrice = document.getElementById('total-price').innerText = totalTextPrice;

  
    if(setTotalPrice>=200){
      const newApplyButton = document.getElementById('btn-coupon');
      newApplyButton.disabled = false;
      newApplyButton.style.backgroundColor = 'blue';
    }else{
      newApplyButton.disabled = true;
    }
    
      
    
}



