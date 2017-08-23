import {connect } from 'react-redux'

import React from 'react'

const Message = ({message}) => (
    message ? <span className="message">{message}</span> : null
)

export default connect(
    (state) => ({
        message: state.message
    })
)(Message)
