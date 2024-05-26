import React, { useState } from 'react'
import './css/Contact.css'

const Contact1 = () => {

    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        phonenumber: '',
        password: '',
        address: '',
        message: ''
    })

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value })
    }


    const submitData = async (event) => {
        event.preventDefault();
        const { firstname,
            lastname,
            phonenumber,
            password,
            address,
            message } = userData;

        //field agar empty ho toh data store na ho
        if (firstname &&lastname &&phonenumber &&password &&address &&message) {

            //last mein hume folder ka naam khud hi dena hai i.e yahan 'userDataRecords.json' diya hai
            const res = await fetch('https://reactcompletewebsite-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        firstname,
                        lastname,
                        phonenumber,
                        password,
                        address,
                        message
                    })
                });

            if (res) {
                setUserData({firstname: '',
                lastname: '',
                phonenumber: '',
                password: '',
                address: '',
                message: ''})

                alert('data stored')
                console.log('success');
            }
            else {
                alert('fill the data')
                console.log('failed');
            }
        }
        else {
            alert('fill the data')
            console.log('failed');
        }
    }

    return (
        <>

            <div className="mn_div">

                <div className="lft_div">

                    <div style={{ textAlign: 'center', fontSize: "25px", paddingTop: '30px', fontWeight: "700" }}>Connect With our Sales Team</div>


                    <div className='para1'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel molestiae exercitationem voluptas accusantium consequuntur ex ab. Voluptate quam qui ad!</div>

                    <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="error" className='img3' />
                </div>




                <div className="rgt_div">
                    {/* for names  */}
                    <div className="row set">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" name='firstname' value={userData.firstname} onChange={postUserData} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" name='lastname' value={userData.lastname} onChange={postUserData} />
                        </div>
                    </div>

                    {/* for info and credentials */}
                    <div className="row set">
                        <div className="col">
                            <input type="number" className="form-control" placeholder="Phone Number" name='phonenumber' value={userData.phonenumber} onChange={postUserData} />
                        </div>
                        <div className="col">
                            <input type="password" className="form-control" placeholder="Password" name='password' value={userData.password} onChange={postUserData} />
                        </div>
                    </div>


                    {/* For address */}
                    <div className="set updt">
                        <input type="text" className="form-control" placeholder="Add Address" name='address' value={userData.address} onChange={postUserData} />
                    </div>


                    {/* for message */}
                    <div className="set updt">
                        <input type="text" className="form-control" placeholder="Enter Your Message" name='message' value={userData.message} onChange={postUserData} Message />
                    </div>

                    <div className="form-check set updt">
                        <input className="form-check-input" type="checkbox" id="gridCheck" />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                    <div className="d-grid set updt">
                        <button className="btn btn-primary" type="submit" onClick={submitData}>Submit</button>
                    </div>
                </div>
            </div>      

        </>
    )
}

export default Contact1