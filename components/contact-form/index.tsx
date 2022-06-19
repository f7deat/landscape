const ContactForm: React.FC = () => {
    return (
        <div>
            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your Name" />
            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your E-mail" />
            <input type="text" className="px-4 py-2 border rounded mb-3 w-full" placeholder="Your Subject" />
            <textarea className="h-32 border rounded mb-3 w-full"></textarea>
            <button className="px-6 py-2 bg-slate-800 font-medium text-white rounded">Send message</button>
        </div>
    )
}

export default ContactForm