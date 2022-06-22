class Products {
    constructor(){
        this.classNameActive = 'b-blue';
        this.labelAdd = 'Додати в кошик';
        this.labelRemove= 'Вилучити з кошика';
    }
    handleSetLocationStorage(element, id){
        const { pushProduct, products} = localStorageUtil.putProducts(id);
        
        if(pushProduct){
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }
        else{
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }

    render(){
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({id, name, img, number, price, category})=>{
            
            let activeClass = '';
            let activeText = '';

            if(productsStore.indexOf(id) === -1){   
                activeText = this.labelAdd;
            } else{
                activeClass = ' '+ this.classNameActive ;
                activeText = this.labelRemove;
            }
                

            
            
            htmlCatalog += `
                <div class="products-element"><a href="../../html/productPage.html">
                    <span class="products-element__name">${name}</span><br>
                    <span class="products-element__number">${number}</span>
                    <img class="products-element__img" src="${img}">
                    <span class="products-element__price">${price} грн</span></a>
                    <button class="button2 b-red rot-135 ${activeClass} " onclick="productsPage.handleSetLocationStorage(this, '${id}');">
                    ${activeText}
                    </button>
                    <span class="item-status"> ✔️ В наявності</span>
                </div>            
            `;
        });
        const html  = `
        <div class="products-container">
        ${htmlCatalog}
        </div>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
const productsPage = new Products();
productsPage.render();