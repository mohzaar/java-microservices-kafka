package fr.mohzaar.shipping;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.kafka.support.Acknowledgment;
import org.springframework.stereotype.Component;

import fr.mohzaar.shipping.model.Shipping;

@Component
public class OrderKafkaListener {

	private ShipmentService shipmentService;

	public OrderKafkaListener(ShipmentService shipmentService) {
		super();
		this.shipmentService = shipmentService;
	}

	@KafkaListener(topics = "order")
	public void order(Shipping shipment, Acknowledgment acknowledgment) {
		shipmentService.test(shipment);
		acknowledgment.acknowledge();
	}

}