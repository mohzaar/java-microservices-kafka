package fr.mohzaar.shipping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/shipping")
public class ShippingController {

    @GetMapping
    public String get(){
        return "Hello World Shipping Service";
    }
}
