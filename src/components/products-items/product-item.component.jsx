import React, {Component} from 'react';
import './product-item.component.scss'
import clickMe from '../img/arrow_click_me.png'
import sparks from '../img/sparks.png'

class Product extends Component{
    constructor(props){
        super();
        this.state = {
            hovered: false
        }
    }
    render(){
        // eslint-disable-next-line
        const {name,price,color,img,order,id,width, link} = this.props
        return(
            <>  
            <div className="whole">
                <div 
                    className={"card " + (this.state.hovered?'hmoc':'')} 
                    style={{backgroungColor: `${color}`}} 
                    onMouseEnter={()=>{this.setState({hovered: true})}}
                    onMouseLeave={()=>{this.setState({hovered: false})}}
                    >
                    <a id = 'redirect'href={name} style={{padding: '0px'}}>
                        <div className="sparks">
                            <img src={sparks} alt=""/>
                        </div>
                        <div className="product">
                            <div className="price">
                                <h4 className="prod">{name.toUpperCase()}</h4>
                                <h4 className="prod">{price}</h4>
                            </div>
                            <div className="read">
                                {/* <h3>Click picture</h3> */}
                                <img src={clickMe} onLoad={()=>{this.props.imgLoaded()}} alt=""/>
                            </div>
                        </div>
                            <div className={"photo "+ (this.state.hovered?'chmoc':'')}>
                                <img src={img} alt=""/>
                            </div>
                    </a>
                    
                </div>
            <form action={link} method="get" target="_blank">
                <button className="btn-amazon">See on Amazon</button>
            </form>
    
            </div>
        </>
        )
    }
}

export default Product;