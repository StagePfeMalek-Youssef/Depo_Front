import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuggestionService from '../../../services/AdminService/SuggestionService';
import './ListSuggestion.css';

const ListSuggestion = () => {

    const [suggestions, setSuggestion] = useState([])

    useEffect(() => {

        getAllSuggestions();
    }, [])

    const getAllSuggestions = () => {
        SuggestionService.getAllSuggestion().then((response) => {
            setSuggestion(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    
    const deleteSuggestion = (suggestionId) =>{
        SuggestionService.deleteSuggestion(suggestionId).then( res => {
            this.setState({suggestions: this.state.suggestions.filter(suggestion => suggestion.suggestionId!== suggestionId)});
        });
    }



    return (
        <div className='main__container'>
            <h2 className = "main__title"> Tous Les Reclamation </h2>
            <Link to = "/add-suggestion" className = "btn btn-primary mb-2" > Ajouter Reclamation </Link>
            <table>
            <thead>
                    <th className='th1'> Suggestion Id </th>
                    <th className='th1'> Objet </th>
                    <th className='th1'> Message </th>
                    <th className='th1'> Actions </th>
                </thead>
                <tbody>
                    {
                        suggestions.map(
                            suggestion =>
                            <tr key = {suggestion.id}> 
                                <td> {suggestion.id} </td>
                                <td>{suggestion.objet}</td>
                                <td> {suggestion.message} </td>
                                <td>
                                    <Link className="btn btn-info" to={`/edit-suggestion/${suggestion.id}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteSuggestion(suggestion.id)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListSuggestion;