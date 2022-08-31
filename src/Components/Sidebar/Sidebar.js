import s from './Sidebar.module.css';
import SidebarElement from './SidebarElement/SidebarElement'


function Sidebar(props) {
  let sidebarElements = props.sideBar.sideButtons.map( element => {
    return <SidebarElement key={element.id}  title={element.label} />
 })

  return (
    <div className={s.Sidebar}>
      {sidebarElements}
    </div>
  );
}

export default Sidebar;
