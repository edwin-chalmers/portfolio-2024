import './NavButton.css';

export default function NavButton({ type }) {
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

    return (
        <button className='nav-button'>
            <img src={iconSrc} alt={`${type} icon`} />
        </button>
    );
}
 