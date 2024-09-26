import ContactImage from "../../assets/images/contactImage.jpg";

import { ContactForm } from "../../components/forms/ContactForm";

export const Contact = () => {
  return (
    <section className="mx-auto mb-6 mt-[70px] w-11/12 max-w-screen-lg md:mt-[110px] md:flex md:flex-row-reverse md:gap-1">
      <div className="md:w-7/12">
        <img
          className="w-full md:h-full md:object-cover md:p-4"
          src={ContactImage}
          alt="Image of two people sitting at a table and talking to each other"
        />
      </div>

      <div className="mb-4 flex flex-col items-center md:w-6/12">
        <header className="w-full text-center">
          <h1 className="pt-4 text-2xl md:text-3xl">Contact us</h1>
          <p className="w-10/12 py-4 text-center text-lg font-light xs:w-11/12 md:text-xl">
            Please don’t hesitate to reach out!
          </p>
        </header>
        <ContactForm />
      </div>
    </section>
  );
};
