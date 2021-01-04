package fr.mohzaar.shipping;

import org.springframework.stereotype.Service;

import fr.mohzaar.shipping.model.Shipping;
import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ShipmentService {

    public void test(Shipping shipment){
		log.info("Received shipment " + shipment.getId());
    }

}
