### API PATH

##### Product
    - post Method --> localhost:888/api/prodcut/add-product | required - productName(String) -productDescription(String) -ProdcutPrice(Number)
    - post Method --> localhost:888/api/product/edit-product | required -ProductId(String) 
    - get Method --> localhost:888/api/prodcut/get-products | required nothing

##### Order
    - get Method --> localhost:888/api/order/get-orders | required nothing
    - Post Method --> localhost:888/api/order/add-order | required - customerName(String) -customerPhone(String) -customerAddress(String) -shippingMethod(String) -ProductId(String) -file(image/png or image           /jpeg)

    
