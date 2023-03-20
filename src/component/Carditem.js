import React from 'react'
import digital1 from '../img/digital1.jpg'
import character2 from '../img/character2.jpg'
import character3 from '../img/character3.jpg'
import sketches4 from '../img/sketches4.jpg'
import wildlife5 from '../img/wildlife5.jpg'
import ScrollToTop from 'react-scroll-to-top'

export default function cardItem() {
    return (<>
        <div className="card-container">
            <div className="manage-card">
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={digital1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Digital</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={character2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Character</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card " style={{ "width": "18rem" }}>
                        <img src={character3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Perfomance</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }}>
                        <img src={sketches4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">sketches</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }} >
                        <img src={wildlife5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Wildlife</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }} >
                        <img src={character2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Character</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card " style={{ "width": "18rem" }} >
                        <img src={character3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">Perfomance</h2>
                        </div>
                    </div>
                </div>
                <div className='outer-card'>
                    <div className="card" style={{ "width": "18rem" }} >
                        <img src={sketches4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2 className="card-text">sketches</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <ScrollToTop smooth color='black' />
        </footer>
    </>

    )
}
