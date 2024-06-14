import './NavButton.css';

export default function NavButton({ type, url }) {
    const iconSrc =
        type === 'about' 
        ? './assets/about.svg'
            : type === 'mail' 
            ? './assets/mail.svg'
                : type === 'projects'
                ? './assets/project.svg'
                    : type === 'linkedin'
                    ? './assets/linkedin.svg'
                        : type === 'github'
                        ? './assets/github.svg'
                            : type === 'twitter'
                            ? './assets/twitter.svg'
                                : type === 'friends'
                                ? './assets/friends.svg'
                                    : './assets/sick.svg'; 

    const handleClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <button className='nav-button' onClick={handleClick}>
            <img src={iconSrc} alt={`${type} icon`} />
        </button>
    );
}
 