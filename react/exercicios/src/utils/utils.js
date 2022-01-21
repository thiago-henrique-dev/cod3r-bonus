import React from "react"
export function childrenWithProps(props){
    return React.Children.map(props.children, child => {
               React.cloneElement(props.children, {
               ...props, ...child.props
        })
   })
}