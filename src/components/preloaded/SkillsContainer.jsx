import { pages, skills } from "../../pages"
import styled from "styled-components"
import { Scrollable, Section } from "../../styleConfig/scroll"
import { useAutoScrollRef } from "../../helpers"
import LazyImage from "../LazyImage"


const Skills = () => {
    const scrollRef = useAutoScrollRef(.5, 3)

    return (
        <Section ref={scrollRef}>
            {skills.bulletin.images.map(({src, label}, index) => 
            <Image key={index}>
                <LazyImage src={src} alt={label || 'skill'}/>
                <span>{label}</span>
            </Image>
            )}
        </Section>
    )
}

export default Skills

const Image = styled.div`
    width: 30%;
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    img{
        width: 100%;
        height: 80%;
        object-fit: contain;
    }
    span{
        font-size: 1.1rem;
        font-weight: 300;
        text-align: center;
        height: fit-content;
    }
`