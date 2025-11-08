import { useLocalStorage } from '../../hooks/usePersistedState';
import { LOCAL_STORAGE_KEY } from '../../services/Service';

const OrqSearchTask = () => {
    const [title, setTitle] = useLocalStorage(LOCAL_STORAGE_KEY, "");
    return (
        <div>
            <form className="orqSearch">
                <input className="orqSearchTask__input"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Tarefa"
                />
                <button className="orqSearchTask__button" type="submit">Pesquisar</button>
            </form>
        </div>
    )
}

export default OrqSearchTask
