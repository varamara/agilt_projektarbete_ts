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
        <div className="form-content">
        <h1>Kontakt</h1>

        <form className="contact-form" onSubmit={formik.handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Namn:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">E-post:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>

          <div className="input-group">
            <label htmlFor="message">Meddelande:</label>
            <textarea
              id="message"
              name="message"
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
          
          <button className="form-button" aria-label="Click to submit form" type="submit" title="submit button">Skicka</button>
          
        </form></div>
        <div className="side-container">
          <h2>info</h2>
            <p>Konini Agenturer AB <br />
            Myggvägen 11 <br />
            136 75 Vendelsö <br />
            Org. nr.: 556989-6292</p>
          
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
