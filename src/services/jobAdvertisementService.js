import axios from "axios";

export default class JobAdvertisementService{
    getJobAdvertisement(){
        return axios.get("http://localhost:8080/api/jobAdvertisements/getAll")
    }
    addJobAdvertisement(){
        return axios.post("http://localhost:8080/api/jobAdvertisements/add")
    }
}