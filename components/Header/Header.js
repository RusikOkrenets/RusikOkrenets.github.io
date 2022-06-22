class Header{
    handlerOpenShoppingPage(){
        shoppingPage.render();
    }

    render (count){
        const html=`
        <div class="uder-header-block">
            <div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">  
                <img src="../../images/icon_shoppingcart2.png">
                 ${count}
            </div> 
        </div>
        `;

        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header();

const productsStore = localStorageUtil.getProducts();
headerPage.render(productsStore.length);