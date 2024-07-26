import React from "react";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log( "Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div className="text-center">
        {/* <User name={"Amit (functional)"} /> */}

        <UserClass/>
        {/* <UserClass name={"Amit 2 (Classy)"} />
        <UserClass name={"Amit 3 (Classy)"} /> */}
      </div>
    );
  }
}

export default About;
