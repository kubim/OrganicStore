import React, {Component} from 'react';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            editOpen:false,
        }
    }
    changeEditOpen(){
        this.setState({
            editOpen:!this.state.editOpen
        })
    }
    render() {
        return (
            <form method="POST" role="form">
                <legend>Thông tin</legend>
                <div className="form-group">
                    <label>Họ và tên</label>
                    <input disabled={!this.state.editOpen} type="text" className="form-control"
                           defaultValue={this.props.profile.account.name}/>
                </div>
                <div className="form-group">
                    <label>Thành phố</label>
                    <input disabled={!this.state.editOpen} type="text" className="form-control"
                           defaultValue={this.props.profile.account.city}/>
                </div>
                <div className="form-group">
                    <label>Địa chỉ</label>
                    <input disabled={!this.state.editOpen} type="text" className="form-control"
                           defaultValue={this.props.profile.account.address}/>
                </div>

                <div className="radio form-group">
                    <label style={{float: 'left', marginRight: '30px'}}>
                        <input disabled={!this.state.editOpen} type="radio" name="gender" value="1"
                               checked={this.props.profile.gender ? "checked" : null}/>
                        Nam
                    </label>
                    <label>
                        <input disabled={!this.state.editOpen} type="radio" name="gender" value="0"
                               checked={this.props.profile.gender ? null : "checked"}/>
                        Nữ
                    </label>
                </div>

                <div className="form-group">
                    <label>Ngày sinh</label>
                    <input disabled={!this.state.editOpen} type="date" name="" className="form-control"
                           value={this.props.profile.account.dob} required="required" title=""/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input disabled={!this.state.editOpen} type="text" className="form-control"
                           value={this.props.profile.email}/>
                </div>

                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input disabled={!this.state.editOpen} type="text" className="form-control"
                           value={this.props.profile.phone}/>
                </div>
                <button type="button" style={this.state.editOpen ? {display: 'none'} : null}
                        onClick={this.changeEditOpen.bind(this)}
                        className="btn btn-warning">Cập nhật
                </button>
                <button style={this.state.editOpen ? null : {display: 'none'}} onClick={this.changeEditOpen.bind(this)}
                        type="button"
                        className="btn btn-success">Lưu
                </button>
                <button style={this.state.editOpen ? null : {display: 'none'}} onClick={this.changeEditOpen.bind(this)}
                        type="button"
                        className="btn btn-danger">Hủy
                </button>
            </form>
        );
    }
}
export default Profile