package com.wannacode.productmicroservice.entity;

import com.wannacode.productmicroservice.model.Product;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(value = "product")
@Getter
@Setter
@NoArgsConstructor
public class ProductPEntity {
    @Id
    public String id;
    public String productName;
    public String productDescription;
    public Double unitPrice;

    @Transient
    public Product product;

}
