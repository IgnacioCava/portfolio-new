import styled from "styled-components";
import PageContent from './PageContent'
import Bulletin from './Bulletin'
import {useState, useEffect, lazy, memo} from 'react'
const Page = ({current, page, setPage}) => {

    const [changed, setChanged] = useState(0)
    const [pageData, setData] = useState(current)
    const [pageTitle, setTitle] = useState(page)

    useEffect(() => {
        if(changed === 0) return setChanged(false)
        setChanged(true)
        const loading = setTimeout(() => {
            setChanged(false)
            setData(current)
            setTitle(page)
        }, 500)
        return () => clearTimeout(loading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    

    return (
        <PageContainer className={!changed ? 'anim' : 'loading'}>
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
    &.rightPage{
        transform: translateX(10%);
    }
    &.topPage{
        transform: translateY(10%);
    }
    transform: translateX(10%);
    transition: .5s cubic-bezier(0.39, 0.07, 0.51, 0.81);
    &.anim{
        opacity: 1;
        transform: translateX(0%);
    }
    &.loading{
        opacity: 0;
    }
`

export default memo(Page);