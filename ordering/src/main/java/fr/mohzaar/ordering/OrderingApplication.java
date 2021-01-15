package fr.mohzaar.ordering;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
@EnableJpaRepositories
@RestController
@RequestMapping
public class OrderingApplication {


	public static void main(String[] args) {
    SpringApplication.run(OrderingApplication.class, args);
  }
  
  @GetMapping
  public ResponseEntity<String> healthCheck() {
    return new ResponseEntity<>("Order service is working", HttpStatus.OK);
  }
}
