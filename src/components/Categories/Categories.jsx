import React from 'react'
import { Link } from 'react-router-dom'

import "./Categories.scss"

const Categories = () => {
    return (
        <div className="categories">
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/1649660/pexels-photo-1649660.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Women</Link>
                    </button>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/5372767/pexels-photo-5372767.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Men</Link>
                    </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.pexels.com/photos/6561795/pexels-photo-6561795.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Tops</Link>
                    </button>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/5762468/pexels-photo-5762468.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Pants</Link>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.pexels.com/photos/5762488/pexels-photo-5762488.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                            <button>
                                <Link className="link" to="/products/1">Swimsuits</Link>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.pexels.com/photos/1649676/pexels-photo-1649676.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    <button>
                        <Link className="link" to="/products/1">Dresses</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Categories