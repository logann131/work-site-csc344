import styled from "styled-components";
import portfolioImg from "../../images/Projects/Portfolio2.PNG";
import animalGame from "../../images/Projects/AnimalGame.PNG";
import driveThru from "../../images/Projects/DriveThru.PNG";
import worldTime from "../../images/Projects/WorldTime.PNG";
import pizzaOrder from "../../images/Projects/PizzaOrder.PNG";
import toyStore from "../../images/Projects/ToyStore.PNG";
import { device } from "../DeviceSizes/DeviceSizes";

export const ProjectsContainer = styled.div`
  z-index: 100;
  color: #fff;
  background: #7510f7;
  position: relative;
  height: 1000px;
  margin-top: -190px;
  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    height: 1500px;
  }
  @media ${device.mobileL} {
    height: 2000px;
  }
`;
export const ProjectsWrapper = styled.div`
  z-index: 500;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #7510f7;
  height: 100%;
`;
export const ProjectsH1 = styled.h1`
  font-size: 36px;
  font-family: "Rubik", sans-serif;
`;
export const ProjectsRow = styled.div`
  margin-top: 5%;
  width: 80%;
  font-size: 20px;
  display: grid;
  grid-template-columns: auto auto auto;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: auto auto;
  }
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
export const ProjectInfo = styled.span`
  font-family: sans-serif;
  height: 260px;
  width: 300px;
  position: absolute;
  display: flex;
  opacity: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: none;
  transition: opacity 0.7s;
  background-color: #fff;
`;

export const ProjectH1 = styled.h1`
  font-size: 30px;
  color: #000;
  font-family: "Lato", sans-serif;
  font-weight: bold;
`;
export const ProjectP = styled.p`
  font-size: 17px;
  color: #00b793;
  margin-top: 3px;
  font-weight: normal;
  font-family: "Ubuntu", sans-serif;
`;
export const ProjectButton = styled.button`
  height: 30px;
  width: 110px;
  border-radius: 10px;
  border: 1px solid #7510f7;
  color: #7510f7;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #7510f7;
    color: #fff;
  }
`;
export const Project1Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${portfolioImg}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project2Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${animalGame}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project3Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${driveThru}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project4Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${worldTime}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project5Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${pizzaOrder}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project6Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  background: url(${toyStore}) 100% / cover no-repeat;
  background-position: center;
  background-size: cover;
`;
export const Project = styled.div`
  height: 260px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    ${ProjectInfo} {
      opacity: 1;
    }
    ${Project1Background}, ${Project2Background}, ${Project3Background} , ${Project4Background}, ${Project5Background}, ${Project6Background} {
      transform: scale(1.1);
    }
  }
`;
