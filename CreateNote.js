import React,{useState} from 'react'
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import "./CreateNote.css";

const CreateNote = (props) => {
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

    const submitNote = (event)=>{
     event.preventDefault();
      props.addNote(note);
      setNote({
        title:"",
        content:""
      });
      setIsExpanded(false);
    };
     
  return (
    <div>
      <form className="create-note">
       {isEXpanded && <input name='title' placeholder='Title' type="text" onChange={handlechange} value={note.title}/>}
        <textarea name="content" placeholder="Take a note.." onClick={expand} onChange={handlechange} rows={isEXpanded ? 3 : 1} value={note.content}/>
        <Zoom in= {isEXpanded}>
       <Fab onClick={submitNote}>
        <AddIcon/>
        </Fab> 
        </Zoom>
      </form>
    </div>
  );
};

export default CreateNote;
