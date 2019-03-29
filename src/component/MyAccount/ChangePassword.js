import React, {Component} from 'react';
import axios from 'axios';
import {loginError, loginSuccess} from "../../actions";
class ChangePassword extends Component {
    constructor(props){
        super(props);
        this.state={
            currentpw:'',
            newpw:'',
            cfnewpw:'',
            confirmPass:null,
        }
    }
    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({  [name]: value });
    }
    onConfirm=(event)=>{
        if(this.state.newpw !== event.target.value){
            this.setState({ confirmPass: (<small className="text-danger">Error confirm password</small>) });
        }else{
            this.setState({
                confirmPass: null,
                cfnewpw: event.target.value
            });
        }
    }
    onChangePassword(event){
        event.preventDefault();
        if(this.state.confirmPass===null) {
            axios.post('https://api-organic.herokuapp.com/v1/change-password', {
                old_password: this.state.currentpw,
                new_password: this.state.newpw,
            },{
                headers:{'Authorization':'Bearer '+this.props.token}
            }).then(res => {
                alert("Change Password Successfull");
            }).catch(err => {
                alert("Change Password Error");
            });
        }else{
            alert("Confirm Password Error!");
        }
    }
    render() {
        return (
            <form>
                <div className="row">
                    <h5 className="txt-m-109 cl3 p-rl-15 p-t-10 p-b-17">
                        Thay đổi password
                    </h5>
                    <div className="col-12 p-b-23">
                        <div>
                            <div className="txt-s-101 cl6 p-b-10">
                                Passwork hiện tại
                            </div>
                            <input onChange={this.onChange} className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="password" name="currentpw" />
                        </div>
                    </div>
                    <div className="col-12 p-b-23">
                        <div>
                            <div className="txt-s-101 cl6 p-b-10">
                                Passwork mới
                            </div>
                            <input onChange={this.onChange} className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="password" name="newpw" />
                        </div>
                    </div>
                    <div className="col-12 p-b-23">
                        <div>
                            <div className="txt-s-101 cl6 p-b-10">
                                Nhập lại password
                            </div>
                            <input onChange={this.onConfirm} className="txt-s-120 cl3 size-a-21 bo-all-1 bocl15 p-rl-20 focus1" type="password" name="cfnewpw" />
                            {this.state.confirmPass}
                        </div>
                    </div>
                    <div className="p-rl-15 p-t-17">
                        <button onClick={this.onChangePassword.bind(this)} className="flex-c-m txt-s-105 cl0 bg10 size-a-43 hov-btn2 trans-04 p-rl-10">
                            Lưu
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}
export default ChangePassword