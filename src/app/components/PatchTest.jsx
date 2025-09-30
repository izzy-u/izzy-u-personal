"use client"

import CablesPatch from "./cables_react/src/CablesPatch"

export const PatchTest = () => {
    
    return (
    <>
        <CablesPatch/> 
        <CablesPatch patchDir = {"/patch"} patchOPtions = {{"glCanvasResizeToWindow": true}} /> 
    </>

    )
}