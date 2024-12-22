import React from "react";
import ClassComponen from "./pembahasan/ClassComponen";
import FunctionalComponen from "./pembahasan/FunctionalComponen";


export default class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponen nama= 'Jaka Sembung'/>
                <FunctionalComponen nama= "jaka sembung"/>
            </div>
        )
    }
}