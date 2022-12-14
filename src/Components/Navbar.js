import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nav">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="/about">{props.aboutTextUtils}</a>
                        </li>

                    </ul>
                    <div className="diffBack px-2 mx-2" style={{border:'1px solid black', borderRadius:'10px'}} >
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="grey" value="option2" style={{ background: 'grey' }} onClick={props.backGrey} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Grey</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="green" value="option2" style={{ background: '#c45dcb' }} onClick={props.backGreen} />
                            <label className="form-check-label" htmlFor="inlineRadio2">Pink</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="red" value="option1" style={{ background: '#62b7b7' }} onClick={props.backRed} />
                            <label className="form-check-label" htmlFor="inlineRadio1">Cyan</label>
                        </div>
                    </div>



                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.enableText}</label>
                    </div>
                </div>
            </div>



        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,  // title of react app is necessary (must be there)
    aboutTextUtils: PropTypes.string,
}
Navbar.defaultProps = {
    title: "Set Title Here",
    aboutTextUtils: "Set About Info"
}