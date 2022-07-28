package com.wannacode.productmicroservice.controller;


import com.wannacode.productmicroservice.entity.ProductPEntity;
import com.wannacode.productmicroservice.model.Product;
import com.wannacode.productmicroservice.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import com.wannacode.productmicroservice.service.PricesService;

@RestController
@RequestMapping("/api/productsunit")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;
    @Autowired
    PricesService pricesService;


    @GetMapping(value="/{productName}")
    @ResponseStatus(HttpStatus.OK)
    public ProductPEntity getAllProducts(@PathVariable("productName") String productName){

        var repositorio = productRepository.findAll();
        ProductPEntity resultado = new ProductPEntity();


        for (ProductPEntity repo:repositorio
             ) {

            if (repo.getProductName().equals(productName)){

               resultado =  repo;
               resultado.setUnitPrice(this.getAllResults(productName).getUnitPrice());

            }
        }
        return resultado;
    }

    @GetMapping("/getAll/{productName}")
    public ProductPEntity getAllResults(@PathVariable("productName") String productName){


        ProductPEntity product = pricesService.Precio(productName);

        return product;
    }


    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public void CreateProduct(@RequestBody ProductPEntity ProductEntity)
    {
        productRepository.save(ProductEntity);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteBook(@PathVariable ("id") String id){
        productRepository.deleteById(id);

        return "Deleted Successfully";
    }




}
