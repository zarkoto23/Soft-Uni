import { get, post, put, del } from "./requester.js";
import { baseTeamsUrl } from "../constants.js";

async function getAll(){
  return await get(baseTeamsUrl)
}

async function getById(teamId) {
  return await get(`${baseTeamsUrl}/${teamId}`)
  
}

async function create(teamData) {
  return await post(baseTeamsUrl, teamData)
  
}
async function edit(teamId, teamData) {
  return await put(`${baseTeamsUrl}/${teamId}`,teamData)
}
 
const teamService={ edit, getById, getAll, create}
export default teamService 