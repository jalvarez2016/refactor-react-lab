export default function NavBar(props) {
    return ( 
        <div className="nav">
            <ul>
                {
                    props.pages.map(page => {
                        return (
                            <a key={page.text} href={`${page.link}`}>
                                <li>{page.text}</li>
                            </a>
                        );
                    })
                }
            </ul>
        </div>
    )
}