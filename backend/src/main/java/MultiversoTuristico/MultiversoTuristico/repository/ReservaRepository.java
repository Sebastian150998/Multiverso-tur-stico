package MultiversoTuristico.MultiversoTuristico.repository;
import MultiversoTuristico.MultiversoTuristico.model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    List<Reserva> findByUsuarioId(Long usuarioId);
}