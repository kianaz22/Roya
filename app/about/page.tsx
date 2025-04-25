'use client';

import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            About Roya E-commerce
          </h1>
          
          <div className="space-y-8 text-lg text-zinc-300">
            <p>
              Roya E-commerce is a leading technology company dedicated to transforming the future of online business through innovative solutions and creative approaches. Our mission is to make technology not only make lives easier but also creatively and innovatively transform the world into a better place.
            </p>
            
            <p>
              Founded with a vision to revolutionize the e-commerce landscape, we have developed a suite of powerful tools and services that empower businesses to thrive in the digital age. Our comprehensive platform includes Kamva for online store management, Pakat for email marketing, and Hamahang for seamless meeting coordination.
            </p>
            
            <p>
              At Roya E-commerce, we believe in the power of technology to create meaningful connections and drive business growth. Our team of experts is committed to providing cutting-edge solutions that help businesses succeed in an increasingly competitive digital marketplace.
            </p>
            
            <p>
              We take pride in our commitment to excellence, innovation, and customer satisfaction. Our goal is to be at the forefront of technological advancement, continuously developing new solutions that address the evolving needs of modern businesses.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
} 