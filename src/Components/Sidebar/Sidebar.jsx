import s from './Sidebar.module.css';
import SidebarElement from './SidebarElement/SidebarElement'


function Sidebar(props) {
  let sidebarElements = props.sideBar.sideButtons.map( element => {
    return <SidebarElement sideButton={element} key={element.id}/>
 })

  return (
    <div className={s.Sidebar}>
      {sidebarElements}
    </div>
  );
}

export default Sidebar;
