import React from "react"
import { graphql } from "gatsby"
import Article from "../components/article"

export const query = graphql`
  query Article($articleId: String!) {
    nodeArticle(id: { eq: $articleId }) {
      body {
        processed
      }
      title
      field_image {
        alt
      }
      relationships {
        field_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

const ArticleTemplate = ({ data }) => {
  const article = {
    title: data.nodeArticle.title,
    body: data.nodeArticle.body.processed,
    imageData:
      data.nodeArticle.relationships.field_image.localFile.childImageSharp
        .fluid,
    imageAlt: data.nodeArticle.field_image.alt,
  }

  return <Article {...article} />
}

export default ArticleTemplate
