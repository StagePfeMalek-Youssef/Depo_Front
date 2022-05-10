import axios from 'axios'

const SUGGESTION_BASE_REST_API_URL = 'http://localhost:8080/Api/Suggestion';

class SuggestionService{

    getAllSuggestion(){
        return axios.get(SUGGESTION_BASE_REST_API_URL)
    }

    createSuggestion(username,suggestion){
        return axios.post(SUGGESTION_BASE_REST_API_URL+"/"+username,suggestion)
    }

    getSuggestionById(suggestionid){
        return axios.get(SUGGESTION_BASE_REST_API_URL + "/" +suggestionid);
    }

    updateSuggestion(suggestionid, suggestion){
        return axios.put(SUGGESTION_BASE_REST_API_URL + "/" +suggestionid, suggestion);
    }

    deleteSuggestion(id){
        return axios.delete(SUGGESTION_BASE_REST_API_URL + "/" + id);
    }
}

export default new SuggestionService();