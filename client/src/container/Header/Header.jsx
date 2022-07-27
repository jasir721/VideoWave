import React,{useState} from "react";
import "./Header.scss";
import { motion } from "framer-motion";
import styled from "styled-components";
const { v4: uuidV4 } = require('uuid')
const Button = styled.button `
  background-color: #1A5F7A;
  color: white;
  font-size:calc(1.3em + 0.390625vw);
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 20px;
  cursor: pointer;
  border-color:white;
  border-width:4px;
  position:relative;
  left:4.6vw;
  top:52.3vh;
`;

const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
  font-size:calc(1.2em + 0.390625vw);
  position:relative;
  padding:4px;
  left:8vw;
  top:53.3vh;
`;

function useInput() {
	const [value, setValue] = useState("");
	function onChange(e) {
	  setValue(e.target.value);
	}
	return {
	  value,
	  onChange,
	};
  }
const Header = () => {
	const inputProps = useInput();
	const hostHandler=()=>{
		const hash = uuidV4();
		const newPath="http://localhost:3030/";
		window.open(newPath);
	}
	const joinHandler=()=>{
		const newPath="http://localhost:3030/"+inputProps.value;
		window.open(newPath,"_self");
		console.log("joinHandler");
	}
	return (
		<div className="header_container">
			<motion.div
				className="back_motion_left"
				initial={{ x: "-100vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			></motion.div>
			<motion.div
				className="iit_pkd"
				initial={{ x: "-100vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			>
				<div className="p2">
				<Button  className="host" onClick={hostHandler}>Host</Button>
				<Button  className="join" disabled={!inputProps.value} onClick={joinHandler}>Join</Button>
				<StyledInput
					{...inputProps}
					placeholder="Room Id"/>
				</div>
			</motion.div>
			<motion.div
				className="back_motion_right"
				initial={{ x: "50vw" }}
				animate={{ x: "0vw" }}
				transition={{ duration: 1, type: "tween" }}
			></motion.div>
			<motion.div
				className="place_card"
				initial={{ y: "-100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				// <motion.div
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}
			>
				<div className="pl">Meetings</div>
			</motion.div>

			<motion.div
				className="intern_card"
				initial={{ y: "-100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}

			>
				<div className="pl">Chats</div>
			</motion.div>
			<motion.div
				className="project_card"
				initial={{ y: "+100vh" }}
				animate={{ y: "0vw" }}
				transition={{ duration: 2, type: "tween" }}
				whileHover={{ 
					scale: 1.05, 
					transition: { duration: 1 } 
				}}
			>
				<div className="pl">Connect with peers</div>
			</motion.div>
		</div>
	);
};

export default Header;
