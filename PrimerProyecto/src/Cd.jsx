export function Cd({ name, username }) {
    return (
        <article className="cd-profile">
            <header className="cd-header">
                <img
                    className="cd-avatar"
                    alt="avatar" src="https://unavatar.io/readcv/elenatorro" />
            </header>
            <div className='cd-content'>
                <strong className='cd-nombre'>{name}</strong>
                <span className='cd-username'>@{username}</span>
            </div>
            <aside className='cd-actions'>
                <button className='cd-button'>Seguir</button>
            </aside>

        </article>
    );
}