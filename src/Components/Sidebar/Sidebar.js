import s from './Sidebar.module.css';
import SidebarElement from './SidebarElement/SidebarElement'
let sidebarTitles = [
      {id: 1, label: 'GitHub', link: './Images/github.png'},
      {id: 2, label: 'Diploma', link: './Images/diploma.png'},
      {id: 3, label: 'LinkedIn', link: './Images/linkedin.png'},
]

let sidebarElements = sidebarTitles.map( element => {
   return <SidebarElement key={element.id}  title={element.label} link={element.link} />
})
function Sidebar() {
  console.log(sidebarElements)
  return (
    <div className={s.Sidebar}>
      {sidebarElements}
    </div>
  );
}

export default Sidebar;
