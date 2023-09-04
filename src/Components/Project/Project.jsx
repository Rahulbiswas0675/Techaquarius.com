import React from 'react';
import './project.scss';
import fireimg from '../../Images/Elements/fire.png';
import designimg from '../../Images/Elements/design.png';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ProjectData, ProjectDesign } from '../../DataBase/ProjectItems';
import projectImg from '../../Images/Projects/roadserve-hero.png';

function Project() {
  return (
    <div className='project-components'>
      <div className="project-container">
        <div className="top-container">
          <div className="left-box">
            <h3 className="heading">POPULAR DESIGN</h3>
            <img src={designimg} alt="designimg" className='designimg' />
          </div>
          <div className="right-box">
            <div className="our-text">
              <h3 className="text-our">Our</h3>
            </div>
            <h3 className="project-text">Projects</h3>
            <img src={fireimg} alt="fireimg" className='fireimg' />
          </div>
        </div>

        <div className="project-container">
          <h4 className="heading">Recent Work -</h4>
          <div className="items">
            {
              ProjectData.map((item, index) => (
                <div className={`project-box project-box${index + 1}`} key={index}>
                  <img src={item.image} alt={item.name} className='projectImg' />

                  <a href={item.link} target='blank' className="buttons-box">
                    <RemoveRedEyeIcon className='view-btn btn1' />
                  </a>
                </div>
              ))
            }
          </div>
        </div>



        <div className="project-container">
          <h4 className="heading">Popular Design -</h4>
          <div className="items">
            {
              ProjectDesign.map((item, index) => (
                <div className={`project-box project-box${index + 1}`} key={index}>
                  <img src={item.image} alt={item.name} className='projectImg' />

                  <a href={item.link} target='blank' className="buttons-box">
                    <RemoveRedEyeIcon className='view-btn btn1' />
                  </a>
                </div>
              ))
            }
          </div>
        </div>



      </div>
    </div>
  )
}

export default Project;