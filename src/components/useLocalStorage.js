import { useEffect } from "react";
import { useState } from "react";

const useLocalStorage = (stateVar, value) => {
    const setState = (text) => {
        localStorage.setItem(stateVar, text);
    }

    const state = localStorage.getItem(stateVar);

    return [state, setState]
};

export default useLocalStorage;
