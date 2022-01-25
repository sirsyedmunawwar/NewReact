import React from 'react'
import Author from './Author'
export default function ArforReact(props) {
    return (
        <>
        <div className="leftSide">
        {props.updaterreact.map((item) =>
            <>
                <div className="leftsidediv">
                    <p className='tag'>{item.tag}</p>
                    <img className="leftsideimage" src={item.pic} />
                    <h1 className="leftSidehead">
                        {item.head}
                    </h1>   <Author />
                </div>
             
            </>)}
            
</div>

</>
    )
}
