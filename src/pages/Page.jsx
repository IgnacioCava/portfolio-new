import PageContent from './PageContent'
import Bulletin from './Bulletin'
import { useState, useEffect, memo } from 'react'
import { PageContainer, ResponsiveWrapper } from './styled'

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
            }, 30)
        }, 400)
        return () => clearTimeout(loading)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [current])

    return (
        <ResponsiveWrapper>
            <PageContainer className={!changed ? `loaded ${counterAnim?'counterAnim':''}` : `loading`} to={directions[page]} from={directions[pageTitle]} prev={directions[previousPage] || ''}>
                <Bulletin page={pageData.bulletin} title={pageTitle}/>
                <PageContent page={pageData} setPage={setPage}/>
            </PageContainer>
        </ResponsiveWrapper>    
    )
}

export default memo(Page);