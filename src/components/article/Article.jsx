import './article.css'

export const Article = ({ fecha, img, titulo }) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-img">
        <img src={img} alt="Img articulo" />
      </div>
      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{fecha}</p>
          <h4>{titulo}</h4>
        </div>
        <a href="#">Read Full Article</a>
      </div>
    </div>
  )
}
