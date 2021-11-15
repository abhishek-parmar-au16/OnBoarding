import React from 'react';



const Bank = (props) => {
return (
	<div
	style={{
		display: 'centre',
		justifyContent: 'centre',
		alignItems: 'centre',
		height: '100vh'
	}}
	>
	<div class="col-md-4">
			<ul>

				<li>
				<label for="name4" class="form-label">Full name:	</label>
			<input type="text" class="form-name" id="name" />
				</li>
				<li>
				<label for="mobile4" class="form-label">Mobile Number:</label>
			<input type="number" class="form-mobile" id="mobile" />
				</li>
				<li>
				<label for="bank" class="form-label">Bank Name</label>
			<input type="text" class="form-bank" id="bank" />
				</li>
				<li>
				<label for="branch" class="form-label">Branch:</label>
			<input type="text" class="form-branch" id="branch" />
				</li>
				<li>
				<label for="ifsc" class="form-label">IFSC Number:</label>
			<input type="number" class="form-ifsc" id="ifsc" />
				</li>
				<li>
				<label for="account" class="form-label">Account Number:</label>
			<input type="number" class="form-account" id="account" />
				</li>
				<li>
				<label for="ifsc" class="form-label">IFSC Number:</label>
			<input type="number" class="form-ifsc" id="ifsc" />
				</li>

			</ul>
			

			<div class="col-12">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>

		</div>
		
	
	</div>
);
};

export default Bank;
