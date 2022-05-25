import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const handleProfileSubmit = (e) =>{
    e.preventDefault();
    const education = e.target.education.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;
    const linkedin = e.target.linkedin.value;

    const profile = {
      name: user.displayName,
      email: user.email,
      education: education,
      location: location,
      phone: phone,
      linkedin: linkedin,
    };   
     fetch('http://localhost:5000/profile',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(profile)
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
    })
  }
  
  return (
    <div>
      
      <div className="lg:flex justify-between mt-8 px-6">
        <div>
          <h1 className="font-bold mt-8">Full Name</h1>
          <p className="text-xl">{user.displayName}</p>
          <h1 className="font-bold mt-2">Email Address</h1>
          <p className="text-xl mb-4">{user.email}</p>
        </div>

        <form onSubmit={handleProfileSubmit} className="mr-80">
          <input
            type="text"
            name="education"
            placeholder="Educational Qualification"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="text"
            name="location"
            placeholder="Your Location"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="text"
            name="linkedin"
            placeholder="Linkedin Profile Link"
            class="input input-bordered w-96 max-w-xs mb-2"
          />
          <br />
          <input
            type="submit"
            value="Submit"
            class=" btn btn-accent text-white  w-full max-w-xs mb-2"
          />
          <br />
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
