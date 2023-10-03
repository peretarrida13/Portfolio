import PageHeader from "../../components/PageHeader";
import Form from "../../components/Form";
import ContactInfo from "../../components/ContactInfo";


const Contact = ({ name, email, location }) => {
  return (
    <>
      {/* Main Contact Page */}
      <main className="contact container">
        {/* Display the page header */}
        <PageHeader title="Contact" description="Get in touch" />

        <div className="contactWrap container">
          <div className="row">
            {/* Display the contact form */}
            <div className="col-12 col-lg-6">
              <Form />
            </div>

            {/* Display the contact information */}
            <div className="col-12 col-lg-6">
              <ContactInfo name={name} location={location} email={email} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;