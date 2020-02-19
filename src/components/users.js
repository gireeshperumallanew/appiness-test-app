import React, { Component } from 'react'
import { userData } from './userMorkData';

class Users extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userData: []
		}
	}
	componentDidMount() {
		this.setState({
			userData: userData.user
		})
	}
	render() {
		console.log(this.state.userData);
		return (
			<>
				<div class="container">
				<div className="App mb-3">
					 <h1>Users Data</h1>
				</div>
					<table class="table">
						<thead>
							<tr>
								<th>Id</th>
								<th>Name</th>
								<th>Age</th>
								<th>Gender</th>
								<th>Email</th>
								<th>Phone No</th>
							</tr>
						</thead>
						<tbody>
								{
									this.state.userData.map((user, index) => (
										<tr>
											<td>{user.id}</td>
											<td>{user.name}</td>
											<td>{user.age}</td>
											<td>{user.gender}</td>
											<td>{user.email}</td>
											<td>{user.phoneNo}</td>
											</tr>
									))
								}
						</tbody>
					</table>
				</div>
			</>
		)
	}
}

export default Users;