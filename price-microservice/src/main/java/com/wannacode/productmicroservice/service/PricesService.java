package com.wannacode.productmicroservice.service;

import com.wannacode.productmicroservice.entity.ProductPEntity;
import com.wannacode.productmicroservice.feignclients.ProductFeingClient;
import com.wannacode.productmicroservice.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PricesService {

    @Autowired
    ProductFeingClient productFeingClient;
    public ProductPEntity Precio(String nombreProducto){


      // productEntity.productName =
      // productEntity.unitPrice = productFeingClient.getAllProducts(nombreProducto).getUnitPrice();
       //return productEntity;
        return productFeingClient.getAllProducts(nombreProducto);
    }
}
