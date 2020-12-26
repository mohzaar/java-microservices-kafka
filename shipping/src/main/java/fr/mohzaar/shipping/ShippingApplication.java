package fr.mohzaar.shipping;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableJpaRepositories
@RestController
@RequestMapping
public class ShippingApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShippingApplication.class, args);
	}

  @GetMapping
  public ResponseEntity<String> healthCheck() {
    return new ResponseEntity<>("Shipping service is working", HttpStatus.OK);
  }
}
