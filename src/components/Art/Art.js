import React from "react";
import './Art.css';

function Art() {
    return (
        <div id="/art">
            <div className="Art">
                <h1>Art</h1>
                <div className="Row">
                    <div className="Column">
                        <img src='./images/art/mountain.jpg' style={{ width: '100%' }} alt="Art of mountain" />
                        <p>Mountains&nbsp; | &nbsp;Watercolour</p>
                        <img src='./images/art/roadtrip.jpg' style={{ width: '100%' }} alt="Art of highway" />
                        <p>Roadtrip&nbsp; | &nbsp;Oil pastel</p>
                        <img src='./images/art/water.jpg' style={{ width: '100%' }} alt="Art of waterfall" />
                        <p>Waterfall&nbsp; | &nbsp;Acrylic</p>
                    </div>
                    <div className="Column">
                        <img src='./images/art/equilibrium.jpeg' style={{ width: '100%' }} alt="Art of fruits" />
                        <p>Equilibrium&nbsp; | &nbsp;Pencil</p>
                        <img src='./images/art/winter.jpg' style={{ width: '100%' }} alt="Art of winter forest" />
                        <p>A Winter Stroll&nbsp; | &nbsp;Acrylic</p>
                        <img src='./images/art/primary.jpg' style={{ width: '100%' }} alt="Spill art" />
                        <p>Primary Colours&nbsp; | &nbsp;Acrylic</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Art

