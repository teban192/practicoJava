package com.wannacode.productmicroservice.feignclients;

import com.wannacode.productmicroservice.entity.ProductPEntity;
import com.wannacode.productmicroservice.model.Product;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@FeignClient(name= "productprice-microservice", url = "http://localhost:8080/api/productsprice")
//@RequestMapping(value="/api/productsprice")
public interface ProductFeingClient {

    @GetMapping(value="/{productName}")
    public ProductPEntity getAllProducts(@PathVariable("productName") String productName);
}
