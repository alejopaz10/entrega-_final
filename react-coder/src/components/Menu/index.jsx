import LinkButton from "../LinkButton";

const Menu =({links}) =>{
return(
    <menu>
        {links.map(link=><LinkButton ClassName='menu'href={link.href} label={link.label} />)}
    </menu>
);
}
export default Menu;