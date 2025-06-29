import { forwardRef, useRef, useState } from "react";
import { FaLinkedin, FaTwitter, FaTelegram, FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export const Contact = forwardRef((props, ref) => {
  const contactForm = useRef();
  const message = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000); // Reset after 3 seconds
  };

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_90yupge",
        "template_vlyr1wm",
        contactForm.current,
        "dNCeMhX5mI-OcPo2k"
      )
      .then(
        () => {
          setMessageSent(true);

          message.current.innerText = "Message sent successfully!";
          contactForm.current.reset();
          handleFormSubmit();
        },
        (error) => {
          setMessageSent(false);

          message.current.innerText =
            "Failed to send message. Please try again.";
          console.error("EmailJS error:", error);
          handleFormSubmit();
        }
      );
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-16 bg-gray-100"
      id="contact"
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Drop a message</h2>
          <div className="space-y-3 text-gray-600">
            <p>Hey there! Thanks for stopping by — I’d love to connect.</p>
            <p>
              Whether you have a question, an opportunity, or just want to say
              hi...
            </p>
            <p>Don’t be shy. I'm just a message away.</p>
          </div>

          <div className="text-gray-700 space-y-2">
            <p>
              <strong>Email:</strong> abdulhakimsaid665@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +252 63 6553022
            </p>
          </div>

          <div className="flex space-x-4 pt-2">
            <a
              href="https://www.linkedin.com/in/abdul-hakim-saed-630077294"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://wa.me/252636553022"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-2xl"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://x.com/@Laawi0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-blue-500 text-2xl"
            >
              <FaTwitter />
            </a>

            <a
              href="https://t.me/@Laawi123"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-2xl"
            >
              <FaTelegram />
            </a>
          </div>
        </div>

        {/* Right Column (Form) */}
        <form
          ref={contactForm}
          onSubmit={sendMessage}
          className="relative space-y-6 bg-white p-6 rounded-2xl shadow-md"
        >
          <div
            ref={message}
            className={` w-[70%] h-[4em] absolute top-[-15px] left-[15%] text-center p-5 transition-all duration-1000 ease-in-out text-white ${
              messageSent ? " bg-[#06ad06b9]" : "bg-[#ff0000c0]"
            } ${formSubmitted ? "opacity-100" : "opacity-0"}`}
          ></div>
          <div>
            <label
              htmlFor="name"
              className="block mb-1 font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-1 font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-1 font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Type your message here"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
});
