import React from 'react'
 const Repositem = ({repo }) => {
    return (
        <div className="card" >
            <h3>
    <a href={repo.html_url}>{repo.name}</a>
            </h3>
        </div>
    )
}
Repositem.propTypes={
    repo: propTypes.object.isRequired
}
export default Repositem