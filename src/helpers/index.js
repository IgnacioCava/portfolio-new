import { useCallback, useEffect, useRef, useState } from "react"

export const Capitalize = (string) =>string.charAt(0).toUpperCase() + string.substring(1)

export const indexOf = (element, array) => array.findIndex(arrayElement => arrayElement === element)

export const useAutoScrollRef = (Hz, elementsToMove, deps) => {
    const elementRef = useRef(null)
    const deepDeps = JSON.stringify([deps, elementsToMove]) 
    // This may seem like a sketchy comparison method, but it was actually approved by Dan Abramov (React core team member).
    // https://github.com/facebook/react/issues/14476#issuecomment-471199055

    Hz = (1/Hz)*1000

    const [resized, setResized] = useState(0)
    const [hover, setHover] = useState(false)

    const scroll = useCallback(() => {
        const element = elementRef.current
        
        if(!hover){
            const a = []
            for(let i = 0; i<elementsToMove; i++) a.push(element.children[i].cloneNode(true))
            a.forEach(e => element.appendChild(e))
            
            element.scrollBy({top: element.children[0].clientHeight, behaviour: 'smooth'})
            setTimeout(() => {
                for(let i = 0; i<elementsToMove; i++) element.removeChild(element.firstChild)
            }, Hz/2)
        }
        
    }, [Hz, elementsToMove, hover])
    
    useEffect(() => {
        if(elementRef.current) {
            const element = elementRef.current
            elementRef.current.addEventListener('mouseenter', () => setHover(true))
            elementRef.current.addEventListener('mouseleave', () => setHover(false))
            const interval = !hover && setInterval(scroll, Hz)
            return () => {
                clearInterval(interval)
                element.removeEventListener('mouseenter', () => setHover(true))
                element.removeEventListener('mouseleave', () => setHover(false))
            }
        }
    }, [deepDeps, Hz, resized, scroll, hover])

    // Prevent autoscrolling while the window is being resized
    useEffect(() => {
        window.addEventListener('resize', () => setResized(r => r+1))
    }, [])

    return elementRef
}

const hasDirection = (place, direction) => place.includes(direction)

export const transition = (to, from) => {
    const dir = [0,0,0]

    if(hasDirection(from, 'left') !== hasDirection(to, 'left')){
        dir[0] = hasDirection(to, 'left')? '7%' : '-7%'
    }
    if(hasDirection(to, 'top') !== hasDirection(from, 'top')){
        dir[1] = hasDirection(to, 'top')? '7%' : '-7%'
    }
    
    return dir.join()
}

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w+)+$/

export const emptyFields = (obj) => Object.values(obj).filter(e=>e).length < Object.keys(obj).length

export const handleValidation = (email) => email && emailRegexp.test(email)
