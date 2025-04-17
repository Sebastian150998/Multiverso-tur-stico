package MultiversoTuristico.MultiversoTuristico.service;

import MultiversoTuristico.MultiversoTuristico.model.Paquete;
import MultiversoTuristico.MultiversoTuristico.repository.PaqueteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PaqueteService {

    @Autowired
    private PaqueteRepository paqueteRepository;

    public List<Paquete> obtenerTodos() {
        return paqueteRepository.findAll();
    }

    public Paquete guardar(Paquete paquete) {
        return paqueteRepository.save(paquete);
    }

    public void eliminar(String id) {
        paqueteRepository.deleteById(id);
    }

    public Optional<Paquete> obtenerPorId(String id) {
        return paqueteRepository.findById(id);
    }
}
