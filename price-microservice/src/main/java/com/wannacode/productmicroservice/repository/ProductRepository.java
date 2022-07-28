package com.wannacode.productmicroservice.repository;

import com.wannacode.productmicroservice.entity.ProductPEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepository extends MongoRepository<ProductPEntity,String> {
}
