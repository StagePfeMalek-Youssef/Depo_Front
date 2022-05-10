import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import CommentaireService from '../../../services/AdminService/CommentaireService';
import "./comment.css"



const AjouteCommentaire = () => {

    const [message, setMessage] = useState('')
    const history = useHistory();
    const { id } = useParams();
    const  titreSujet=sessionStorage.getItem("titreSujet")
    const formData = new FormData();
    formData.append("message", message);
    formData.append("titreSujet", titreSujet);

    const saveOrUpdateSujet = (e) => {
        e.preventDefault();
      
        const Commentaire = { message }
      
                
            CommentaireService.createCommentaire(formData).then((response) => {
                
                console.log(response.data)
                sessionStorage.setItem("titre",response.data.titresujet)
                history.push('/ViewSujet/'+id);

            }).catch(error => {
                console.log(error)
            })
        }

    
   

     
    useEffect(() => {

        CommentaireService.getCommentaireById(id).then((response) => {
            setMessage(response.data.message)
        

        }).catch(error => {
            console.log(error)
        })
    }, [])
    

   

    return (
        
           
            <div >
                
                  
                
                <div className="title">
                 
                                <div>
                                        <label> message </label>
                                        <textarea
                                           type="text"

                                            name="message"

                                            className="comment-form-textarea"
                                          value={message}
                                          onChange={(e) => setMessage(e.target.value)}
      />
                                    </div>
                                <div className='inputfield'>
                                <button  className="comment-form-button"  onClick={(e) => saveOrUpdateSujet(e)} >Envoyer </button>
                                <Link to="/sinistres"     className="comment-form-button comment-form-cancel-button" style = {{marginLeft:"10px"}}> Annuler </Link>
                            </div>

                        </div>
                
                </div>

           

        
    )
}

export default AjouteCommentaire;