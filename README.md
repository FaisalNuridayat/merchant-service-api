# merchant-sevice-api 

Merchant Service is an application that handles merchant product catalogs and merchant services. 
Merchants can register/create accounts at merchant services. merchant can delete data/delete their accounts in merchant services. 
Merchants can add products to the merchant service, Merchants can delete products in the merchant service,
Merchants can update products in the merchant service, Merchants can get their product listings from merchant services





## RESTful API Endpoints merchant service
RESTful API Endpoints :
| Method | Endpoint | Description |
| --- | --- | --- |
| GET | `/merchant` | list of merchants |
| GET | `/merchant/{id}` | Get a merchant |
| PUT | `/merchant/{id}` | Update a merchant |
| DELETE | `/merchant/id` | Delete a merchant |
| POST | `/product` | Add product |
| GET | `/product` | Get products from a merchant service |
| GET | `/product/{id}` | Get a list spesific product service |
| PUT | `/product/{id}` | Update  product from a merchant service |
| DELETE | `/product/{id}` | Delete a specific product from a merchant service |
| POST | `/login` | Login merchant service |
