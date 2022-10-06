import { contact } from "../../../pages"
import { Section } from "../../../styleConfig"
import { Link, Image } from './styled'

const Contact = () => {
    return (
        <Section>
            {contact.bulletin.images.map(({src, hoverSrc, label, link}, index) => 
            <Image key={index}>
                <img src={src} alt={label || 'social media'} id='normal-img'/>
                <Link href={link} target={link} src={hoverSrc} id='hover-img' alt={label || 'social media'}/>
            </Image>
            )}
        </Section>
    )
}

export default Contact
