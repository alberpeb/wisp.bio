import * as data from '../../data.json'
import EditProfile from '@/profilePage/EditProfile'
import { Profile } from '@/data/models'

export default async function Dashboard() {
  //NOTE: prevent warning by parsing JSON
  const profile: Profile = data
  return <EditProfile profile={profile} />
}