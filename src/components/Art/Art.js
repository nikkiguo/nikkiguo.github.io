import React from "react";
import './Art.css';
import Fade from 'react-reveal/Fade';

function Art() {
    return (
        <div id="/art">
            <div className="Art">
                <h1>Art</h1>
                <div className="Row">
                    <div className="Column">
                        <Fade duration={1500}>
                            <img src='./images/art/mountain.jpg' style={{ width: '100%' }} alt="Art of mountain" />
                            <p>Mountains&nbsp; | &nbsp;Watercolour</p>
                        </Fade>
                        <Fade duration={1500}>
                            <img src='./images/art/roadtrip.jpg' style={{ width: '100%' }} alt="Art of highway" />
                            <p>Roadtrip&nbsp; | &nbsp;Oil pastel</p>
                        </Fade>
                        <Fade duration={1500}>
                            <img src='./images/art/water.jpg' style={{ width: '100%' }} alt="Art of waterfall" />
                            <p>Waterfall&nbsp; | &nbsp;Acrylic</p>
                        </Fade>
                    </div>
                    <div className="Column">
                        <Fade duration={1500}>
                            <img src='./images/art/equilibrium.jpeg' style={{ width: '100%' }} alt="Art of fruits" />
                            <p>Equilibrium&nbsp; | &nbsp;Pencil</p>
                        </Fade>
                        <Fade duration={1500}>
                            <img src='./images/art/winter.jpg' style={{ width: '100%' }} alt="Art of winter forest" />
                            <p>A Winter Stroll&nbsp; | &nbsp;Acrylic</p>
                        </Fade>
                        <Fade duration={1500}>
                            <img src='./images/art/primary.jpg' style={{ width: '100%' }} alt="Spill art" />
                            <p>Primary Colours&nbsp; | &nbsp;Acrylic</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Art

