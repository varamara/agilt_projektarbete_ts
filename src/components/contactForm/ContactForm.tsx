import { useFormik } from "formik";
import "./contact-form.scss";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <section className="contact-form-section">
      <div className="contact-form-container">
        <h1>Kontakt</h1>
        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="name">Namn:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>

          <div>
            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div>
            <label htmlFor="message">Meddelande:</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>

          <button type="submit">Skicka</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
