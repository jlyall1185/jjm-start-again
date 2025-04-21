import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    document.title = "JJM Flooring | Premium Flooring Services";
  }, []);

  return (
    <div className="bg-white text-neutral-800">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-cover bg-center" style={{ backgroundImage: "url('/flooring-hero.jpg')" }}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-4xl md:text-6xl font-bold text-white">
          Premium Flooring, Expertly Installed
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1 }} className="mt-4 text-xl text-white max-w-xl">
          Elevate your space with high-end flooring solutions tailored to your style.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="mt-6">
          <button className="bg-black text-white py-2 px-4 rounded-xl hover:bg-neutral-800">Get a Free Quote</button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Luxury Vinyl Tiles (LVT)",
            "Laminate Flooring",
            "Engineered Wood Flooring",
            "Solid Wood Flooring",
            "Carpet Installation",
            "Floor Repair Services",
          ].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-xl">
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-sm text-neutral-600">High-quality professional {service.toLowerCase()} for homes and businesses across Lincolnshire.</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-neutral-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About JJM Flooring</h2>
          <p className="text-neutral-700 text-lg">
            With over 15 years of experience, JJM Flooring Ltd delivers expert craftsmanship, attention to detail, and unmatched customer care. Based in Lincolnshire, we’ve helped hundreds of clients transform their homes and commercial spaces.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
          <form className="space-y-4">
            <input className="w-full p-3 border border-neutral-300 rounded-xl" type="text" placeholder="Your Name" required />
            <input className="w-full p-3 border border-neutral-300 rounded-xl" type="email" placeholder="Your Email" required />
            <textarea className="w-full p-3 border border-neutral-300 rounded-xl" rows="4" placeholder="Your Message" required></textarea>
            <button className="bg-black text-white py-3 px-6 rounded-xl hover:bg-neutral-800 w-full">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}
