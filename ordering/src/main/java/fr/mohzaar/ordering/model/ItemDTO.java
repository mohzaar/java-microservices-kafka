package fr.mohzaar.ordering.model;

import java.util.Arrays;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ItemDTO {

    private String id;

    private String image;

    private String image2;

    private String name;

    private Double price;

    private List<String> description;

    public ItemDTO(Item item){
        this.id = item.getId();
        this.image = item.getImage();
        this.image2 = item.getImage2();
        this.name = item.getName();
        this.price = item.getPrice();
        this.description = Arrays.asList(item.getDescription().trim().split("\\*"));
    }

}
