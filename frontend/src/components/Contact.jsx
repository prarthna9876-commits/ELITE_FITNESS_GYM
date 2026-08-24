import React, { useState } from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !message) {
            toast.error("Please fill in all fields.");
            return;
        }

        setLoading(true);
        // Replace this with your real submit logic (API call, EmailJS, backend endpoint, etc.)
        setTimeout(() => {
            setLoading(false);
            toast.success("Message sent! We'll get back to you soon.");
            setName("");
            setEmail("");
            setMessage("");
        }, 1200);
    };

    return(
        <section className="contact">
            <form onSubmit={handleSubmit}>
                <h1>CONTACT US</h1>
                <div>
                    <label>Name</label>
                    <input type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
                 <div>
                    <label>Email</label>
                    <input type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                 <div>
                    <label>Message</label>
                    <input type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button type="submit"
                 disabled={loading}
                 style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "15px",
                 }}
                 >
                    {loading && <ClipLoader size={20} color="white"/>}
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;