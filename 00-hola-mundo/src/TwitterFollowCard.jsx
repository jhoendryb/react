import { useState } from 'react'
export function TwitterFollowCard({ children, userName, initialIsFollowing = false }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'is-following' : '';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    };

    return (
        <article className='tw-followCard'>
            <header>
                <img src={`https://unavatar.io/${userName}`} alt="El avatar de Midudev" />
                <div>
                    <strong>{children}</strong>
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopFollow'>Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    );
}