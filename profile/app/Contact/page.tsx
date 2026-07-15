import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section id="Contact" className="min-h-screen flex items-center justify-center w-full">
      <div className="flex flex-col gap-12 w-full ">
        <div className=" text-6xl font-bold p-4 mx-auto text-center ">
         CONTACT ME
        </div>
         <ContactForm />
      </div>
    </section>
  )
}

export default Contact