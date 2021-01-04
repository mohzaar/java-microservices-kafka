package fr.mohzaar.shipping.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value ="/shipping")
public class ShippingController {

    @GetMapping
    public String get(){
        return "Hello World Shipping Service Kubernetes Edition\n";
    }
}
