import styled from "styled-components";
import PageContent from './PageContent'
import Bulletin from './Bulletin'
import {useState, useEffect, memo} from 'react'

const hasDirection = (place, direction) => place.includes(direction)

const transition = (to, from) => {
    const dir = [0,0,0]

    if(hasDirection(from, 'left') !== hasDirection(to, 'left')){
        dir[0] = hasDirection(to, 'left')? '7%' : '-7%'
    }
    if(hasDirection(to, 'top') !== hasDirection(from, 'top')){
        dir[1] = hasDirection(to, 'top')? '7%' : '-7%'
    }
    
    return dir.join()
}

const directions = {
    about: 'top left',
    skills: 'top right',
    projects: 'bottom left',
    contact: 'bottom right'
}

const Page = ({current, page, setPage}) => {

    const [changed, setChanged] = useState(0)
    const [pageData, setData] = useState(current)
    const [pageTitle, setTitle] = useState(page)
    const [previousPage, setPreviousPage] = useState('')
    const [counterAnim, setCounterAnim] = useState(false)

    useEffect(() => {
        if(changed === 0) return setChanged(false)
        setChanged(true)
        const loading = setTimeout(() => {
            setChanged(false)
            setData(current)
            setPreviousPage(pageTitle)
            setTitle(page)
            setCounterAnim(true)
            setTimeout(() => {
                setCounterAnim(false)
            }, 40)
        }, 400)
        return () => clearTimeout(loading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    

    return (
        <PageContainer className={!changed ? `loaded ${counterAnim?'counterAnim':''}` : `loading`} counterAnim={counterAnim} to={directions[page]} from={directions[pageTitle]} prev={directions[previousPage] || ''}>
            <PageContent page={pageData} setPage={setPage}/>
            <Bulletin page={pageData.bulletin} title={pageTitle}/>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 45px 5% 45px 10%;
    box-sizing: border-box;
    color: white;
    opacity: 0;
    transition: .4s cubic-bezier(0.39, 0.07, 0.51, 0.81);
    &.loaded{
        opacity: 1;
    }
    &.loading{
        opacity: 0;
        transform: translate3d(${({to, from}) => transition(to, from)});
    }
    &.counterAnim{
        transition: 0s !important;
        opacity: 0 !important;
        transform: translate3d(${({prev, to}) => transition(prev, to)});
    }

`

export default memo(Page);