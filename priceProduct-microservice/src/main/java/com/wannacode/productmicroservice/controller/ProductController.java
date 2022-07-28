package com.wannacode.productmicroservice.controller;


import com.wannacode.productmicroservice.entity.ProductEntity;
import com.wannacode.productmicroservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/productsprice")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @GetMapping(value="/{productName}")
    @ResponseStatus(HttpStatus.OK)
    public ProductEntity getAllProducts(@PathVariable("productName") String productName){

        var repositorio = productRepository.findAll();
        ProductEntity resultado = new ProductEntity();


        for (ProductEntity repo:repositorio
        ) {

            if (repo.getProductName().equals(productName)){

                resultado =  repo;
                //  PricesService priceFinal = new PricesService();
                // priceFinal.Precio(productName).getUnitPrice();

            }
        }
        return resultado;
    }



/*
    @GetMapping(value="/{productName}")
    @ResponseStatus(HttpStatus.OK)


    public ProductEntity getPrice(@PathVariable("productName") String productName){

        var repositorio = productRepository.findAll();
        ProductEntity resultado = null;


        for (ProductEntity repo:repositorio
        ) {

            if (repo.getProductName().equals(productName)){

                resultado =  repo;
            }
        }
        return resultado;
    }

*/


    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void CreateProduct(@RequestBody ProductEntity ProductEntity)
    {
        productRepository.save(ProductEntity);
    }
}
