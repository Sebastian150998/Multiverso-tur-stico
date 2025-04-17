package MultiversoTuristico.MultiversoTuristico.repository;
import MultiversoTuristico.MultiversoTuristico.model.Paquete;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PaqueteRepository extends MongoRepository<Paquete, String> {

    void deleteById(String id);
}