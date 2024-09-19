"use client";
import { useState } from 'react';

function LeadForm() {
    const [formData, setFormData] = useState({
        name: '',
        countryCode: '91',
        mobileNo: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                // Reset form data
                setFormData({
                    name: '',
                    countryCode: '91',
                    mobileNo: '',
                    email: ''
                });
                // Handle successful submission, e.g., show a success popup
            } else {
                // Handle error response
            }
        } catch (error) {
            // Handle fetch error
        }
    };

    return (
        <div className="leadFormMainBox">
            <div className="container">
                <div className="leadfromInnerBox">
                    <div className="leadFormLeftBox">
                        <figure>
                            <img src="images/leadformImage.png" className="img-responsive" />
                        </figure>
                        <h2><small>We Plan Weddings That Are</small><strong>Grand</strong></h2>
                        <p>We specialize in planning weddings that are truly grand...</p>
                    </div>
                    <div className="leadFormRightBox">
                        <h2>Send us a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="formBox">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Write Your Name here"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formBox">
                                <label>Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Write Your Email here"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="formBox mobileNumber">
                                <label>Mobile Number</label>
                                <div className="leadmobileNumber">
                                    <select
                                        id="CountryCode"
                                        name="countryCode"
                                        className="CountryCode"
                                        value={formData.countryCode}
                                        onChange={handleChange}
                                    >
                                        <option value="91">+91</option>
                                        <option value="61">+61</option>
                                        <option value="852">+852</option>
                                        <option value="968">+968</option>
                                        <option value="974">+974</option>
                                        <option value="65">+65</option>
                                        {/* Add other country codes as needed */}
                                    </select>
                                    <input
                                        type="text"
                                        name="mobileNo"
                                        placeholder="Enter Number here"
                                        value={formData.mobileNo}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button className="btn btn-primary getCallack" type="submit">Get A Callback</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeadForm;
