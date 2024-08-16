import React from "react";
import ProjCards from "./ProjCards";
import { motion } from "framer-motion";

const projs = [
    {
        i: 1,
        i_url: "images/projects/wikiguess.png",
        h_url: "http://wikiguess.us-east-1.elasticbeanstalk.com",
        g_url: "https://github.com/randyydoo/WikiGuess",
        name: "Wiki Guess",
        description: "A full-stack web application game where users guess AI-generated versus Wikipedia text."
    },
    {
        i: 2,
        i_url: "images/projects/cs_outline.png",
        h_url: "",
        g_url: "https://github.com/randyydoo/Syllamizer",
        name: "Syllabus Simplified",
        description: "Automated software for students to condense multiple syllabus documents into a concise single-page using PyTorch and Natural Language Processing (NLP)."
    },
    {
        i: 3,
        i_url: "images/projects/digit_class.png",
        h_url: "",
        g_url: "https://github.com/randyydoo/NumericalClassifier",
        name: "Numerical Classifier",
        description: "A software that accurately predicts the number for handwritten digits using TensorFlow and Keras."
    },
    {
        i: 4,
        i_url: "images/projects/network_socket.png",
        h_url: "",
        g_url: "https://github.com/randyydoo/SocketCommunicator",
        name: "Web Socket Communication",
        description: " Inter-Process Communication system using UDP sockets that allows multiple machines to send and receive data to one another."
    }
];


const Projects = () => {
    return (
        <>
                <h2 className="text-center text-5xl font-bold text-green-500 mt-4 mb-8 md:mb-12">My Projects</h2>
                <div className="flex flex-row justify-center items-center gap-2 py-6">
                    <div>
                        {projs.map((projs) => <ProjCards
                            key={projs.i}
                            imgURL={projs.i_url}
                            title={projs.name}
                            desc={projs.description}
                            hrefURL={projs.h_url}
                            gitURL={projs.g_url} />)}
                    </div>
                </div>
            </>

    )
}
export default Projects;