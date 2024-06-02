import React, {useState, useEffect} from "react";
import CoffeeData from "./src/data/CoffeeData";
import BeansData from "./src/data/BeansData";

interface IFave {
    type: string;
    id: string;
}

const play = () => {
    const CoffeeList = CoffeeData;
    const BeanList = BeansData;
    const FaveList = [];
    //const [FaveList, setFaveList] = useState([]);

    const addToFav = ({type, id}: IFave) => {
        if (type == "Coffee") {
            for (let i = 0; i < CoffeeList.length; i++) {
                if (CoffeeList[i].id == id && CoffeeList[i].favourite == false) {
                    (CoffeeList[i].favourite = true), FaveList.unshift(CoffeeList[i].id);
                    // setFaveList(item => [CoffeeList[i].id, ...item])
                } else CoffeeList[i].favourite = false;
            }
        } else if (type == "Bean") {
            for (let i = 0; i < BeanList.length; i++) {
                if (BeanList[i].id == id && BeanList[i].favourite == false) {
                    (BeanList[i].favourite = true), FaveList.unshift(BeanList[i].id);
                    // setAddToFavList(item => [CoffeeList[i].id, ...item])
                } else BeanList[i].favourite = false;
            }
        }
    };

    const removeFromList = ({type, id}: IFave) => {
        if (type == "Coffee") {
            for (let i = 0; i < CoffeeList.length; i++) {
                if (CoffeeList[i].id == id && CoffeeList[i].favourite == true) {
                    CoffeeList[i].favourite = false;
                    // setAddToFavList(item => [CoffeeList[i].id, ...item])
                } else CoffeeList[i].favourite = true;
            }
        } else if (type == "Bean") {
            for (let i = 0; i < BeanList.length; i++) {
                if (BeanList[i].id == id && BeanList[i].favourite == true) {
                    BeanList[i].favourite = false;
                    // setAddToFavList(item => [CoffeeList[i].id, ...item])
                } else BeanList[i].favourite = true;
            }
        }

        let spliceIndex = -1;
        for (let i = 0; i < FaveList.length; i++) {
            if (FaveList[i].id == id) {
                spliceIndex = i;
            }
        }
        FaveList.splice(spliceIndex, 1);
    };
};

export default play;
