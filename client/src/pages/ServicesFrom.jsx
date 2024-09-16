

import React, { useState } from 'react';


export default function ServicesForm() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        serviceType: '',
        specificService: '',
        price: '',
        unitPrice: '',
        quantity: 1,
        images: []
    });
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [isWalletConnected, setIsWalletConnected] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [walletLoading, setWalletLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };


    const connectWallet = async () => {
        setWalletLoading(true);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            setIsWalletConnected(true);
        } catch (error) {
            console.error("Error connecting wallet", error);
        } finally {
            setWalletLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        setIsSubmitting(true);
        setLoading(true);
        setProgress(0);

        // Required field validation
        const requiredFields = [
            { name: "serviceType", label: "Service Type" },
            { name: "specificService", label: "Specific Service" },
            { name: "name", label: "Name" },
            { name: "email", label: "Email" },
            { name: "phoneNumber", label: "Phone Number" },
            { name: "address", label: "Address" },
            { name: "price", label: "Price" },
            { name: "unitPrice", label: "Unit Price" },
            { name: "quantity", label: "Quantity" },
        ];

        for (const field of requiredFields) {
            if (!formData[field.name]) {
                setIsSubmitting(false);
                setLoading(false);
                setError(`Please fill in the ${field.label} field.`);
                return;
            }
        }

        const data = new FormData();
        Object.keys(formData).forEach((key) => {
            data.append(key, formData[key]);
        });

        if (file) {
            data.append("file", file);
        }

        // Check if images array is populated
        if (formData.images && formData.images.length > 0) {
            formData.images.forEach(image => {
                data.append('images', image);
            });
        }
        // Logging form data to verify fields before sending the request
        for (let [key, value] of data.entries()) {
            console.log(`${key}: ${value}`);
        }
        try {
            const response = await fetch('/api/newOrder/service-form', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                setSuccess("Your service request has been submitted!");
                setLoading(false);
                setTimeout(() => {
                    setSuccess("");
                }, 4000);

                setFormData({
                    serviceType: '',
                    specificService: '',
                    name: '',
                    email: '',
                    phoneNumber: '',
                    address: '',
                    price: '',
                    unitPrice: '',
                    quantity: 1,
                    images: [] // Reset images
                });
                setFile(null);
                setStep(1);
                setSubmitted(true);
            }
        } catch (error) {
            console.error("Error submitting service request:", error.response || error.message);
            if (error.response && error.response.data && error.response.data.error) {
                setError(error.response.data.error);
            } else {
                setError("There was an error submitting your service request. Please try again.");
            }
        }
    };


    const handleServiceTypeChange = (serviceType) => {
        setFormData({ ...formData, serviceType, specificService: '', price: '', unitPrice: '', quantity: 1 });
        setStep(2);
    };

    const handleSpecificServiceChange = (specificService) => {
        const unitPrice = getUnitPrice(formData.serviceType, specificService);
        setFormData({
            ...formData,
            specificService,
            unitPrice,
            price: calculateTotalPrice(unitPrice, formData.quantity)
        });
        setStep(3);
    };

    const handleQuantityChange = (e) => {
        const quantity = e.target.value;
        setFormData({ ...formData, quantity, price: calculateTotalPrice(formData.unitPrice, quantity) });
    };

    const calculateTotalPrice = (unitPrice, quantity) => {
        const numericPrice = parseFloat(unitPrice.match(/\d+/g)?.join('') || 0);
        const total = numericPrice * quantity;
        return `Rs.${total.toFixed(2)}`;
    };

    const getUnitPrice = (serviceType, specificService) => {
        const prices = {
            'Barber': { 'Shave': 'Rs.150', 'Haircut': 'Rs.250', 'Hair Coloring': 'Rs.500' },
            'Carpenter': { 'Door Repair': 'Rs.1000', 'Window Repair': 'Rs.1500' },
            'Plumber': { 'Pipe Leak': 'Rs.100 per hole', 'Clogged Drain': 'Rs.1500' },
            'Electrician Services': { 'Wiring Issue': 'Rs.300 per wire', 'Socket Installation': 'Rs.30 per socket', 'Lighting': 'Rs.90 per feet' },
            'Housekeeper Services': { 'Cleaning': 'Rs.150 per room', 'Laundry': 'Rs.100 per suite', 'Iron': 'Rs.100 per suite' },
        };
        return prices[serviceType]?.[specificService] || 'Rs.0';
    };

    const requiresQuantityInput = (specificService) => specificService.includes('per');
    console.log(formData);

    return (
        <main className="z-30 bg-white border-[#01185B] chatBotMain rounded-md">
            <div className="text-center flex flex-col gap-6 h-full overflow-hidden p-2">
                <div className='text-3xl font-bold flex items-center justify-between'>
                    <div>Request a Service</div>

                </div>

                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {step === 1 && (
                            <div className='flex flex-col items-center gap-6'>
                                <h3 className='text-4xl'>Select Service Type</h3>
                                {['Barber', 'Carpenter', 'Plumber', 'Electrician Services', 'Housekeeper Services'].map((service) => (
                                    <button
                                        key={service}
                                        className='font-semibold p-2 border rounded-md w-[80%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, serviceType: service })
                                            handleServiceTypeChange(service)
                                        }}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        )}

                        {step === 2 && (
                            <div className='flex flex-col items-center gap-6'>
                                <h3 className='text-4xl'>Specific Service</h3>
                                {getSpecificServiceOptions(formData.serviceType).map((option) => (
                                    <button
                                        key={option}
                                        className='font-semibold p-2 border rounded-md w-[80%] transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                        type="button"
                                        onClick={() => {
                                            setFormData({ ...formData, specificService: option })
                                            handleSpecificServiceChange(option)
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                                <button
                                    type="button"
                                    className="mt-4 font-semibold px-5 py-2 border rounded-md transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]"
                                    onClick={() => setStep(1)}
                                >
                                    Back
                                </button>
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <h3 className='text-4xl'>Provide Your Details</h3>
                                <div className='flex flex-col gap-4'>
                                    <input type="text" name="name" value={formData.name} onChange={handleInputChange} className='inputField' placeholder='Your Name' />
                                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className='inputField' placeholder='Your Email' />

                                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} className='inputField' placeholder='Your Phone Number' />

                                    <input type="text" name="address" value={formData.address} onChange={handleInputChange} className='inputField' placeholder='Service Address' />



                                    {requiresQuantityInput(formData.unitPrice) && (
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={formData.quantity}
                                            onChange={handleQuantityChange}
                                            className='p-2 border rounded-md'
                                            min="1"
                                            placeholder='Quantity'
                                        />
                                    )}

                                    <input type="file" onChange={handleFileChange} />

                                    <p className='text-lg font-semibold'>Total Price: {formData.price}</p>

                                    <div className="flex justify-between">
                                        <button
                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                            type="button"
                                            onClick={() => setStep(step - 1)}
                                        >
                                            Previous
                                        </button>
                                        <button
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                            type="submit"
                                        >
                                            Submit
                                        </button>
                                    </div>

                                    {!isWalletConnected && (
                                        <button
                                            type="button"
                                            onClick={connectWallet}
                                            className='mt-2 font-semibold px-5 py-2 border rounded-md transition transform ease-in-out duration-300 sm:hover:scale-105 hover:bg-[#FFF] hover:text-black bg-[#00185a] text-[#F6F0E2]'
                                            disabled={walletLoading}
                                        >
                                            {walletLoading ? 'Connecting Wallet...' : 'Connect Wallet'}
                                        </button>
                                    )}
                                </div>
                                {error && <p className='text-red-600'>{error}</p>}
                                {success && <p className='text-green-600'>{success}</p>}
                            </div>
                        )}
                    </form>
                ) : (
                    <div className='text-lg text-green-600'>
                        {success}
                    </div>
                )}
            </div>
        </main>
    );
}
const getSpecificServiceOptions = (serviceType) => {
    const serviceOptions = {
        'Barber': ['Shave', 'Haircut', 'Hair Coloring'],
        'Carpenter': ['Door Repair', 'Window Repair'],
        'Plumber': ['Pipe Leak', 'Clogged Drain'],
        'Electrician Services': ['Wiring Issue', 'Socket Installation', 'Lighting'],
        'Housekeeper Services': ['Cleaning', 'Laundry', 'Iron'],
    };
    return serviceOptions[serviceType] || [];
};