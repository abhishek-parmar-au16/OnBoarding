import React from 'react';

const Profile = () => {
return (
	<div
	style={{
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'left',
		height: '100vh'
	}}
	>
	<div>
            <form class="row g-3">
                <div class="col-md-4">
                    <label for="inputName4" class="form-label">Name</label>
                    <input type="text" class="form-control" id="inputName4" />
                </div>
                <div class="col-md-4">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" />
                </div>
                <div class="col-md-4">
                    <label for="inputEmployeeId4" class="form-label">Employee Code</label>
                    <input type="text" class="form-control" id="inputEmployeeId4" />
                </div>
                <div>
                    <select >
                        
                        <option name="gender"> Gender</option>
                        <option name="male"> Male</option>
                        <option name="female">Female</option>
                    </select>
                    
                    <select >                    
                        <option name="gender"> Martial Status </option>
                        <option name="unmarried"> Unmarried</option>
                        <option name="married">Married</option>
                    </select>
                    
                </div >
                
                <div class="col-md-4">
                        
                    <label for="mobile4" class="form-label">Mobile Number</label>
                    <input type="number" class="form-control" id="mobile" />

                </div>
                
                <div class="col-5">
                    <label for="inputAddress" class="form-label">Present Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-5">
                    <label for="inputAddress2" class="form-label">Permanent Address</label>
                    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-4">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="col-md-4">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>Madhya Pradesh</option>
                        <option>Andhra Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Goa</option>
                        <option>Delhi</option>
                        <option>Karnataka</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Zip</label>
                    <input type="number" class="form-control" id="inputZip" />
                </div>
                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck" />
                        <label class="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </form>

        </div>
	</div>
);
};

export default Profile;
