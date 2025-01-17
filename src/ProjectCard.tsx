import { useState, useRef } from "react";
import Masonry from "react-masonry-css";

import "./ProjectCard.css"

import mobo_1 from "./assets/mobo_1.png"
import mobo_2 from "./assets/mobo_2.png"
import mobo_3 from "./assets/mobo_3.png"
import mobo_4 from "./assets/mobo_4.png"
import mobo_5 from "./assets/mobo_5.png"

import django_1 from "./assets/django_1.png"
import django_2 from "./assets/django_2.png"
import django_3 from "./assets/django_3.png"

import machineL_1 from "./assets/machineL_1.png"
import machineL_2 from "./assets/machineL_2.png"

import dataAnalysis_1 from "./assets/dataAnalysis_1.png"
import dataAnalysis_2 from "./assets/dataAnalysis_2.png"
import dataAnalysis_3 from "./assets/dataAnalysis_3.png"
import dataAnalysis_4 from "./assets/dataAnalysis_4.png"

import ytTracker_1 from "./assets/ytTracker_1.png"
import ytTracker_2 from "./assets/ytTracker_2.png"
import ytTracker_3 from "./assets/ytTracker_3.png"
import ytTracker_4 from "./assets/ytTracker_4.png"

function ProjectCard() {
    // Auxiliary Variables

    const breakpointColumns = {
        default: 1, // Default number of columns
      };


    // STATE AND REF declarations

    const cardRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    // A list of projects with their name, image, and description
    // Grab each element from data_array and build a card for each project.
    const [dataArray, setDataArray] = useState([
        {
            id: 0, 
            name: "UniFood", 
            image: [mobo_1, mobo_2, mobo_3, mobo_4, mobo_5], 
            description: "Mobile application made with Flutter that allows users to keep track of their purchases, list their groceries, locate and rate grocery stores, and see the nutritional value of their purchases.",
            isExpanded: true,
        },
        {
            id: 1, 
            name: "Stress Level Predictor", 
            image:[machineL_1, machineL_2], 
            description: "Machine learning project that predicts the stress level based on given features. Backend made with Torch and Django. Frontend made with Django template engine.",
            isExpanded: false,
        },
        {
            id: 2, 
            name: "Retail Dataset Analysis", 
            image: [dataAnalysis_1, dataAnalysis_2, dataAnalysis_3, dataAnalysis_4], 
            description: "Data analysis on retail transactions. Explores trends within the customer base, products sold, countries, and more.",
            isExpanded: false,
        },
        {
            id: 3, 
            name: "Django Deployment", 
            image: [django_1, django_2, django_3], 
            description: "Deployed Django Project. It works as a catalog website that allows for CRUD operations.",
            isExpanded: false,
        },
        {
            id: 4, 
            name: "Delete/Private Playlist Video Helper", 
            image: [ytTracker_1, ytTracker_3, ytTracker_4, ytTracker_2], 
            description: "Prototype project. It helps record videos titles to catch any deleted or 'privated' video. So far, it is a CLI app.",
            isExpanded: false,
        },
    ])

    // FUNCTIONS

    const toggleExpanded = (id: number) => {
        setDataArray(dataArray.map((project) => {
            if (project.id === id) {
                return { ...project, isExpanded: !project.isExpanded };
            }
            return project;
        }));
        setTimeout(() => {
      if (cardRefs.current[id] && !dataArray[id].isExpanded) { 
        cardRefs.current[id].scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "start", // Align the top of the element to the top of the viewport
        });
      }
    }, 100); // Delay to match the transition duration
  };

  const handleImageClick = (imageSrc: string) => {
    setExpandedImage(imageSrc);
  };

  return (
    <>
      <div id="section-project" className="project-card-container">
        {dataArray.map((project) => (
          <div
            key={project.id}
            className={`project-card`}
            ref={(el) => (cardRefs.current[project.id] = el)}
          >
            <div 
              className="card-name"
              onClick={() => toggleExpanded(project.id)}
            >
              <h2 
                style={{
                  rotate: project.isExpanded ? "90deg" : "0deg",
                  marginLeft: "10px",
                }}
              >
                &rsaquo;
              </h2>
              <h2>&nbsp;{project.name}</h2>
            </div>
            <p className="description">{project.description}</p>
            {project.isExpanded && (
              <Masonry
                breakpointCols={breakpointColumns}
                className="masonry-grid"
                columnClassName="masonry-grid-column"
              >
                {project.image.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    loading="lazy"
                    alt="project image"
                    className={`masonry-image cursor-pointer hover:opacity-90 transition-opacity project-${project.id}`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </Masonry>
            )}
          </div>
        ))}
      </div>

      {/* Expanded Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setExpandedImage(null)}
        >
          <div 
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute -top-4 -right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
            >
              <div>X</div>
            </button>
            <img 
              src={expandedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectCard;