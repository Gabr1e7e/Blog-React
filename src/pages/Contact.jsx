import { useState } from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

const Contact = () => {
  const [contact, setContact] = useState({
    pseud: "",
    messa: "",
    id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setContact({ ...Contact, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const pseudo = event.target.pseudo.value;

    const existingPseudo = JSON.parse(localStorage.getItem("pseudo")) || [];
    existingPseudo.push(pseudo);

    localStorage.setItem("pseudo", JSON.stringify(existingPseudo));

    const message = event.target.message.value;

    const existingMessage = JSON.parse(localStorage.getItem("message")) || [];
    existingMessage.push(message);

    localStorage.setItem("message", JSON.stringify(existingMessage));
    setContact({ ...Contact, pseud: "" });
    setContact({ ...Contact, messa: "" });
    console.log(existingMessage);
  };
  // Il faut envoyer les données de ce formulaire dans le localStorage,
  // RAPPEL: Il faut récupérer le LS, puis ajouter une nouvelle valeur pour ne pas
  // écraser anciennes valeurs

  // Faire la fonction handleChange et handleSubmit
  return (
    <div className="min-h-screen bg-[#0E1217] flex justify-center items-center">
      <div className="container mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold mb-5 text-[#E11D48] text-center">
          Contact
        </h1>
        <form
          method="POST"
          onSubmit={handleFormSubmit}
          className="max-w-xl mx-auto"
        >
          <div className="mb-4">
            <label htmlFor="pseudo" className="block text-white mb-2">
              Pseudo
            </label>
            <Input
              id="pseudo"
              type="text"
              color="light-blue"
              className="text-white"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">
              Message
            </label>
            <Textarea id="message" color="light-blue" className="text-white" />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#E11D48] hover:bg-[#c81e42]"
          >
            Envoyer
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
