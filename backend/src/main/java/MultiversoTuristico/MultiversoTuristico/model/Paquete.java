package MultiversoTuristico.MultiversoTuristico.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "app")
public class Paquete {

    @Id
    private String id;

    private String nombre;
    private String descripcion;
    private String tipo;
    private double precio;
    private String duracion;
    private List<String> personajes;
    private List<String> itinerario;
    private String imagen;

    public Paquete() {}

    // Getters y setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getNombre() { return nombre; }
    public void setNombre(String nombre) { this.nombre = nombre; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public String getTipo() { return tipo; }
    public void setTipo(String tipo) { this.tipo = tipo; }

    public double getPrecio() { return precio; }
    public void setPrecio(double precio) { this.precio = precio; }

    public String getDuracion() { return duracion; }
    public void setDuracion(String duracion) { this.duracion = duracion; }

    public List<String> getPersonajes() { return personajes; }
    public void setPersonajes(List<String> personajes) { this.personajes = personajes; }

    public List<String> getItinerario() { return itinerario; }
    public void setItinerario(List<String> itinerario) { this.itinerario = itinerario; }

    public String getImagen() { return imagen; }
    public void setImagen(String imagen) { this.imagen = imagen; }
}