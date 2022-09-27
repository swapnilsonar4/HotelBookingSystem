import PropTypes from 'prop-types'
import React, { Component } from 'react'
import './LandingPage.css';
import { Button } from 'bootstrap';

export class LandingPage extends Component {
    static propTypes = {}

    render() {
        return (
            <div class='LandingPage'>
                <div>
                    <div class="imgPosition">
                        <div className='center'>
                            <h3>World's leading chain of hotels and homes</h3>
                            <h6>More Destinations. More Ease. More Affordable.</h6>
                            <a href='/login'><button type="button" class="btn btn-primary">Explore more</button></a>{"    "}
                            <a href='/ContactUs'><button type="button" class="btn btn-primary">Contact Us</button></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage