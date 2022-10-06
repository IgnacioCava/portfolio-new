import { skills } from "../../../pages"
import { Section } from "../../../styleConfig/"
import { useAutoScrollRef } from "../../../helpers"
import LazyImage from "../../LazyImage"
import { Image } from './styled'

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

