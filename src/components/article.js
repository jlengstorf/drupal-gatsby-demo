import React from "react"
import Image from "gatsby-image"

const Article = ({ title, body, imageData, imageAlt }) => (
  <article>
    <h1>{title}</h1>
    <Image fluid={imageData} alt={imageAlt} />
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </article>
)

export default Article
