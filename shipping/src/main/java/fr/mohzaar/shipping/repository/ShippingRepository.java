package fr.mohzaar.shipping.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mohzaar.shipping.model.Shipping;

@Repository
public interface ShippingRepository extends JpaRepository<Shipping, String> {
    
}

