import { motion } from "framer-motion"
// import FbMessageUs from "../../Common/Facebook/fbMessageUs";
import MessengerCustomerChat from 'react-messenger-customer-chat';

export default function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form._subject.value;
    const message = form.message.value;

    fetch("https://formsubmit.co/ajax/tasnimul.haque6@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        _subject: subject

      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
      form.reset()
  }

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto w-11/12">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                duration: 0.5,
            }}
            viewport={{ once: true }}
            className="pt-16">
              <h2 className="mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black tracking-tight leading-none text-center">Feel free to get in touch</h2>
              <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl md:w-7/12 m-auto 2xl:text-2xl">If you have any questions, suggestions, or simply want to share your experience with me, don’t hesitate. Reach out to me anytime. I'm here to listen and respond. Your feedback helps me grow and improve. So, feel free to get in touch!</p>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, y: 100 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{
                duration: 0.7,
            }}
            viewport={{ once: true }}
          >
              <form onSubmit={handleSubmit} className="space-y-8 md:w-11/12 m-auto lg:w-10/12 xl:w-6/12" >
                <div>
                    <label htmlFor="name" className="block mb-2 text-sm 2xl:text-xl font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                    <input type="text" id="name" name='name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 2xl:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 2xl:text-xl">Your email</label>
                    <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm 2xl:text-xl rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@example.com" required />
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 2xl:text-xl">Subject</label>
                    <input type="text" id="subject" name='_subject' className="block p-3 w-full text-sm 2xl:text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400 2xl:text-xl">Your message</label>
                    <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-sm 2xl:text-xl text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html"></input>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white bg-themeColor sm:w-fit hover:bg-black focus:ring-4 focus:outline-none focus:ring-themeColor rounded 2xl:text-xl">Send message</button>
            </form>
          </motion.div>
        </div>
        <div className="fb-chat-widget">
          <MessengerCustomerChat
          pageId={import.meta.env.VITE_FACEBOOK_PAGE_ID}
          appId={import.meta.env.VITE_FACEBOOK_APP_ID}
        />
        </div>
      </section>

    </>
  )
}
