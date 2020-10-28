import './Article.css';

function Article(props){

  const {article} = props;
  const {title, category, published, content} = article;

  return(
    <div className="Article">
        <h1>{title}</h1>
        <h2>{category}</h2>
        <h3>{published ? 'Published' : 'Draft'}</h3>
        <p>{content}</p>
    </div>
  )
}
export default Article