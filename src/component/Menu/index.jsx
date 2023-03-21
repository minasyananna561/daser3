import { Link } from 'react-router-dom'

import style from './index.module.css'
export let Menu=()=>{
    return <ol className={style.menu}>
        <li><Link to="/Home" className={style.link}> Page 1</Link></li>
       <li><Link to="/Covid" className={style.link}>Page 2</Link></li>
        <li><Link to="/Title" className={style.link}>Page 3</Link></li>
        <li><Link to="/About" className={style.link}>Page 4</Link></li>
        <li><Link to="/Search" className={style.link}>Page 5</Link></li>
    </ol>
}