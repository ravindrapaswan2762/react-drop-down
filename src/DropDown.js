import React, { useState } from "react";
import styles from './DropDown.module.css';
import { Options } from "./Options";

const data = ["Yes", "Probably Not", "I Don't Know", "MongoDB", "ExpressJS", "ReactJS", "NodeJS"];

export function DropDown() {

    const [option, setOption] = useState("");
    const [isHovered, setHovered] = useState(false);

    const handleEnter = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    return (
        <div className={styles.container}>
            
            <p className={styles.bold}>Should you use dropdown?</p>

            <div
                className={`${styles.select} ${isHovered ? styles.hovered : ""}`}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
            >
                <div className={styles.selectedOption}>
                    {option || "Select"}
                </div>
                {isHovered && <Options options={data} setOption={setOption} setHovered={setHovered}/>}
                
            </div>

            <p className={styles.para}>
                Selected Option: <span className={styles.bold}>{option}</span>
            </p>
        </div>
    );
}
