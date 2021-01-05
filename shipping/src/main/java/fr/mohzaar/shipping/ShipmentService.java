package fr.mohzaar.shipping;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import fr.mohzaar.shipping.model.Shipping;
import fr.mohzaar.shipping.repository.ShippingRepository;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ShipmentService {

    private ShippingRepository shippingRepository;

    @Autowired
    public ShipmentService(ShippingRepository shippingRepository) {
      this.shippingRepository = shippingRepository;
    }
  
    public void test(Shipping shipment){
    log.info("Received shipment " + shipment.getId());
    this.shippingRepository.save(shipment);
    }
}
