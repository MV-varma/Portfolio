import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <section id="Contact" className="py-20 bg-black text-white min-h-screen flex items-center justify-center w-full">
      <div className="flex flex-col gap-12 w-full mx-auto max-w-5xl ">
        <div className="text-center items-centerflex flex-col space-y-4 ">
          <h2 className='text-5xl font-extrabold bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent uppercase tracking-wider'>
          CONTACT ME
          </h2>
        </div>
         <ContactForm />
      </div>
    </section>
  )
}

export default Contact