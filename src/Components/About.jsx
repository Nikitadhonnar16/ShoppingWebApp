import React from "react";
import shoppingimg from "../assets/shopping.jpg";
const About = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Welcome to our shopping platform! We aim to provide you with the best online shopping experience.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 text-lg">
              Our journey began with the vision to connect people with quality products. We believe in making fashion and lifestyle accessible to everyone. With a user-friendly platform and diverse range of products, we strive to make online shopping enjoyable.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-last lg:order-first">
            <img
      src={shoppingimg}
      alt="Our Vision"
              className="rounded-lg shadow-lg w-[500px] h-[500px]"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To be a leading shopping platform that inspires and empowers individuals to express their style. We prioritize innovation, quality, and sustainability in all that we do Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque recusandae autem labore amet fuga facilis impedit rem repudiandae corporis voluptas.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Meet Our Team</h3>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Our team of dedicated professionals works tirelessly to bring you the best shopping experience.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
              alt="Team Member"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Alice Johnson</h4>
            <p className="text-gray-600">CEO & Founder</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
              alt="Team Member"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Mark Smith</h4>
            <p className="text-gray-600">Head of Operations</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200"
              alt="Team Member"
              className="w-40 h-40 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold text-gray-800">Emily Davis</h4>
            <p className="text-gray-600">Marketing Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;