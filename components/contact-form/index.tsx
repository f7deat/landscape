import axios from "axios";
import Link from "next/link";
import { useState } from "react"

const ContactForm: React.FC = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [jobType, setJobType] = useState('');
    const [appointment, setAppointment] = useState('');
    const [description, setDescription] = useState('');
    const [message, setMessage] = useState('');
    const [showThank, setShowThank] = useState(false)


    const handleSubmit = () => {
        if (!name) {
            return setMessage('Please input name!')
        }
        if (!phone) {
            return setMessage('Please input phone!')
        }
        if (!email) {
            return setMessage('Please input email!')
        }
        if (!address) {
            return setMessage('Please input address!')
        }

        const metaData = {
            informations: [
                {
                    name: 'Job Type',
                    value: jobType
                },
                {
                    name: 'Appointment',
                    value: appointment
                },
                {
                    name: 'Description',
                    value: description
                }
            ]
        }

        axios.post(`https://defzone.net/api/contact/add`, {
            name: name,
            phoneNumber: phone,
            email: email,
            address: address,
            metaData: JSON.stringify(metaData)
        }).then(response => {
            if (response.data.succeeded) {
                setMessage('Thank for submit. We are contact soon!')
                setShowThank(true)
            } else {
                setMessage(response.data.message)
            }
        })
    }

    return (
        <div>
            <div hidden={!showThank}>
                <div className="p-6 rounded border border-green-500 bg-green-100 mb-4">
                    <div className="text-2xl font-bold text-green-500">
                        Thank for submit. We will contact you soon!
                    </div>
                </div>
                <div className="flex justify-center">
                    <Link href="/">
                        <button className="px-10 py-2 rounded bg-slate-800 text-white font-bold"><i className="fas fa-home"></i> Back to home</button>
                    </Link>
                </div>
            </div>
            <div hidden={showThank}>
                <div className="text-red-500 mb-3">{message}</div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Name<span className="ml-1 text-red-500">*</span></div>
                    <input type="text" className="px-4 py-2 border rounded w-full" onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Phone<span className="ml-1 text-red-500">*</span></div>
                    <input type="text" className="px-4 py-2 border rounded w-full" onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Email<span className="ml-1 text-red-500">*</span></div>
                    <input type="email" className="px-4 py-2 border rounded w-full" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Address<span className="ml-1 text-red-500">*</span></div>
                    <input type="text" className="px-4 py-2 border rounded w-full" onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Job type</div>
                    <select className="px-4 py-2 border rounded w-full" onChange={(e) => setJobType(e.target.value)}>
                        <option value="decking">Decking</option>
                        <option value="fencing">Fencing</option>
                        <option value="gate">Gate</option>
                    </select>
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Appointment</div>
                    <input type="datetime-local" className="px-4 py-2 rounded border w-full" onChange={(e) => setAppointment(e.target.value)} />
                </div>
                <div className="mb-3">
                    <div className="font-bold mb-1">Description</div>
                    <textarea className="h-32 border rounded w-full px-4 py-2" onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button className="px-6 py-2 bg-slate-800 font-medium text-white rounded" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ContactForm