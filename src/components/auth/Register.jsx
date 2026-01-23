import { useState } from "react";

export default function Register() {

    // declare state variables and Update state variables 

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [mobile, setMobile] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");

    // Combined State for all the form fields

    const [formData, setFormData] = useState(
        {
            firstName : "",
            lastName : "",
            mobile : "",
            email : "",
            password : "",
            confirmPassword : ""
        }
      );

    // Error State for all the form fields
    
    const [formErrors, setFormErrors] = useState({});

    // Handle Input Change for updating state variables

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(
          {
            ...formData,
            [name]: value
  
          }
      );
    }

    // Validate the state variables using regex

    const validateFields = () => {
      const errors = {};

      // First Name Validation
      if(!/^[A-Z][a-z]{2,10}$/.test(formData.firstName)){
        errors.firstName = "First name must be 3-10 characters long and start with a capital letter";
      }
      // Last Name Validation
      if(!/^[A-Z][a-z]{2,10}$/.test(formData.lastName)){
        errors.lastName = "Last name must be 3-10 characters long and start with a capital letter";
      }
      // Mobile Validation
      if(!/^[6-9][0-9]{9}$/.test(formData.mobile)){
        errors.mobile = "Mobile number must be 10 digits long and start with 6-9";
      }
      // Email Validation
      if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
        errors.email = "Invalid email address";
      }
      // Password Validation with regex
      if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)){
        errors.password = "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character";
      }
      // Confirm Password Validation
      if(formData.password !== formData.confirmPassword){
        errors.confirmPassword = "Passwords do not match";
      }

      return errors;
    }

    // Handle form submission

    const handleSubmit = (e) =>{
      e.preventDefault();

      const errors = validateFields();
      
      if(Object.keys(errors).length > 0){
        setFormErrors(errors);
        return;
    }
      setFormErrors({}); // Clear previous errors if any
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted successfully", formData);
  }


  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                First Name
              </label>
              <input
                type="text"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline outline-gray-300 focus:outline-indigo-600"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {formErrors.firstName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Last Name
              </label>
              <input
                type="text"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline  outline-gray-300 focus:outline-indigo-600"
                name="lastName"
                value={formData.lastName}
                                onChange={handleInputChange}
        
              />
              {formErrors.lastName && (
                <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
              )}
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Mobile Number
              </label>
              <input
                type="tel"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline  outline-gray-300 focus:outline-indigo-600"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
       
              />
              {formErrors.mobile && (
                <p className="mt-1 text-sm text-red-600">{formErrors.mobile}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Email Address
              </label>
              <input
                type="email"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline  outline-gray-300 focus:outline-indigo-600"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type="password"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline  outline-gray-300 focus:outline-indigo-600"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                
                className="mt-2 block w-full rounded-md px-3 py-1.5 outline  outline-gray-300 focus:outline-indigo-600"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              {formErrors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
              )}
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-500"
              >
                Register
              </button>
            </div>

          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

// Destructuring Example


// const useDetails = {
//   firstName : "Vamsee",
//   lastName : "Krishna",
//   mobile : "9876543210",
//   email : "gvks.247@gmail.com"
// }

// const { firstName, lastName, mobile, email } = useDetails;

// console.log(useDetails.firstName);
// console.log(firstName);


// spread operator example

// const userInfo = ["Vamsee", "Krishna", "9876543210", "gvks.247@gmail.com"];


// const employeeInformation = [...userInfo, "Software Engineer", "Bangalore", ...userDetails];

// console.log(employeeInformation);

// Output: ["Vamsee", "Krishna", "9876543210", "gvks.247@gmail.com", "Software Engineer", "Bangalore"];

// Spread operator with objects

// const userDetails = {
//     firstName : "Vamsee",
//     lastName : "Krishna",
//     mobile : "9876543210",
//     email : "gvks.247@gmail.com"
//   };

//   console.log(userDetails.firstName);
//   console.log(userDetails["firstName"]);

// const employeeDetails = {
//     ...userDetails,
//     designation : "Software Engineer",
//     location : "Bangalore",
//     mobile : "8639855326"  // updated mobile number
// };

// console.log(employeeDetails);
// Output: {firstName: "Vamsee", lastName: "Krishna", mobile: "8639855326", email: "