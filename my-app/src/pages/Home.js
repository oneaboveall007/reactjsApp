import React from 'react'
import './Home.css'
export default function Home() {
    return (
        <>
            <div className="container-fluid home">
                <div className="row r1">
                    <div className="col-lg-3">
                        <div className="txt">travel
                            tackle.
                            <i class="fa fa-plane" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row r1a">
                            <div className="col">
                                home
                                <div className="active"></div>
                            </div>
                            <div className="col">
                                about
                            </div>
                            <div className="col">
                                services
                            </div>
                            <div className="col">
                                contact
                            </div>
                            <div className="col">
                                <input placeholder='search' type="search" name="" id="" />
                            </div>
                            <div className="col flex">
                                <div className="icon">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </div>

                                <div className="icon">
                                    <i class="fa fa-facebook" aria-hidden="true"></i>
                                </div>

                                <div className="icon">
                                    <i class="fa fa-youtube-play" aria-hidden="true"></i>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row r2">
                    <div className="col-lg-5">
                        <div className="txt1">
                            IT'S TIME
                            FOR THAT
                            EUROTRIP!

                        </div>
                        <div className="txt2">
                            Lorem ipsum dolor sit
                            adipiscing etit, sed dil
                            euismod tincidunt

                        </div>
                        <div className="txt3">
                            See deals
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
