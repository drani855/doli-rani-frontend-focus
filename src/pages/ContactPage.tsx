
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Contact />
    </div>
  );
};

export default ContactPage;