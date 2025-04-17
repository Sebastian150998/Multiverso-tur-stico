package MultiversoTuristico.MultiversoTuristico.contoller;

import MultiversoTuristico.MultiversoTuristico.model.Paquete;
import MultiversoTuristico.MultiversoTuristico.service.PaqueteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paquetes")
@CrossOrigin(origins = "http://localhost:3000")
public class PaqueteController {

    @Autowired
    private PaqueteService paqueteService;

    @GetMapping
    public List<Paquete> obtenerTodos() {
        return paqueteService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Optional<Paquete> obtenerPorId(@PathVariable String id) {
        return paqueteService.obtenerPorId(id);
    }

    @PostMapping
    public Paquete crear(@RequestBody Paquete paquete) {
        return paqueteService.guardar(paquete);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable String id) {
        paqueteService.eliminar(id);
    }
}
