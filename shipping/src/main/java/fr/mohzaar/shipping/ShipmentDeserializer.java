package fr.mohzaar.shipping;

import org.springframework.kafka.support.serializer.JsonDeserializer;

import fr.mohzaar.shipping.model.Shipping;

public class ShipmentDeserializer extends JsonDeserializer<Shipping> {

	public ShipmentDeserializer() {
		super(Shipping.class);
	}

}