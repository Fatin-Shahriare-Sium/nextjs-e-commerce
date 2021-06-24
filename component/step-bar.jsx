import React, { useState } from 'react'

const StepBar = () => {
    let [step, setStep] = useState(0)

    function stepIncreaser() {
        if (step == 1) {
            return { width: '25%' }
        } else if (step == 2) {
            return { width: '50%' }
        } else if (step == 3) {
            return { width: '75%' }
        } else if (step == 4) {
            return { width: '100%' }
        } else {
            return { width: '0%' }
        }
    }
    return (
        <div className='step-progressbar'>
            <div className="step-progressbar__container">
                <div style={stepIncreaser()} className="progressbar" id='progress'></div>
                <div style={step >= 0 ? { border: '5px solid green' } : {}} className="progress-content">A</div>
                <div style={step >= 1 ? { border: '5px solid green' } : {}} className="progress-content">L</div>
                <div style={step >= 2 ? { border: '5px solid green' } : {}} className="progress-content">L</div>
                <div style={step >= 3 ? { border: '5px solid green' } : {}} className="progress-content">A</div>
                <div style={step >= 4 ? { border: '5px solid green' } : {}} className="progress-content">H</div>
                <div className="fake-progressbar" id='progress'></div>
            </div>
            <button onClick={() => setStep(pre => pre + 1)} >Next</button>
        </div >
    )
}

export default StepBar;
