import "./Footer.css"

export const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a target="blank" href='https://www.instagram.com/alejogomez6'>
                <img src="/img/instagram.png" alt='instagram' />
            </a>
            <a target="blank" href='https://www.twitter.com/aleqi'>
                <img src="/img/twitter.png" alt='twitter' />
            </a>
            <a target="blank" href='https://www.github.com/alejogomez6'>
                <img src="/img/github.png" alt='Github' />
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Made by Alejo Gomez</strong>
    </footer>
}