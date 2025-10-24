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
            <h2 className='font-semibold text-center mt-3 text-2xl'>Skills <span className='text-blue-600'>Details</span></h2>
           
            <SkillsDetailsCard skillDetails={skillDetails}></SkillsDetailsCard>
        </div>
    );
};

export default SkillDetails;