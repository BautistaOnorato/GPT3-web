import { routes } from "./rutas"

export const Menu = ({ handleAnchor, handleToggle }) => {
  return (
    <>
       {
        routes.map(route => (
          <p key={route.id} onClick={(e) => {
            handleAnchor(e, route.link)
            handleToggle()
          }}><a href={route.link}>{route.title}</a></p>
        ))
       }
    </>
  )
}
