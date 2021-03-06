//DEPENDENCIES
import React, { Fragment ,useState, useEffect} from 'react';

//COMMON ELEMENTS
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import IconModal from '../IconModal';
import Button from '../../../elements/Buttons';
import Input from '../../../elements/Input/Input';

//STYLES
import './style_module.css';


export default function EditChildModal (props) {

    const [Icon, setIcon] = useState('') 
    const [isIconModalOpen, setIsIconModalOpen] = useState(false)
    const [childData, setChildData] = useState({})

    const toggleIconModal = (e) => {
        e.preventDefault()
        setIsIconModalOpen(!isIconModalOpen)
    }

    useEffect(() => {
        setChildData(props.childData)
    },[props.childData, props.isModalOpen])

    const addIcon = async icon => {
        setIcon(icon)
        setIsIconModalOpen(!isIconModalOpen)
    }

    const handleChange = e => {
        setChildData({...childData,[e.target.name]:e.target.value})
    }

    const submit = (e) => {
        e.preventDefault()
        props.update(childData)
    }

    return (
        <Fragment>
            <MDBContainer >
            <form onSubmit={submit}>
            <MDBModal isOpen={props.isModalOpen} toggle={props.toggleModal}>
                <MDBModalHeader toggle={props.toggleModal}>Edit Child's Details</MDBModalHeader>
                <MDBModalBody className='editForm'>
                    <Input 
                        required = {true}
                        placeholder ="Child's Name"
                        name ="name"
                        type ="text" 
                        value={childData.name}
                        onChange= {handleChange}
                    />

                    <div className='dobInput'>
                        <label htmlFor='bDay' className='dob'>DOB</label>
                        <Input 
                            required = {true}
                            name ="bDay"
                            type ="date" 
                            value={childData.bDay}
                            onChange= {handleChange}
                        />
                    </div>

                    <Input 
                        required = {true}
                        placeholder ="Maximum Screen Time (minutes)"
                        name ="maxScreenTime"
                        type ="number" 
                        value={childData.maxScreenTime}
                        onChange= {handleChange}
                    />

                    <div className='iconInput'>
                        <Input 
                            required = {true}
                            placeholder ="Select An Icon" 
                            name ="icon"
                            type ="text" 
                            value={childData.icon}
                            onChange= {handleChange}
                        />
                        <Button id='iconBtn' size='small' onClick={toggleIconModal} text ='Icon'/>
                    </div>
                </MDBModalBody>
                <MDBModalFooter>
                <Button type="submit" text='Update' id="editBtn" size='small'/>
                </MDBModalFooter>
            </MDBModal>
            </form>
        </MDBContainer>
        <IconModal 
            isIconModalOpen = {isIconModalOpen}
            toggleIconModal = {toggleIconModal}
            addIcon = {addIcon}
            handleChange = {handleChange}
        />
    </Fragment>
    )
}

