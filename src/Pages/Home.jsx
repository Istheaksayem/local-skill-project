import React, { useEffect, useState } from 'react';
import SkillCard from '../component/SkillCard/SkillCard';

const Home = () => {
    const [skills,setSkills]=useState([])
    useEffect(()=>{
        fetch("/skillData.json")
        .then(res => res.json())
        .then(data =>{
            setSkills(data)
        })
    },[])
    return (
        <div>
            <h2 className='text-3xl font-bold text-center'>Popular Skills</h2>
            <div className='grid md:grid-cols-3 gap-6'>
           {skills.map((skill) => (
        <SkillCard key={skill.skillId} skill={skill} />
      ))}

            </div>
        </div>
    );
};

export default Home;