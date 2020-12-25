package fr.mohzaar.ordering.controller;

import fr.mohzaar.ordering.model.Order;
import fr.mohzaar.ordering.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @PostMapping
    public Order save(@RequestBody Order order){
        return orderRepository.save(order);
    }

    @GetMapping(value = "/hello")
    public List<Order> get(){
        return orderRepository.findAll();
    }

    @GetMapping
    public String hello(){
        return "Hello World Order Service";
    }
}
