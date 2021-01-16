package fr.mohzaar.ordering.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

@Entity(name = "t_order")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "org.hibernate.id.UUIDGenerator")
    private String id;

    @ManyToMany
    private List<Item> itemList;

    @Embedded
    @AttributeOverrides({ @AttributeOverride(name = "name", column = @Column(name = "name")),
            @AttributeOverride(name = "lastName", column = @Column(name = "lastName")),
            @AttributeOverride(name = "email", column = @Column(name = "email")) })
    private Customer customer;

    @Embedded
    @AttributeOverrides({ @AttributeOverride(name = "street", column = @Column(name = "street")),
            @AttributeOverride(name = "zip", column = @Column(name = "zip")),
            @AttributeOverride(name = "city", column = @Column(name = "city")) })
    private Address address;

    private Double totalPrice;

    private Date deliveryDate;

}
