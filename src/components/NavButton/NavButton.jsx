import './NavButton.css';

export default function NavButton({ type, url, onClick }) {
    const iconSrc = type === 'about' ? './assets/about.svg'
        : type === 'mail' ? './assets/mail.svg'
        : type === 'projects' ? './assets/project.svg'
        : type === 'linkedin' ? './assets/linkedin.svg'
        : type === 'github' ? './assets/github.svg'
        : type === 'twitter' ? './assets/twitter.svg'
        : type === 'friends' ? './assets/friends.svg'
        : './assets/sick.svg'

    function handleClick() {
        if(onClick) onClick()
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <button className='NavButton' onClick={handleClick}>
            <img src={iconSrc} alt={`${type} icon`} />
        </button>
    )
}

 