import axios from "axios";
const list="http://localhost:2022/crud/institute/all";
const baselink="http://localhost:2022/crud/institute";

class InstituteService{
    getAllInstitutes(){
        return axios.get(list);
    }

    getById(collegeCode){
        return axios.get(`${baselink}/view/${collegeCode}`)
    }

    createInstitute(institute){
        return axios.post(`${baselink}/create`,institute)
    }

    updateInstitute(institute){
        return axios.put(`${baselink}/update`,institute)
    }

    deleteInstitute(collegeCode){
        return axios.delete(`${baselink}/delete/${collegeCode}`)
    }
}
export default new InstituteService();