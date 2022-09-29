import React from 'react';

const Work = ({ item, i }) => {
    return (
        <div key={i} className="journey-item-work">
            <h3 className="journey-item-title">
                {item.title}
            </h3>
            <span className="journey-item-year">
                {item.role} {item.typeOfJob}, {item.year}
            </span>
            <div className='journey-desc-items'>
                {item.description.map((desc, descIdx) => (
                    <div key={descIdx} className='desc-item'>
                        <span>
                            - {desc}
                        </span>
                    </div>
                ))}
            </div>
            <div className='journey-projects'>
                <span>
                    Lift of contributed projects:
                </span>
                {item.projects.map((project, projectIdx) => (
                    <div key={projectIdx} className="journey-project">
                        <a href={project.url} target="_blank" rel="noopener noreferrer">{project.text}</a>
                        <span>{projectIdx === item.projects.length - 1 ? "" : ", "}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;