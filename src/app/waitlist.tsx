import { useRouter } from 'next/navigation'

const Waitlist = () => {
const router = useRouter()
  return (
    <button className="bg-gray-600 hover:bg-gray-500 text-amber-50 font-bold cursor-pointer p-4 rounded-sm" onClick={()=>{router.push('https://tally.so/r/3NE1kW')}}>Join Waitlist</button>
  )
}
export default Waitlist;