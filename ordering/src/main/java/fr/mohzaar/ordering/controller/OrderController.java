package fr.mohzaar.ordering.controller;

import fr.mohzaar.ordering.model.Cart;
import fr.mohzaar.ordering.model.Item;
import fr.mohzaar.ordering.model.Order;
import fr.mohzaar.ordering.repository.CartRepository;
import fr.mohzaar.ordering.repository.ItemRepository;
import fr.mohzaar.ordering.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class OrderController {

    private OrderRepository orderRepository;

    private ItemRepository itemRepository;

    private CartRepository cartRepository;

    private KafkaTemplate<String, Order> kafkaTemplate;

    @Autowired
    public OrderController(KafkaTemplate<String, Order> kafkaTemplate, OrderRepository orderRepository,
            ItemRepository itemRepository, CartRepository cartRepository) {
        super();
        this.kafkaTemplate = kafkaTemplate;
        this.orderRepository = orderRepository;
        this.itemRepository = itemRepository;
        this.cartRepository = cartRepository;
    }

    @PostMapping
    public Order save(@RequestBody Order order) {
        Order result = orderRepository.save(order);
        kafkaTemplate.send("order", order.getId() + "created", order);
        return result;
    }

    @GetMapping(value = "/all")
    public List<Order> get() {
        return orderRepository.findAll();
    }

    @GetMapping(value = "/items")
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @GetMapping
    public String hello() {
        return "Order service: Health Check\n";
    }

    @GetMapping(value = "/cart/{id}")
    public ResponseEntity<Cart> getCart(@PathVariable String id) {
        Cart cart = this.cartRepository.findById(id).get();
        return cart != null ? new ResponseEntity<>(cart, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
    }

    @PutMapping
    public ResponseEntity<Cart> updateCart(@RequestBody Cart cart) {
        Cart updatedCart = this.cartRepository.save(cart);
        return updatedCart != null ? new ResponseEntity<>(updatedCart, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }

    @PostMapping
    public ResponseEntity<Cart> postCart(@RequestBody Cart cart) {
        Cart result = this.cartRepository.save(cart);
        return result != null ? new ResponseEntity<>(result, HttpStatus.OK) : new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
    }
}
