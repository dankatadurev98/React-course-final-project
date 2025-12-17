export default function Contacts() {
  return (
    <section className="bg-gray-900 min-h-screen text-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* 2-column layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT COLUMN: IMAGE + INFO */}
          <div className="flex flex-col items-start">

            {/* Image */}
            <img
              src="/images/5.png"
              alt="Location icon"
              className="
              
                hidden lg:block
                w-40
                mb-6
                opacity-90
                rotate-[-10deg]
                pointer-events-none
              "
            />

            {/* Contact Info */}
            <h1 className="text-4xl font-bold text-purple-400 mb-6">
              Contact Us
            </h1>

            <div className="space-y-4">
              <p><span className="font-semibold">Phone:</span> +359 894655518</p>
              <p><span className="font-semibold">Email:</span> support-gamingstore@abv.com</p>
              <p><span className="font-semibold">Address:</span> Pomorie, Bulgaria</p>
              <p><span className="font-semibold">Working Hours:</span> Mon – Fri, 09:00 – 18:00</p>
            </div>
          </div>

          {/* RIGHT COLUMN: MAP */}
          <iframe
       className="rounded-xl" 

  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.9003679544035!2d27.643523376486097!3d42.55740842261012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a6bd7022a0edab%3A0xfdb171c0ac5ffb0e!2z0LrQsi4g0KHRgtCw0YDQuNGPINCz0YDQsNC0LCB1bC4gIlNoaXNobWFuIiA1YSwgODIwMCBQb21vcmll!5e0!3m2!1sen!2sbg!4v1765634489534!5m2!1sen!2sbg"
  width={550}
  height={400}
 
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>


        </div>
      </div>
    </section>
  );
}
