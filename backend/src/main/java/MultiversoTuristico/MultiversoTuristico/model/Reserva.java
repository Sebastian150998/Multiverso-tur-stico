package MultiversoTuristico.MultiversoTuristico.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "reservas")
public class Reserva {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", nullable = false)
    @JsonIgnoreProperties({"reservas"}) // evita bucles infinitos
    private Usuario usuario;
    private String paqueteId;
    private LocalDate fecha;

    public Reserva() {}

    public Reserva(Usuario usuario, String paqueteId, LocalDate fecha) {
        this.usuario = usuario;
        this.paqueteId = paqueteId;
        this.fecha = fecha;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Usuario getUsuario() { return usuario; }
    public void setUsuario(Usuario usuario) { this.usuario = usuario; }

    public String getPaqueteId() { return paqueteId; }
    public void setPaqueteId(String paqueteId) { this.paqueteId = paqueteId; }

    public LocalDate getFecha() { return fecha; }
    public void setFecha(LocalDate fecha) { this.fecha = fecha; }
}

