import { Article } from '../../components'
import { articles } from './articles'
import './blog.css'

export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-title">
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          {<Article key={articles[0].id} fecha={articles[0].date} titulo={articles[0].title} img={articles[0].img}/>}
        </div>
        <div className="gpt3__blog-container__groupB">
        {
          articles.map(article => (
            article.id !== '1' ? <Article key={article.id} fecha={article.date} titulo={article.title} img={article.img}/> : ''
          ))
        }
        </div>
      </div>
    </div>
  )
}
