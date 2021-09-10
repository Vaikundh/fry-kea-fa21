import React, { Component } from 'react';
import './Listing.css'
import {listings} from '../../Data.json'

class Listing extends Component {
    render() {
        var arr = [];
        Object.keys(listings).forEach(function(key) {
        arr.push(listings[key]);
        });
        return (
            arr.map(item => (
                <div className="reviews">
                    
                </div>
            )
        ));
    }
}
export default Listing;