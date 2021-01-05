package fr.mohzaar.shipping.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import fr.mohzaar.shipping.model.Shipping;
import fr.mohzaar.shipping.repository.ShippingRepository;

@RestController
@RequestMapping(value ="/shipping")
public class ShippingController {

    private ShippingRepository shippingRepository;

    @Autowired
    public ShippingController(ShippingRepository shippingRepository) {
      this.shippingRepository = shippingRepository;
    }

    @GetMapping
    public List<Shipping> get(){
        return shippingRepository.findAll();
    }
}
