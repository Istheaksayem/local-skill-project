import React, {  } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SkillsDetailsCard from '../component/SkillsDetailsCard';


const SkillDetails = () => {
    const data = useLoaderData();
    const {id} = useParams()
    // const [skills, setSkills] = useState({})
    // console.log(data, id, skills)

   
        const skillDetails =data.find((singleSkills) =>singleSkills.skillId==id)
        console.log(skillDetails)
        // setSkills(skillDetails)

    return (
        <div>
            <h2>Skills Details</h2>
           
            <SkillsDetailsCard skillDetails={skillDetails}></SkillsDetailsCard>
        </div>
    );
};

export default SkillDetails;