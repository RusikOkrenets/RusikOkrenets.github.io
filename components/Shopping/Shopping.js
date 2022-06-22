
class Shopping{

    render(){
        const productsStore = localStorageUtil.getProducts();
       
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, number, price})=>{
            if(productsStore.indexOf(id)!== -1){
                let amount = 10;
                let cost = amount * price;
                
                htmlCatalog += `
                <tr>
                    <td><img class="shopping-container__img" src="${img}"></td>
                    <td class="shopping-container__name">${name}</td>
                    <td>${price} грн</td>
                    <td>
                    <div class="counter-conteiner">
                    <button class="cart-counter opt-min" data-item="${id}">-</button>
                    <div class="cart-counter" data-item="noth">${amount}</div>
                    <button class="cart-counter opt-ad" data-item="${id}">+</div></button>
                    </td>
                    <td>${cost} грн</td> 
                    <td> <button class="btn-delete"><img class="btn-w" src="../../images/icon_delete.png"</button>
                    </td>
                   
                </tr>
                `;
            }
            $('.opt-min').on('click', minusUltra);
            
            $('.opt-ad').on('click', plusUltra);


            function plusUltra(){
                var article = $(this).attr('data-item');
                let oldamount = 10;
                let amount = oldamount+10;
                
            }
            
            function minusUltra(){
                var article = $(this).attr('data-item');
                let oldamount = 10;
                let amount = oldamount-10;
                
            }

        });

      

        const html=`
        <div class="shopping-container">
            <table>
            <tr>
            <td>Фото</td>
            <td>Назва</td>
            <td>Ціна</td>            
            <td>Кількість</td>
            <td>Сума</td>
            <td>
           </td>
            <tr>
                ${htmlCatalog}
                </table>

       
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
    
}
const shoppingPage = new Shopping();

shoppingPage.render();


function alerted(){
  alert("Вы нажали на кнопку");
}