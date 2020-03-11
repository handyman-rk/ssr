import React from 'react';
import Title from './title';
import tweet from './tweet';

const CardRight = ({ app }) => (
  <div className="col-right">
    <div className="app-meta">
      <Title name={app.name} publisher={app.publisher} />
      <span className="app-lic">{app.price}</span>
    </div>
    <div className="app-intro" dangerouslySetInnerHTML={{ __html: app.desc }} />
    <hr />
    <div className="app-link">
      <a className="btn" href={app.link} target="_blank" rel="noreferrer noopener">Get App</a>
      <button type="button" className="ml-10 btn btn-twitter" onClick={(() => { tweet(app.tweet)})}>
        <span className="icon icon-inline icon-twitter-light"></span>
        Share on Twitter
      </button>
    </div>
  </div>
)


export default CardRight;
