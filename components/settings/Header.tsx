import ReactCountryFlag from "react-country-flag";
import Link from "next/link";
import { playerType,teamsType } from "../../typings";

export default function Header({user,userTeam}:{user:playerType,userTeam:teamsType}){
    return(
        <div className="flex flex-row w-full space-x-2 bg-white backdrop-blur-sm bg-opacity-70 p-2 rounded">
            <div className="flex items-center justify-center w-32 aspect-square rounded-full">
                <img src='/teamlogo.png' className="w-full aspect-square rounded-full object-contain"></img>
            </div>
            <div className="flex flex-col space-y-1">
                <h1>
                    {user?.username}
                </h1>
                <ReactCountryFlag countryCode={user.country} svg title={user.country} style={{width:'30px'}}/>
                <Link href={`/teams/${userTeam?._id}`} className='link flex flex-row'>
                    <div className="flex w-8 h-8 aspect-square rounded-full">
                        <img src="/teamlogo.png" className="h-6 w-6 aspect-square object-contain rounded-full"></img>
                    </div>
                    {userTeam?.name} [{userTeam.shortname}]
                </Link>
                <div className="flex flex-row space-x-2">
                    <div className=" flex w-6 aspect-square rounded-full bg-green-600 items-center justify-center text-xs text-white cursor-default">
                        <label>{user?.mainpos}</label>
                    </div>
                    <div className=" flex w-6 aspect-square rounded-full bg-green-600 items-center justify-center text-xs text-white">
                        <label>{user?.secondpos}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}