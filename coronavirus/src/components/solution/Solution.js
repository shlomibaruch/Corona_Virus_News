import React from 'react'
import './solution.css'
export default function Solution() {
    return (
        <div className='solutionContainer'>
            <div id="container">
                <div className="row ">
                    <div className="col solutionColumn " id='washHands'>
                        <div className="HoverSolutionContainer">
                            <div>
                                <h3>Clean your hands often</h3>
                                <button><a href='https://www.clalit.co.il/he/your_health/family/PublishingImages/Pages/covid19_prevention/hands2.jpg' target='_blank'>click</a> </button>
                            </div>
                        </div>
                    </div>

                    <div className="col solutionColumn" id='towMeter'>
                        <div className="HoverSolutionContainer">
                            <h3>Keep 2 feet from each other</h3>

                            <button><a href='https://www.clalit.co.il/he/your_health/family/PublishingImages/Pages/covid19_prevention/hands2.jpg' target='_blank'>click</a> </button>
                        </div>

                    </div>
                    <div className="col solutionColumn" id='AvoidNoseContact'>
                        <div className="HoverSolutionContainer">
                            <h3>Avoid contact with nose, mouth and eyes</h3>

                            <button><a href='https://www.clalit.co.il/he/your_health/family/PublishingImages/Pages/covid19_prevention/hands2.jpg' target='_blank'>click</a> </button>
                        </div>

                    </div>

                    <div className="w-100"></div>
                    <div className="col solutionColumn" id='MaintainHygiene'>
                        <div className="HoverSolutionContainer">
                            <h3>Maintain Hygiene</h3>

                            <button><a href='https://www.clalit.co.il/he/your_health/family/PublishingImages/Pages/covid19_prevention/hands2.jpg' target='_blank'>click</a> </button>
                        </div>

                    </div>
                    <div class="col solutionColumn" id='sneeze-to-the-elbow'>
                        <div class="HoverSolutionContainer">
                            <h3></h3>

                            <button><a href='https://www.clalit.co.il/he/your_health/family/PublishingImages/Pages/covid19_prevention/hands2.jpg' target='_blank'>click</a> </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
