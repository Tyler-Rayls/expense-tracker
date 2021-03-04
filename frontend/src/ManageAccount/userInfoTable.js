import React from 'react'
import axios from 'axios';

class UserInfoTable extends React.Component {
    userID = this.props.currentUser.userID
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            initInfo: {
                firstName:"",
                lastName: "",
                email: ""
            },
            userInfo: {
                userID: this.userID,
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
        this.deleteUser = this.deleteUser.bind(this);
        this.editInfo = this.editInfo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitEdits = this.submitEdits.bind(this);
        this.getTable = this.getTable.bind(this);
    };

    deleteUser() {
        axios.put("http://flip1.engr.oregonstate.edu:4221/deleteUser", { userID: this.userID }).then(res => {
            alert(res.data.message);
            window.location.reload(false);
        });
    };

    editInfo() {
    if (this.userID != null){
        var tempState = this.state
        tempState.show = true
        this.setState(tempState);
    }
    };

    submitEdits(){
        axios.put("http://flip1.engr.oregonstate.edu:4221/editUser", this.state.userInfo).then(res => {
            var tempState = this.state
            tempState.show = false
            tempState.initInfo.firstName = String(tempState.userInfo.firstName)
            tempState.initInfo.lastName = String(tempState.userInfo.lastName)
            tempState.initInfo.email = String(tempState.userInfo.email)
            this.setState(tempState);
        });
    };
    
    handleChange(event) {
        var tempState = this.state;
        tempState.userInfo.[event.target.name] = event.target.value
        this.setState(tempState)
    };

    getTable() {
        if (this.userID != null) {
        axios.get("http://flip1.engr.oregonstate.edu:4221/getUser", { params: {userID: this.userID} }).then(response => {
            var tempState = this.state;
            tempState.initInfo.firstName = String(response.data.firstName)
            tempState.initInfo.lastName = String(response.data.lastName)
            tempState.initInfo.email = String(response.data.email)

            tempState.userInfo.firstName = String(response.data.firstName)
            tempState.userInfo.lastName = String(response.data.lastName)
            tempState.userInfo.email = String(response.data.email)
            tempState.userInfo.password = String(response.data.password)
            this.setState(tempState)
    })}};

    componentDidMount() {
        this.getTable()
    };

    render() {
        return (
            <div className="text-center mt-4">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.initInfo.firstName}</td>
                            <td>{this.state.initInfo.lastName}</td>
                            <td>{this.state.initInfo.email}</td>
                        </tr>
                    </tbody>
                </table>

                {
                    this.state.show && this.state.userInfo.userID != "" &&
                    <div class = "row">
                        <div className="col-md-2">
                            <input name="firstName" type="text" class="form-control" placeholder="First Name" onChange={this.handleChange} value={this.state.userInfo.firstName}></input>
                        </div>
                        <div className="col-md-2">
                            <input name="lastName" type="text" class="form-control" placeholder="Last Name" onChange={this.handleChange} value={this.state.userInfo.lastName}></input>
                        </div>
                        <div className="col-md-2">
                            <input name="email" type="text" class="form-control" placeholder="Email Address" onChange={this.handleChange} value={this.state.userInfo.email}></input>
                        </div>
                        <div className="col-md-2">
                            <input name="password" type="text" class="form-control" placeholder="Password" onChange={this.handleChange} value={this.state.userInfo.password}></input>
                        </div>
                        <div className="col-md-2">
                        <button type="button" className="btn btn-success m-1" onClick={this.submitEdits}>Submit Changes</button>
                        </div>
                    </div>

                }

                <button type="button" className="btn btn-danger m-1" onClick={this.deleteUser}>Delete Account</button>
                <button type="button" className="btn btn-primary m-1" onClick={this.editInfo}>Edit Info/Password</button>
            </div>
        )
    }
};

export default UserInfoTable;