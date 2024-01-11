import styles from './page.module.css'
import SidebarItem from './components/sidebar/SidebarItem'


// overview icons 
import { MdStart } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { AiOutlineRead } from 'react-icons/ai';
// agile icons 
import { MdOutlineManageAccounts } from 'react-icons/md';
import { MdOutlineDashboard } from 'react-icons/md';
import { BsCardChecklist } from 'react-icons/bs';
import { LiaTasksSolid } from 'react-icons/lia';

export default function Home() {

  // set dropdown icons 
  const overviewIcons = [MdStart, ImStatsDots, AiOutlineRead];
  const agileIcons    = [MdOutlineManageAccounts, MdOutlineDashboard, 
                          BsCardChecklist, LiaTasksSolid];
  
  // Home page specific styling
  const iconStyles = {
    fill:  'white',
    width: '100px',
    height: '100px',
    margin: 'auto',
    // TODO: add color change on hover
  }

  const iconContainerStyles = {
    border: '2px solid white',
    backgroundColor: '#0D74F5',
    margin: 'auto',
    height: '100px',
    width: '100px',
    color: 'white',
    fontSize: '20px',
    padding: '5px'
    // TODO: add color change on hover
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Welcome [NAME]</h1>
      {/* TODO: FIX THIS STYLING WHAT IS GOING ON */}
      <div style={{position:'relative'}}>
        <div style={iconContainerStyles}> 
              <MdStart style={iconStyles}/>
        </div>
        <h2>Getting Started</h2>
      </div>

    </div>
  )
}


