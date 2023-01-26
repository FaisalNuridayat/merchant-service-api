# merchant-sevice-api 

Merchant Service is an application that handles merchant product catalogs and merchant services. 
Merchants can register/create accounts at merchant services. merchant can delete data/delete their accounts in merchant services. 
Merchants can add products to the merchant service, Merchants can delete products in the merchant service,
Merchants can update products in the merchant service, Merchants can get their product listings from merchant services

# The technology used is: :

- visual studio code
- node js
- mysql workbench
- express js
- postman
- sequeilize

# architecture diagram

this is architecture diagram of merchant service

![architecture diagram merchant service 1 jpg](https://user-images.githubusercontent.com/116243607/212590649-1b00c4db-b0cc-4cc9-874c-ab9f8f9ceccb.png)


# An Entity Relational Diagram of the merchant service data model 

this is entity relationship that show relation between merchant and product from merchant service

![entitty diagram merchant dan product](https://user-images.githubusercontent.com/116243607/212041559-035854e6-a2bf-459e-90df-8942825dce3c.jpg)




## RESTful API Endpoints merchant service
RESTful API Endpoints :
| Method | Endpoint | Description | Requirement Parameter	| 
| --- | --- | --- | --- |
| GET | `/merchant` | list of merchants | `empty`
| GET | `/merchant/{id}` | Get a merchant | `empty`
| PUT | `/merchant/{id}` | Update a merchant | body **json**: `{name:string}` 
| DELETE | `/merchant/{id}` | Delete a merchant | `empty`
| POST | `/product` | Add product | body **json**: `{merchant_id:integer, product_name:string, quantity:string, price:string}`
| POST | `/merchant` | Add merchant | body **json**: `{name:string, email:string, password:string, address:string, phone_number:string}`
| GET | `/product` | Get products from a merchant service | `empty`
| GET | `/product/{id}` | Get a list spesific product service | `empty`
| PUT | `/product/{id}` | Update  product from a merchant service | body **json**: `{product_name:string, quantity:string, price:string}` 
| DELETE | `/product/{id}` | Delete a specific product from a merchant service | `empty`
| POST | `/login` | Login merchant service | body **json**: `{email:string, password:string}`

## postman aplication
use postman to using test rest api in here [**Click here**](https://github.com/FaisalNuridayat/merchant-service-api/blob/main/Mini%20Project.postman_collection.json)


## how to use this application, install it on your local computer:

```
$ npm init
$ npm install
$ install express 
```

