import "./../assets/styles/contactus.css"

const ContactUs = () => {
  return (
    <main>
      <div className="MainText">
        <h1>Contact Us</h1>

           <form>
           <input type="text" placeholder="Name" />
          <input type="email"  placeholder="E-mail"/>
         
          <textarea cols={30} rows={10} placeholder="Message"></textarea>
            <button>Send</button>
          </form>
           
          
          
      
      </div>
    </main>
 

  )
}

export default ContactUs