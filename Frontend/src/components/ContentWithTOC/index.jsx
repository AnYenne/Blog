import { useEffect, useState } from "react"


const ContentWithTOC = ({content}) => {
    const [headings, setHeadings] = useState([])

    useEffect(()=>{


    if(!content) return

    const parser = new DOMParser()
    const doc = parser.parseFromString(content, 'text/html')

    const extractedHeadings = Array.from(doc.querySelectorAll("h2", "h3")).map(
        (heading, index) => ({
            id: `heading-${index}`,
            text: heading.textContent,
        })
    ) 
    setHeadings(extractedHeadings);
    },[content])
    return(
        <div>
                <ul>
                    {headings.map((heading) => (
                        <li key={heading.id} style={{ marginLeft: heading.tag === "h3" ? "20px" : "0" , listStyleType:'none'}}>
                            <a style={{textDecoration:'none'}} href={`#${heading.id}`}>{heading.text}</a>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
export default ContentWithTOC