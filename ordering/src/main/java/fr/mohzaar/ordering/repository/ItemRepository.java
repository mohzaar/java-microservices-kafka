
package fr.mohzaar.ordering.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.mohzaar.ordering.model.Item;

@Repository
public interface ItemRepository extends JpaRepository<Item, String> {

    List<Item> findByIdIn(List<String> ids);
}