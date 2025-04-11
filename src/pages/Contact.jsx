function Contact() {
    return (
      <div className="contact">
        <section>
          <form>
            <label>
              Nombre:
              <input type="text" name="name" required />
            </label>
            <label>
              Correo Electrónico:
              <input type="email" name="email" required />
            </label>
            <label>
              Mensaje:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Enviar</button>
          </form>
        </section>
        <section>
          <h2>Información de Contacto</h2>
          <p>Correo Electrónico: <a href="leonelochoa2901@gmail.com">leonelochoa2901@gmail.com</a></p>
          <p>Teléfono: +52 631 164 5478</p>
          <p>LinkedIn: <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>GitHub: <a href="https://github.com/Leonel2901" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>
      </div>
    );
  }
  
  export default Contact;