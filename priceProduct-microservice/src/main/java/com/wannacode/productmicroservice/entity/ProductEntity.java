package com.wannacode.productmicroservice.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "productprice")
@Getter
@Setter
@NoArgsConstructor
public class ProductEntity {
    @Id
    public String id;
    public String productName;
    public Double unitPrice;

}
