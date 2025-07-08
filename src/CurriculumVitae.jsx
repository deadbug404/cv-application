import "./CurriculumVitae.css";
import { useState } from "react";
import { InputWithLabel, TextAreaWithLabel } from "./FormControllers"
import { changePicture, updateData } from "./listeners";
import DefaultProfilePic from "./assets/defaultProfile.jpg"

function CurriculumVitae(){
    const [profilePicture, setPicture] = useState(DefaultProfilePic)
    const [contactArr, setContact] = useState({phoneNumber:"",email:"",address:""})
    const [personalInfoArr, setPersonalInfo] = useState({name:"",position:""});
    const [introduction, setIntroduction] = useState("");
    const [educationArr, setEducation] = useState({});
    const [skillArr, setSkill] = useState({});
    const [workExperienceArr, setWorkExperience] = useState({});
    const [color, changeColor] = useState("#143264")

    const [educationComponentArr, addEducationComponent] = useState([]);
    const [skillComponentArr, addSkillComponent] = useState([]);
    const [workExperienceComponentArr, addWorkExperienceComponent] = useState([]);

    function addEducation(){
        const educationCount = educationComponentArr.length+1;
        addEducationComponent(prev => [...prev, 
        [<InputWithLabel key={"schoolName"+educationComponentArr.length} id={"schoolName"+educationCount} label="School Name: " stateFunc={setEducation}></InputWithLabel>,
        <InputWithLabel key={"schoolYear"+educationComponentArr.length} id={"schoolYear"+educationCount} label="School Year: " stateFunc={setEducation}></InputWithLabel>,
        <InputWithLabel key={"schoolCourse"+educationComponentArr.length} id={"schoolCourse"+educationCount} label="Course: " stateFunc={setEducation}></InputWithLabel>]]);
    }

    function addSkill(){
        addSkillComponent(prev => [...prev, <InputWithLabel key={"skill"+skillComponentArr.length} id={"skill"+(skillComponentArr.length+1)} label={"Skill "+(skillComponentArr.length+1)+": "} className="skill" stateFunc={setSkill}></InputWithLabel>]);
    }

    function addWorkExperience(){
        const workCount = workExperienceComponentArr.length+1;
        addWorkExperienceComponent(prev => [...prev, 
            [<InputWithLabel key={"companyName"+workExperienceComponentArr.length} id={"companyName"+workCount} label="Company Name: " className="workExperience" stateFunc={setWorkExperience}></InputWithLabel>,
            <InputWithLabel key={"companyPosition"+workExperienceComponentArr.length} id={"companyPosition"+workCount} label="Company Position: " stateFunc={setWorkExperience}></InputWithLabel>,
            <InputWithLabel key={"companyWorkingDate"+workExperienceComponentArr.length} id={"companyWorkingDate"+workCount} label="Working Date: " stateFunc={setWorkExperience}></InputWithLabel>,
            <TextAreaWithLabel key={"companyDescription"+workExperienceComponentArr.length} id={"companyDescription"+workCount} label="Description: " stateFunc={setWorkExperience}></TextAreaWithLabel>]
        ])
    }

    return(
        <>
            <form>
                <h4>Color</h4>
                <input type="color" value={color} onChange={(event) => {changeColor(event.target.value)}}/>
                <h4>Picture</h4>
                <input type="file" id="profilePicture" accept="image/*" onChange={(event)=>{changePicture(event,setPicture)}}/>
                <h4>Contacts</h4>
                <InputWithLabel id="name" label="Name: " stateFunc={setPersonalInfo}></InputWithLabel>
                <InputWithLabel id="position" label="Position: " stateFunc={setPersonalInfo}></InputWithLabel>
                <InputWithLabel id="phoneNumber" label="Phone Number: " stateFunc={setContact}></InputWithLabel>
                <InputWithLabel id="email" label="Email: " stateFunc={setContact}></InputWithLabel>
                <InputWithLabel id="address" label="Address: " stateFunc={setContact}></InputWithLabel>
                <h4>Introduction</h4>
                <textarea name="introduction" id="introduction" onChange={(event)=>{updateData(event,"",setIntroduction)}}></textarea>
                <h4>Education</h4>
                {educationComponentArr.map(education => education)}
                <button className="addButton" onClick={addEducation} type="button">+</button>
                <h4>Skills</h4>
                {skillComponentArr.map(skill => skill)}
                <button className="addButton" onClick={addSkill} type="button">+</button>
                <h4>Work Experience</h4>
                {workExperienceComponentArr.map(workExperience => workExperience)}
                <button className="addButton" onClick={addWorkExperience} type="button">+</button>
            </form>
            <div id="container">
                <div id="template">
                    <div id="left" style={{backgroundColor:color}}>
                        <img src={profilePicture} alt="profile picture" id="profilePicture"/>
                        <h5>CONTACT</h5>
                        <hr />
                        <p>{contactArr["phoneNumber"]}</p>
                        <p>{contactArr["email"]}</p>
                        <p>{contactArr["address"]}</p>
                        <h5>EDUCATION</h5>
                        <hr />
                        {educationComponentArr.map((component,index) => {
                            return(
                                <div className="education" key={"Education"+index+"Div"}>
                                    <p>{educationArr["schoolYear"+(index+1)]}</p>
                                    <p>{educationArr["schoolName"+(index+1)]}</p>
                                    <p><span className="bulletPoint">•</span>{educationArr["schoolCourse"+(index+1)]}</p>
                                </div>
                            )
                        })}
                        <h5>SKILLS</h5>
                        <hr />
                        {skillComponentArr.map((skill,index) => {
                            return(
                                <p key={"skill"+index+"P"}><span className="bulletPoint">•</span>{skillArr["skill"+(index+1)]}</p>
                            )
                        })}
                    </div>
                    <div id="right">
                        <div id="personalInfo">
                            <h1>{personalInfoArr["name"]}</h1>
                            <h3>{personalInfoArr["position"]}</h3>
                            <hr />
                        </div>
                        <div id="introductionCV">
                            <h4>Profile</h4>
                            <hr />
                            <p>{introduction}</p>
                        </div>
                        <div id="workExperienceCV">
                            <h4>Work Experience</h4>
                            <hr />
                            {workExperienceComponentArr.map((component,index) => {
                                return(
                                    <div key={"workExperience"+index+"Div"}>
                                        <div>
                                            <p>{workExperienceArr["companyName"+(index+1)]}</p>
                                            <p>{workExperienceArr["companyWorkingDate"+(index+1)]}</p>
                                        </div>                                       
                                        <p>{workExperienceArr["companyPosition"+(index+1)]}</p>
                                        <p>{workExperienceArr["companyDescription"+(index+1)]}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export {CurriculumVitae}