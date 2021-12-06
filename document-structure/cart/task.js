const cartProducts = document.querySelector('.cart__products');
const products = document.querySelectorAll('.product');

products.forEach((o) => {
    const dataId = parseInt(o.getAttribute('data-id'), 10);
    const productQuantityValue = o.querySelector('.product__quantity-value');
    o.querySelector('.product__quantity-control_inc').addEventListener('click', (evt) => {
        let value = parseInt(productQuantityValue.innerText, 10);
        value += 1;
        productQuantityValue.innerText = value.toString();
    });
    o.querySelector('.product__quantity-control_dec').addEventListener('click', (evt) => {
        let value = parseInt(productQuantityValue.innerText, 10);
        if (value > 1) {
            value -= 1;
        }
        productQuantityValue.innerText = value.toString();
    });
    o.querySelector('.product__add').addEventListener('click', (evt) => {
        const CartProductItems = cartProducts.querySelectorAll('.cart__product');
        const index = findCartIndex(CartProductItems, dataId);
        if (index === -1) {
            // Продукта нет в корзине, добавляем
            let img = o.querySelector('.product__image').cloneNode();
            img.classList.add('cart__product-image');
            let productCount = document.createElement('div')
            productCount.classList.add('cart__product-count');
            productCount.innerText = productQuantityValue.innerText;
            let item = document.createElement('div');
            item.classList.add('cart__product');
            item.appendChild(img);
            item.appendChild(productCount);
            item.setAttribute('data-id', dataId.toString());
            cartProducts.appendChild(item);           
        } else {
            // Продукт есть в корзине, добавляем количество
            const productInCart = CartProductItems[index];
            const cartValue = productInCart.querySelector('.cart__product-count');
            cartValue.innerText = (parseInt(cartValue.innerText, 10) + 
                parseInt(productQuantityValue.innerText, 10)).toString();
        }
    });
});

// Поиск продукта в корзине по data-id
function findCartIndex(nodeList, id) {
    let index = -1;
    for (let k = 0; k < nodeList.length; k++) {
        if (id == nodeList[k].getAttribute('data-id')) {
            index = k;
        }
    }
    return index;
}