'use client'
import { useState } from "react";
import { useEffect } from "react";

function Popup({setShowPopup}) {
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

    useEffect(() => {
        const overlay = document.querySelector('.overlay');
        const body = document.querySelector('body');
        if(overlay && body){
            overlay.classList.add('active');
            body.classList.add('active');
        }
        return () => {
            if(overlay)overlay.classList.remove('active');
            if(body)body.classList.remove('active');
        }; 
    }, []);
  return (
    <div class="leadPopupox active">
    <div class="leadfromInnerBox">
        <figure onClick={()=>setShowPopup((state)=> !state)}>
            <img src="images/cross.svg" class="img-responsive"/>
        </figure>       
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
            <div class="formBox">
                <label>Name:</label>
                <input type="text" placeholder="Write Your Name here" required value={formData.name} onChange={handleChange} />
            </div>
            <div class="formBox">
                <label>Email :</label>
                <input type="text" required placeholder="Write Your Name here" value={formData.email} onChange={handleChange} />
            </div>
            <div class="formBox mobileNumber">
                <label>Mobile Number</label>
                <div class="leadmobileNumber"><select value={formData.countryCode} onChange={handleChange} id="CountryCode" name="countryCode" data-value="" class="CountryCode">
                    <option value="91">+91</option><option value="61">+61</option><option value="852">+852</option><option value="968">+968</option><option value="974">+974</option><option value="65">+65</option><option value="971">+971</option><option value="44">+44</option><option value="1">+1</option><option value="27">+27</option><option value="60">+60</option><option value="64">+64</option><option value="66">+66</option><option value="966">+966</option><option value="31">+31</option><option value="973">+973</option><option value="54">+54</option><option value="43">+43</option><option value="880">+880</option><option value="32">+32</option><option value="55">+55</option><option value="86">+86</option><option value="385">+385</option><option value="42">+42</option><option value="45">+45</option><option value="1809">+1809</option><option value="20">+20</option><option value="358">+358</option><option value="679">+679</option><option value="33">+33</option><option value="49">+49</option><option value="30">+30</option><option value="592">+592</option><option value="36">+36</option><option value="62">+62</option><option value="353">+353</option><option value="972">+972</option><option value="39">+39</option><option value="81">+81</option><option value="962">+962</option><option value="82">+82</option><option value="965">+965</option><option value="853">+853</option><option value="52">+52</option><option value="212">+212</option><option value="47">+47</option><option value="48">+48</option><option value="351">+351</option><option value="40">+40</option><option value="7">+7</option><option value="34">+34</option><option value="46">+46</option><option value="41">+41</option><option value="1868">+1868</option><option value="216">+216</option><option value="90">+90</option><option value="84">+84</option>
                </select>
                    <input type="text" placeholder="Write Your Name here" value={formData.mobileNo}
onChange={handleChange}/>
                </div>
                
            </div>
            <button type="submit" class="btn btn-primary getCallack">Get A Callback</button>
            </form>
    </div>

  </div>
  )
}

export default Popup