package fr.mohzaar.ordering.controller;

import fr.mohzaar.ordering.model.Order;
import fr.mohzaar.ordering.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value="/order")
public class OrderController {

    private OrderRepository orderRepository;

    private KafkaTemplate<String, Order> kafkaTemplate;

    @Autowired
    public OrderController(KafkaTemplate<String, Order> kafkaTemplate, OrderRepository orderRepository){
        super();
        this.kafkaTemplate = kafkaTemplate;
        this.orderRepository = orderRepository;
    }

    @PostMapping
    public Order save(@RequestBody Order order){
        Order result = orderRepository.save(order);
        kafkaTemplate.send("order", order.getId() + "created", order);
        return result;
    }

    @GetMapping(value = "/hello")
    public List<Order> get(){
        return orderRepository.findAll();
    }

    @GetMapping
    public String hello(){
        return "Hello World Order Service Kubenertes Edition\n";
    }
}
