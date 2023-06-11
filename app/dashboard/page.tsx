import * as data from '../../data.json'
import EditProfile from '@app/dashboard/(profile)/page'
import ProfileProps from '@types'

export default async function Dashboard() {
  //NOTE: prevent warning by parsing JSON
  const profile: ProfileProps[] = JSON.parse(JSON.stringify(data))
  return <EditProfile profile={profile} />
}
