import { useEffect, useState } from "react"
// import { users } from "../services/mockApi"


const Aside = ({onActiveUser}) => {
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    const fetchingData = async () => {
        try {
            const response = await fetch(" https://dummyjson.com/users")
            if (!response.ok) {
                alert("fallo el pedido")//error en lo que esta buscando, "si existe la pagina" no hay lo que vos buscas.
                return
            }
            const data = await response.json()
            setUsers(data.users)


        } catch (error) {
            console.log(error.message)//error en la api, la ruta esta mal o no existe.
        }
    }
    useEffect(() => { fetchingData() }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    //forEach()
    //for()
    //filter()
    const filteredUsers = users.filter((user) => {
        const fullName = `${user.firstName} ${user.lastName}`

        return fullName.toLowerCase().includes(search.toLowerCase())
    })

    const handleClick = (id) => {
        onActiveUser(id)
   
    }




    return (
        <aside>
            <h1>Chat Utn</h1>
            <input className="search" type="search" placeholder="Buscar Contactos" onChange={handleChange} />
            {
                filteredUsers.length === 0 && <p className="not-found-text">"No se encontraron Contactos"</p>
            }
            <ul>
                {
                    filteredUsers.map((user) => (
                        <li key={user.id} onClick={() => handleClick(user.id)}>
                            <img src={user.image} alt="" />
                            <div>
                                {user.firstName} {user.lastName}
                                <small> {user.address.country} </small>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </aside>

    )
}
export { Aside}