package fr.mohzaar.ordering;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import fr.mohzaar.ordering.model.Cart;
import fr.mohzaar.ordering.repository.CartRepository;

@Component
public class OnAppStart implements CommandLineRunner {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public void run(String... args) throws Exception {
        Cart cart = new Cart();
        cart.setItemList(new ArrayList<>());
        this.cartRepository.save(cart);
    }

}
