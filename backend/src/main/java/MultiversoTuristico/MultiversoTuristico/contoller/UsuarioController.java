package MultiversoTuristico.MultiversoTuristico.contoller;

import MultiversoTuristico.MultiversoTuristico.model.Usuario;
import MultiversoTuristico.MultiversoTuristico.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:3000")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping
    public List<Usuario> obtenerTodos() {
        return usuarioService.obtenerTodos();
    }

    @GetMapping("/{id}")
    public Optional<Usuario> obtenerPorId(@PathVariable Long id) {
        return usuarioService.obtenerPorId(id);
    }

    @PostMapping
    public Usuario crear(@RequestBody Usuario usuario) {
        return usuarioService.guardar(usuario);
    }
    @PostMapping("/login")
public ResponseEntity<Usuario> login(@RequestBody Map<String, String> datos) {
    String email = datos.get("email");
    String contraseña = datos.get("contraseña");

    return usuarioService.obtenerPorEmail(email)
            .filter(u -> u.getContraseña().equals(contraseña))
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
}

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        usuarioService.eliminar(id);
    }

   
}
