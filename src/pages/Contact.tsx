import Header from "@/components/Header";
import DemoRequestForm from "@/components/DemoRequestForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <DemoRequestForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
