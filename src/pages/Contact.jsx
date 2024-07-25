import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <Input type="text" placeholder="Name" required />
        </div>
        <div className="mb-4">
          <Input type="email" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <Textarea placeholder="Message" required />
        </div>
        <Button type="submit">Send Message</Button>
      </form>
    </div>
  );
};

export default Contact;