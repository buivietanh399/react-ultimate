
import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus} from 'react-icons/fc';
import { toast } from 'react-toastify';
import { postCreateNewUser } from '../../../services/apiServices';



const ModalCreateUser = (props) => {
  const {show, setShow} = props;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  

  const handleClose = () => {
      setShow(false);
      setEmail("");
      setPassword("");
      setUsername("");
      setRole("USER");
      setImage("");

  }

  const handleUploadImage = (event) => {
      if (event.target && event.target.files && event.target.files[0]) {
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
      }     
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };


  const handleSubmitCreateUser  = async () => {
    
    //validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }


    if (!password) {
      toast.error("Invalid password");
      return;
    }

    let res = await postCreateNewUser(email, password, username, role, image);
    
    console.log("component res: ", res);

    if ((res.data!==0) && res.data.EC === 0) {
      toast.success(res.data.EM);
      handleClose();
    }

    if (res.data && res.data.EC !==0) {
      toast.error(res.data.EM);
    }

  }
    



  return (
    <>

      <Modal 
        show={show} 
        onHide={handleClose}  
        size = "xl"
        backdrop = "static"
        className="modal-add-user"
        >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form className="row g-3">
                <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      value = {email}
                      onChange = {(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" value={password} autoComplete="current-password"
                            onChange = {(event) => setPassword(event.target.value)}
                    />
                </div>
               
            
                <div className="col-md-6">
                    <label  className="form-label">Username</label>
                    <input type="text" className="form-control" value={username} 
                           onChange = {(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Role</label>
                    <select  className="form-select">
                        <option value = "USER">User</option>
                        <option value = "ADMIN">Admin</option>
                    </select>
                </div>

                <div className= "col-md-12" >
                    <label className = "form-label label-upload" htmlFor='labelUpload'>
                      <FcPlus/> Upload File Image
                    </label>
                    <input 
                      type = "file" 
                      id = "labelUpload" 
                      hidden 
                      onChange = {(event) => handleUploadImage(event)} 
                    />
                   
                </div>

                <div className="col-md-12 img-preview" >
                  { previewImage ? 
                    <img src = {previewImage} /> 
                    :
                    <span>Preview Image</span>
                  }
                    
                </div>
          
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;