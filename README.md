# merchant-sevice-api 

Merchant Service is an application that handles merchant product catalogs and merchant services. 
Merchants can register/create accounts at merchant services. merchant can delete data/delete their accounts in merchant services. 
Merchants can add products to the merchant service, Merchants can delete products in the merchant service,
Merchants can update products in the merchant service, Merchants can get their product listings from merchant services

# teknologi yang digunakan adalah :

- visual studio code
- node js
- mysql workbench
- express js
- postman
- sequeilze

# architecture diagram

this is architecture diagram of merchant service

![architecture diagram merchant service](https://user-images.githubusercontent.com/116243607/212034339-70d991f5-8a61-47e8-908c-176d92341eec.jpg)

# An Entity Relational Diagram of the merchant service data model 

this is entity relationship that show relation between merchant and product from merchant service

![entitty diagram merchant dan product](https://user-images.githubusercontent.com/116243607/212041559-035854e6-a2bf-459e-90df-8942825dce3c.jpg)




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

#how to use this application, install it on your local computer:

```
$ npm init
$ npm install
$ install express
```

