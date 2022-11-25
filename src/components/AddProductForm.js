import React from 'react';

const AddProductForm = ({handleSubmit,name,email}) => {




    return (
        <form   onSubmit={handleSubmit} 
         className='grid grid-cols-1 gap-3 mt-10'>

        <input disabled  defaultValue={name}    name="name" type="text"  placeholder="Your Name" className="input w-full input-bordered" />
        <input disabled  defaultValue={email}  name="email" type="email"  placeholder="Email Address" className="input w-full input-bordered" />
        <input name="resalePrice" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
      <input name="originalPrice" type="text" placeholder="Price" className="input w-full input-bordered" />
        <input name="location" type="text" placeholder="Your Location" className="input w-full input-bordered" />
        <input name="usedYears" type="date" placeholder="Purchage Year" className="input w-full input-bordered" />
        <input name="postedDate" type="date" placeholder="Purchage Year" className="input w-full input-bordered" />
        <input name='image' type="file" className="file-input w-full max-w-xs" />
       
        <select name="status"  className="select w-full input-bordered">


            <option disabled selected>Choose Conditions</option>
            <option>Excellent</option>
            <option>Good</option>
            <option>Fair</option>
           
        </select>
        <select name='category' className="select w-full input-bordered">
            <option disabled selected>Choose Category</option>
            <option>Private Car</option>
            <option>minibus</option>
            <option>bike</option>
           
        </select>
        <textarea type="text" name="description" className="textarea w-full input-bordered" placeholder="write description"></textarea>
      
        <br />
        <input className='btn btn-accent w-full' type="submit" value="Submit" />

    </form>
    );
};

export default AddProductForm;