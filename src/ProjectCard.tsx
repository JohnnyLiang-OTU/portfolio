import "./ProjectCard.css"
import { useState } from "react";
import mobo_1 from "./assets/mobo_1.png"
import mobo_2 from "./assets/mobo_2.png"
import mobo_3 from "./assets/mobo_3.png"
import mobo_4 from "./assets/mobo_4.png"
import mobo_5 from "./assets/mobo_5.png"

function ProjectCard() {
    // A list of projects with their name, image, and description
    // Grab each element from data_array and build a card for each project.

    const [dataArray, setDataArray] = useState([
        {id: 0, name: "UniFood", image: [mobo_1, mobo_2, mobo_3, mobo_4, mobo_5], isExpanded: true,
            description: "Mobile application made with Flutter that allows users to keep track of their purchases, list their groceries, locate and rate grocery stores, and see the nutritional value of their purchases."},
        {id: 1, name: "Stress Level Predictor", image:[], isExpanded: false,
            description: "Machine learning project that predicts the stress level based on given features. Backend made with Torch and Django. Frontend made with Django template engine."},
        {id: 2, name: "Retail Dataset Analysis", image: [], isExpanded: false,
            description: "Data analysis on retail transactions. Explores trends within the customer base, products sold, countries, and more."},
        {id: 3, name: "Django Deployment", image: [], isExpanded: false,
            description: "Deployed Django Project. It works as a catalog website that allows for CRUD operations."},
    ])

    const toggleExpanded = (id: number) => {
        setDataArray(dataArray.map((project) => {
            if (project.id === id) {
                return { ...project, isExpanded: !project.isExpanded };
            }
            return project;
        }));
    };

    return (
        <div className="project-card-container">
            {dataArray.map((project) => (
                <div key={project.id} className="project-card" onClick={() => toggleExpanded(project.id)}>
                    <div className="card-name">
                        <p style={{rotate: project.isExpanded ? '90deg' : '0deg'}}>&rsaquo;</p>
                        <h2>&nbsp;{project.name}</h2>
                    </div>

                    <div className="card-images"
                    style={{
                        maxHeight: project.isExpanded ? '500px' : '0',
                        opacity: project.isExpanded ? 1 : 0,
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease, opacity 0.3s ease',
                        margin: project.isExpanded ? '16px 0' : '0',
                      }}    >
                    {project.image.map((image) => (
                        <img src={image} alt="project image" />
                    ))}
                    </div>

                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    );

}

export default ProjectCard;