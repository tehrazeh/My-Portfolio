import s from './Sidebar.module.css';
import SidebarElement from './SidebarElement/SidebarElement'


function Sidebar(props) {
  let sidebarElements = props.sideBar.sideButtons.map( element => {
    return <SidebarElement href={element.link} key={element.id} title={element.label} redirect={element.redirect}/>
 })

  return (
    <div className={s.Sidebar}>
      {sidebarElements}
    </div>
  );
}

export default Sidebar;
