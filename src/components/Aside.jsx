import { useState } from "react"
import { users } from "../services/mockApi"


const Aside = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    //filter()
    //for()
    //forEach()
    const filteredUsers = users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
  




return (
    <aside>
        <h1>Chat Utn</h1>
        <p>Estas buscando a {search}</p>
        <input type="search" placeholder="Buscar Contactos" onChange={handleChange} />
        <ul>
            {
                filteredUsers.map((user) => (
                    <li>{user.name}
                        <small> {user.status} </small>
                    </li>
                ))
            }
        </ul>
    </aside>

)
}
export { Aside }