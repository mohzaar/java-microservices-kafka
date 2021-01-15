package fr.mohzaar.ordering.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mohzaar.ordering.model.Cart;

@Repository
public interface CartRepository extends JpaRepository<Cart, String> {
}
