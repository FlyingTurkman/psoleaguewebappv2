'use client'
import Lines from "../Lines";
import PlayerIcon from "../../PlayerIcon";

export default function F421({color1,color2,fontcolor,roster}:{color1:string,color2:string,fontcolor:string,roster:string[]}){
    return(
        <div className="flex w-full p-2">
            <div className="flex flex-col w-full bg-green-900 relative aspect-stadium rounded p-2">
                <Lines/>
                <div className="flex flex-1 w-full items-start justify-around z-[2] flex-row">
                    
                    {/* opponent gk */}

                </div>
                <div className="flex flex-1 w-full items-start justify-around z-[2] flex-row">
                    
                    {/* forwards */}
                    <div className="flex flex-1 h-1/3 items-center justify-around">
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'CF'}
                        playerid={roster[7]}
                        />
                    </div>
                </div>
                <div className="flex flex-1 w-full items-center justify-around z-[2] flex-row">
                    
                    {/* mids */}
                    <div className="flex flex-1 h-1/3 items-center justify-around">
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'LCM'}
                        playerid={roster[5]}
                        />
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'RCM'}
                        playerid={roster[6]}
                        />
                    </div>
                </div>
                <div className="flex flex-1 w-full items-end justify-around z-[2] flex-row">
                    
                    {/* defs */}
                    <div className="flex flex-1 h-1/3 items-center justify-around">
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'LB'}
                        playerid={roster[1]}
                        />
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'LCB'}
                        playerid={roster[2]}
                        />
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'RCB'}
                        playerid={roster[3]}
                        />
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'RB'}
                        playerid={roster[4]}
                        />
                    </div>
                </div>
                <div className="flex flex-1 h-1/3 items-end mt-auto justify-around">
                    
                    {/* gk */}
                    <div className="flex flex-1 h-1/3 items-center justify-around">
                        <PlayerIcon
                        color1={color1}
                        color2={color2}
                        fontcolor={fontcolor}
                        position={'GK'}
                        playerid={roster[0]}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}