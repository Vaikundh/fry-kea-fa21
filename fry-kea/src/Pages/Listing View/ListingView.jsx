import React, { Component } from 'react';
import './ListingView.css'
import {listings} from '../../Data.json'

class ListingView extends Component {
    render() {
        var arr = [];
        Object.keys(listings).forEach(function(key) {
        arr.push(listings[key]);
        });
        return (
            arr.map(item => (
                <a href={"/"+item.id} className="listings">
                    <div className="listings">
                        <div className="listing-container">
                            <img src={'../.'.concat(item.image)} className='listing-image'>

                            </img>
                            <div className='listing-info'>
                                <h1>{item.name}</h1>
                                <h3>{'$'.concat(item.price).concat('.00')}</h3>
                            </div>
                            <div className='listing-stock'>
                                <h2 className={(item.stocked==="yes"?"green":"red")}>{(item.stocked==="yes"?"In Stock":"Out of Stock")}</h2>
                            </div>
                        </div> 
                    </div>
                </a>
            ) 
        ))
    }
}
export default ListingView;

class ListingExpanded extends Component {
    render() {
        var arr = [];
        Object.keys(listings).forEach(function(key) {
        arr.push(listings[key]);
        });
        return (
            arr.map(item => (
                <a href={"/"+item.id}>
                    <div className="listings">
                        <div className="listing-container">
                            <img src={'../.'.concat(item.image)} className='listing-image'>

                            </img>
                            <div className='listing-info'>
                                <h1>{item.name}</h1>
                                <h3>{'$'.concat(item.price).concat('.00')}</h3>
                            </div>
                            <div className='listing-stock'>
                                <h2 className={(item.stocked==="yes"?"green":"red")}>{(item.stocked==="yes"?"In Stock":"Out of Stock")}</h2>
                            </div>
                        </div> 
                    </div>
                </a>
            ) 
        ))
    }
}