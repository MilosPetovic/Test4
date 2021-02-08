import axios from 'axios'

export const GetLaunches = () => axios.get('https://api.spacexdata.com/v4/launches')
export const GetRockets = () => axios.get ('https://api.spacexdata.com/v4/rockets/:id')