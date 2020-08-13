import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

export default class Users extends Component {
constructor(props) {
super(props);
this.state = {
users: [],
id: 0,
name: '',
email: '',
password: ''
}
}

componentDidMount() {
axios.get('http://localhost:8000/api')
.then((res) => {
this.setState({
users: res.data,
id: 0,
name: '',
email: '',
password: ''
})
console.log(res.data);
})
}

render() {
return (
<div>
<Table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Password</th>
<th>Modify</th>
</tr>
</thead>
<tbody>
{
this.state.users.map(user =>
<tr key={user._id}>
<td> {user.name} </td>
<td> {user.email} </td>
<td> {user.password} </td>
<td> # </td>
</tr>
)
}

    

</tbody>
</Table>
</div>
)
}
}