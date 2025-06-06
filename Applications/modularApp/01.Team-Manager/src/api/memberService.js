import { baseMembersUrl } from "../constants.js";
import { get, post, put } from "./requester.js";


async function getAll(){
  return await get(`${baseMembersUrl}?where=status%3D%22member%22`)

}


async function getMemberships(teamId){
  return await get(`${baseMembersUrl}?where=teamId%3D%22${teamId}%22&load=user%3D_ownerId%3Ausers`)
}

async function requestJoin(teamId){
  return await post(baseMembersUrl,{teamId})
}

async function approveRequest(membership){
  membership.status='member'
  return await put(`${baseMembersUrl}/${membership._id}`, membership)

}

async function removeMembership(membershipId){
  await del(`${baseMembersUrl}/${membershipId}`)
}


const membersService= {getAll, getMemberships, requestJoin, approveRequest, removeMembership}
export default membersService