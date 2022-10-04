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

// const skills = lazy(() => <SkillsContainer ref={scrollRef}>
//     {pages.skills.bulletin.images.map((image, index) => 
//     <Image key={index}>
//         <img loading={"loading" in HTMLImageElement.prototype ? 'lazy' : undefined} src={image.src} alt={image.label || 'skill'}/>
//         <span>{image.label}</span>
//     </Image>
//     )}

// const SkillsContainer = styled(Scrollable).attrs({overflow: 'hidden', behaviour: 'smooth'})`
//     display: flex;
//     flex-direction: row;
//     width: 100%;
//     flex-wrap: wrap; 
//     justify-content: flex-start;
//     gap: 0 5%;
//     padding-inline: .5rem;
//     margin-block: .5rem;
//     box-sizing: border-box;
//     height: 100%;
// `