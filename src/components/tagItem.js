import React, {Component} from 'react'

export default ({tag}) => (<li className="tag-item" key={`tag-${tag}`}>{tag}</li>)