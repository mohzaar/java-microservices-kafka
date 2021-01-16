package fr.mohzaar.shipping.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Embeddable;


@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

    private String name;
    private String lastName;
    private String email;
}
