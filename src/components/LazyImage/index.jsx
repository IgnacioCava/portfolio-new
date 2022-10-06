const LazyImage = ({src, alt}) => 
    <img 
        loading={"loading" in HTMLImageElement.prototype ? 'lazy' : undefined} 
        src={src} 
        alt={alt || 'icon'}/>

export default LazyImage