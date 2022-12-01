import React,{useState} from 'react'
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./CreateNote.css";
// eslint-disable-next-line
const CreateNote = () => {
    const [isEXpanded, setIsExpanded]= useState(false);
    const [note,setNote] = useState({
        title:"",
        content:""
    });
    const expand =()=>{
        setIsExpanded(true);
    };
    const handlechange = (event) => {
      const { name,value } = event.target;
      setNote((prevNote)=>{
        return{
            ...prevNote,
            [name]:value
        }
      })
    };
    console.log(note);
  return (
    <div>
      <form className="create-note">
       {isEXpanded && <input name='title' placeholder='Title' type="text" onChange={handlechange}/>}
        <textarea name="content" placeholder="Take a note.." onClick={expand} onChange={handlechange}/>
        <Zoom in= {isEXpanded}>
       <Fab onClick={() => {}}>
        <AddIcon/>
        </Fab> 
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
